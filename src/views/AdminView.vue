<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Administración de Productos</h1>
    <button
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      @click="showAddForm = true"
    >
      + Agregar Producto
    </button>

    <AdminProductTable :products="products" @edit="handleEdit" @delete="handleDelete" />

    <ProductModal
      v-if="showAddForm || editingProduct"
      :product="editingProduct"
      :modelValue="showAddForm || editingProduct"
      @update:modelValue="resetForm"
      @saved="fetchProducts"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllProducts, deleteProductById } from '@/services/productService'
import AdminProductTable from '@/components/admin/AdminProductTable.vue'
import ProductModal from '@/components/admin/ProductModal.vue'
import type { Product } from '@/types/product'

const products = ref<Product[]>([])
const showAddForm = ref(false)
const editingProduct = ref<Product | null>(null)

const fetchProducts = async () => {
  const data = await getAllProducts()
  products.value = data
}

const handleEdit = (product: Product) => {
  editingProduct.value = product
}

const handleDelete = async (id: number) => {
  if (confirm('¿Seguro que deseas eliminar este producto?')) {
    await deleteProductById(id)
    fetchProducts()
  }
}

const resetForm = () => {
  showAddForm.value = false
  editingProduct.value = null
  fetchProducts()
}

onMounted(fetchProducts)
</script>
