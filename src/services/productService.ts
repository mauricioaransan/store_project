// src/services/products.ts
import { supabase } from './supabaseClient'

export async function getAllProducts() {
  const { data, error } = await supabase.from('products').select('*')

  if (error) throw error
  return data
}
export async function getAllProductsByID(id: string) {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single()

  if (error) throw error
  return data
}
