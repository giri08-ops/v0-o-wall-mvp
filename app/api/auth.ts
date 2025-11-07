// /app/api/auth.ts
import { supabase } from '@/lib/supabaseClient';
import type { Database } from '@/lib/supabaseTypes';

/**
 * Signup a new user
 * Creates account in auth.users + entry in public.users table
 */
export async function signup(email: string, password: string) {
  // Step 1: Signup user with Supabase Auth
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  // Step 2: Insert user record into public.users table
  const user = data.user;
  if (user) {
    const { error: insertError } = await (supabase as any)
      .from('users')
      .insert([
        {
          id: user.id,
          created_at: new Date().toISOString(),
        },
      ]);

    if (insertError && !insertError.message.includes('duplicate key')) {
      console.error('Error creating user record:', insertError.message);
    }
  }

  return data;
}

/**
 * Login existing user with email + password
 */
export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

/**
 * Logout current user
 */
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  return true;
}

/**
 * Get current logged-in user (optional utility)
 */
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}
