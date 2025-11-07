import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import type { Database } from '@/lib/supabaseTypes';

// Sample user for testing - match the table structure exactly
const SAMPLE_USER = {
  id: crypto.randomUUID(), // generate a unique ID
  created_at: new Date().toISOString()
  // Note: removed email as it's not in the table structure yet
};

export async function GET() {
  try {
    // First try to get existing users
    let { data, error } = await supabase.from('users').select('*').limit(1);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // If no users exist, create a sample one
    if (!data || data.length === 0) {
      const { data: insertedData, error: insertError } = await (supabase as any)
        .from('users')
        .insert([SAMPLE_USER])
        .select();

      if (insertError) {
        return NextResponse.json({ error: insertError.message }, { status: 400 });
      }
      data = insertedData;
    }

    return NextResponse.json({ data, message: 'Connection successful!' });
  } catch (err) {
    console.error('Supabase query error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
