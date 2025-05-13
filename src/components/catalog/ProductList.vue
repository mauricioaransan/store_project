<template>
  <MyRow justify="center">
    <MyColumn
      v-for="product in filteredProducts"
      :key="product.id"
      sm="6"
      md="4"
      lg="3"
      xl="3"
      2xl="2"
    >
      <ProductCard :product="product" />
    </MyColumn>
  </MyRow>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { computed, defineProps } from 'vue'
import MyRow from '@/components/myComponents/MyRow.vue'
import MyColumn from '@/components/myComponents/MyColumn.vue'

const props = defineProps<{
  products: any[]
  filters: {
    category: string
    maxPrice: number | null
    search: string
  }
}>()

const filteredProducts = computed(() => {
  return props.products.filter((p) => {
    const matchesCategory = !props.filters.category || p.category === props.filters.category
    const matchesPrice = !props.filters.maxPrice || p.price <= props.filters.maxPrice
    const matchesSearch = p.name.toLowerCase().includes(props.filters.search.toLowerCase())
    return matchesCategory && matchesPrice && matchesSearch
  })
})
</script>
