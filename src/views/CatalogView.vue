<template>
  <div class="p-6">
    <ProductFilter :filters="filters" :categories="categories" @update:filters="onUpdateFilters" />
    <ProductList :products="products" :filters="filters" />
  </div>
</template>

<script setup lang="ts">
import ProductFilter from '@/components/catalog/ProductFilter.vue'
import ProductList from '@/components/catalog/ProductList.vue'
import { ref, onMounted } from 'vue'
import { getAllProducts } from '@/services/productService'

const products = ref<any[]>([])
const categories = ref<string[]>([])
const filters = ref({
  category: '',
  maxPrice: null,
  search: '',
})

const onUpdateFilters = (newFilters: typeof filters.value) => {
  filters.value = { ...newFilters }
}

onMounted(async () => {
  products.value = await getAllProducts()
  categories.value = [...new Set(products.value.map((p) => p.category))].filter(Boolean)
})
</script>
