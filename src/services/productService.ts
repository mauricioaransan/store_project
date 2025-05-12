// src/services/products.ts
import { supabase } from './supabaseClient'

export async function fetchProducts() {
  const { data, error } = await supabase.from('products').select('*')

  if (error) throw error
  return data
}
