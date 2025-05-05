<template>
  <AppLayout />
  <!-- <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> -->
  <div class="flex flex-row bg-red">
    <ProductCard
      v-for="(product, index) in products"
      :key="index"
      v-bind="product"
      class="grow-4"
    />
  </div>
  <!-- </div> -->
  <!-- </AppLayout> -->
</template>

<script setup lang="ts">
import AppLayout from '@/layout/AppLayout.vue'
import ProductCard from '@/components/catalog/ProductCard.vue'

const products = Array.from({ length: 10 }).map((_, i) => ({
  name: `Producto # ${i + 1}`,
  image: `https://picsum.photos/600/200?random=${i + 1}`,
  description: 'Descripción breve del producto.',
  price: 10 * (i + 1),
}))
</script>
