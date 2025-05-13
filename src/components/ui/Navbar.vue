<template>
  <header
    class="dark:bg-gray-900 bg-sky-500 text-white transition-colors duration-300 shadow px-4 py-3 flex justify-between items-center"
  >
    <h1 class="text-xl font-bold">Mi Catálogo</h1>

    <button
      aria-label="Lista de carrito"
      class="relative hover:cursor-pointer"
      @click="showAdminView"
    >
      Admin
    </button>
    <button
      aria-label="Lista de carrito"
      class="relative hover:cursor-pointer"
      @click="showCatalogView"
    >
      catalogo
    </button>
    <div class="flex items-center gap-4">
      <button @click="toggleDarkMode" class="text-sm border px-2 py-1 rounded hover:cursor-pointer">
        {{ isDarkMode ? 'Modo Claro' : 'Modo Oscuro' }}
      </button>
    </div>
    <button
      aria-label="Lista de carrito"
      class="relative hover:cursor-pointer group"
      @click="showCartView"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-700 group-hover:text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 008 18h9a2 2 0 002-2v-1H7z"
        />
      </svg>
      <span class="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
        {{ totalItems }}
      </span>
    </button>
  </header>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const totalItems = computed(() => cart.getTotalCountItem())

function showCartView() {
  router.push('/cart')
}
function showCatalogView() {
  router.push('/catalog')
}
function showAdminView() {
  router.push('/admin')
}

const isDarkMode = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    document.documentElement.classList.add('dark')
    isDarkMode.value = true
  }
})

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  const html = document.documentElement

  if (isDarkMode.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
