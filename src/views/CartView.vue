<template>
  <div class="p-4 max-w-4xl mx-auto bg-mint-500">
    <h1 class="text-2xl font-semibold mb-6">Mi Carrito</h1>

    <div v-if="items.length" class="space-y-4">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex items-center gap-4 p-4 border rounded-lg shadow-sm"
      >
        <img :src="item.image" alt="producto" class="w-20 h-20 object-cover rounded" />
        <div class="flex-1">
          <h2 class="text-lg font-medium">{{ item.name }}</h2>
          <p class="text-sm text-gray-500">S/ {{ item.price.toFixed(2) }}</p>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="decreaseQuantity(item.id)"
            class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer"
          >
            -
          </button>
          <span>{{ item.quantity }}</span>
          <button
            @click="increaseQuantity(item.id)"
            class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer"
          >
            +
          </button>
        </div>
        <button
          @click="removeProduct(item.id)"
          class="px-2 py-1 rounded bg-red-400 hover:bg-red-600 hover:cursor-pointer"
        >
          <svg width="20" height="23">
            <use xlink:href="../assets/sprite.svg#deleteicon" />
          </svg>
        </button>
      </div>

      <div class="flex justify-between items-center mt-6 font-medium text-lg">
        <span>Total:</span>
        <span>S/ {{ totalPrice.toFixed(2) }}</span>
      </div>

      <div class="flex gap-4 mt-6">
        <button @click="clearCart" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Vaciar carrito
        </button>
        <button
          @click="goToWhatsapp"
          class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Enviar por WhatsApp
        </button>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 mt-10">Tu carrito está vacío.</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { items } = storeToRefs(cartStore)
const { removeProduct, increaseQuantity, decreaseQuantity, clearCart } = cartStore
const totalPrice = computed(() => cartStore.getTotal())

function goToWhatsapp() {
  const message = encodeURIComponent(cartStore.getFormattedMessage())
  window.open(`https://wa.me/51934830545?text=${message}`, '_blank')
}
</script>
