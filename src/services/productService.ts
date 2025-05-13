// src/services/products.ts
import { supabase } from './supabaseClient'
import type { Product } from '@/types/product'
const TABLE_NAME = 'products'

export async function getAllProducts() {
  const { data, error } = await supabase.from(TABLE_NAME).select('*')

  if (error) throw error
  return data
}
export async function getAllProductsByID(id: string) {
  const { data, error } = await supabase.from(TABLE_NAME).select('*').eq('id', id).single()

  if (error) throw error
  return data
}

// Agregar un nuevo producto
export async function addProduct(product: Omit<Product, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from(TABLE_NAME).insert([product]).select().single()

  if (error) throw error
  return data
}

// Modificar un producto existente
export async function updateProduct(productId: string, updates: Partial<Product>) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(updates)
    .eq('id', productId)
    .select()
    .single()

  if (error) throw error
  return data
}

//Eliminar el producto por ID
export const deleteProductById = async (id: number) => {
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) throw error
}
