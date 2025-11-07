import { supabase } from '@/lib/supabaseClient';
import { detectTextFromImage } from '@/lib/googleVisionClient';
import type { Json, Database } from '@/lib/supabaseTypes';

// Upload + OCR + Validation
export async function uploadReceipt(file: File, userId: string, total: number) {
  if (!file) throw new Error('File missing');
  if (!userId) throw new Error('User ID missing');

  // Step 1 — Upload image to Supabase Storage
  const filePath = `receipts/${userId}/${Date.now()}_${file.name}`;
  const { error: uploadError } = await supabase.storage
    .from('receipts-bucket')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage.from('receipts-bucket').getPublicUrl(filePath);
  const imageUrl = urlData.publicUrl;

  // Step 2 — Run OCR using Vision REST API
  const ocrText = await detectTextFromImage(imageUrl);

  // Step 3 — Parse OCR result
  const parsed = parseReceiptText(ocrText);

  // Step 4 — Validate
  const validation = validateReceiptData({ parsed, providedTotal: total, ocrText });

  // Step 5 — Insert into DB
  const { data: receipt, error: insertError } = await (supabase as any)
    .from('receipts')
    .insert([
      {
        user_id: userId,
        image_url: imageUrl,
        total,
        parsed_total: parsed.total ?? null,
        parsed_date: parsed.date ?? null,
        merchant: parsed.merchant ?? null,
        // store OCR text as JSON string or object depending on detectTextFromImage
        ocr_text: (typeof ocrText === 'string' ? ocrText : JSON.stringify(ocrText)) as unknown as Json,
        status: validation.status,
        validation_flags: validation.flags,
      },
    ])
    .select()
    .single();

  if (insertError) throw insertError;

  return { receipt, validation };
}

// --- Helper Types & Functions ---
type ParsedReceipt = {
  merchant: string | null
  date: string | null
  total: number | null
}

function parseReceiptText(text: string): ParsedReceipt {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const merchant = lines.find((l) => /[A-Za-z]{3,}/.test(l)) || null;

  const dateRegex =
    /(\d{1,2}[\/\-\.\s]\d{1,2}[\/\-\.\s]\d{2,4})|(\d{4}[\/\-\.\s]\d{1,2}[\/\-\.\s]\d{1,2})/;
  const dateMatch = text.match(dateRegex);
  const date = dateMatch ? dateMatch[0] : null;

  const totalRegex =
    /(total|amount|grand total|net payable|₹|\bINR\b).{0,20}?([0-9]+[.,][0-9]{2})/i;
  const totalMatch = text.match(totalRegex);
  const total = totalMatch ? parseFloat(totalMatch[2].replace(',', '')) : null;

  return { merchant, date, total };
}
function validateReceiptData({
  parsed,
  providedTotal,
  ocrText,
}: {
  parsed: ParsedReceipt
  providedTotal: number
  ocrText: string
}): { status: string; flags: string[] } {
  const flags: string[] = [];
  let status = 'pending';

  if (!ocrText || ocrText.length < 20) flags.push('no_ocr_text');
  if (!parsed.merchant) flags.push('no_merchant');
  if (!parsed.date) flags.push('no_date');
  if (!parsed.total) flags.push('no_parsed_total');
  if (/SAMPLE|DRAFT|COPY/i.test(ocrText)) flags.push('watermark_sample');

  if (parsed.total !== null) {
    // protect against division by zero
    const base = parsed.total === 0 ? 1 : parsed.total;
    const diff = Math.abs((parsed.total - providedTotal) / base);
    if (diff > 0.15) flags.push('total_mismatch');
  }

  if (flags.includes('watermark_sample') || flags.includes('no_ocr_text')) {
    status = 'fraud';
  } else if (flags.length > 2) {
    status = 'needs_manual';
  }

  return { status, flags };
}
