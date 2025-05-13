<template>
  <div
    class="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-transform hover:scale-[1.01]"
  >
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{{ product.name }}</h3>
      <p class="truncate text-sm text-zinc-500 dark:text-zinc-400 mt-1">
        {{ product.description }}
      </p>
      <div class="mt-3 flex items-center justify-between">
        <span class="dark:text-white text-black font-bold text-base">S/ {{ product.price }}</span>
        <button
          class="bg-green-600 font-bold rounded-xl px-4 py-1 text-sm hover:bg-green-800 hover:text-white transition hover:cursor-pointer"
          @click="showDetails"
        >
          detalles
        </button>
        <button
          class="bg-green-600 font-bold rounded-xl px-4 py-1 text-sm hover:bg-green-800 hover:text-white transition hover:cursor-pointer"
          @click="handleAddToCart"
        >
          Agregar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
const router = useRouter()

let props = defineProps<{
  product: {
    id: string
    name: string
    image: string
    description: string
    price: number
  }
}>()

const cart = useCartStore()

function handleAddToCart() {
  cart.addProduct(props.product)
}

function showDetails() {
  router.push(`/product/${props.product.id}`)
}
</script>
