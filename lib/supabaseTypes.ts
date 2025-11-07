export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          // email field removed until we confirm schema
        }
        Insert: {
          id: string
          created_at?: string
        }
        Update: {
          id?: string
          created_at?: string
        }
      }
      receipts: {
        Row: {
          id: string
          user_id: string
          image_url: string
          total: number
          parsed_total: number | null
          parsed_date: string | null
          merchant: string | null
          ocr_text: Json | null
          status: string
          validation_flags: string[]
          created_at?: string
        }
        Insert: {
          id?: string
          user_id: string
          image_url: string
          total: number
          parsed_total?: number | null
          parsed_date?: string | null
          merchant?: string | null
          ocr_text?: Json | null
          status?: string
          validation_flags?: string[]
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          image_url?: string
          total?: number
          parsed_total?: number | null
          parsed_date?: string | null
          merchant?: string | null
          ocr_text?: Json | null
          status?: string
          validation_flags?: string[]
          created_at?: string
        }
      }
      // Add other tables as needed
    }
  }
}