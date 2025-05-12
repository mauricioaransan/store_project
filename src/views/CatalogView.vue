<template>
  <MyRow justify="center">
    <MyColumn v-for="(product, index) in products" :key="index" sm="6" md="4" lg="3" xl="3" 2xl="2">
      <ProductCard :product="product" />
    </MyColumn>
  </MyRow>
</template>

<script setup lang="ts">
import ProductCard from '@/components/catalog/ProductCard.vue'
import MyRow from '@/components/myComponents/MyRow.vue'
import MyColumn from '@/components/myComponents/MyColumn.vue'

import { useProductStore } from '@/stores/products'
import { onMounted, ref } from 'vue'
import { fetchProducts } from '@/services/productService'
const productStore = useProductStore()

const products = ref<any>([])

onMounted(async () => {
  productStore.allItems(products)
  let items = await fetchProducts()
  products.value = items
})
</script>
