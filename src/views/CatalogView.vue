<template>
  <AppLayout />
  <MyRow justify="center">
    <MyColumn v-for="(product, index) in products" :key="index" sm="6" md="4" lg="3" xl="3" 2xl="2">
      <ProductCard :product="product" />
    </MyColumn>
  </MyRow>
</template>

<script setup lang="ts">
import AppLayout from '@/layout/AppLayout.vue'
import ProductCard from '@/components/catalog/ProductCard.vue'
import MyRow from '@/components/myComponents/MyRow.vue'
import MyColumn from '@/components/myComponents/MyColumn.vue'

const products = Array.from({ length: 10 }).map((_, i) => ({
  id: `${i}`,
  name: `Producto # ${i + 1}`,
  image: `https://picsum.photos/600/200?random=${i + 1}`,
  description: 'Descripción breve del producto.',
  price: 10 * (i + 1),
}))
</script>
