<template>
  <header class="bg-sky-500 text-white shadow px-4 py-3 flex justify-between items-center">
    <h1 class="text-xl font-bold">Mi Catálogo</h1>
    <h4>S/. {{ totalPrice }}.00</h4>
    <button aria-label="Lista de carrito" class="relative">
      🛒
      <span class="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">{{
        totalItems
      }}</span>
    </button>
  </header>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const totalItems = computed(() => cart.getTotalCountItem())
const totalPrice = computed(() => cart.getTotal())

// function getAllItems() {
//   cart.getTotal()
// }
</script>
