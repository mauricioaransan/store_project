<template>
  <div v-if="product" class="max-w-6xl mx-auto px-4 py-8">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Imagen -->
      <div>
        <img
          :src="product.image"
          :alt="product.name"
          class="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      <!-- Info del producto -->
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">${{ product.price.toFixed(2) }}</p>
        <p class="text-gray-700 dark:text-gray-200 leading-relaxed">{{ product.description }}</p>

        <button
          @click="addToCart(product)"
          class="mt-4 w-max px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>

    <!-- Productos relacionados -->
    <!-- <div class="mt-16">
      <h2 class="text-2xl font-semibold mb-6">Productos similares</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProductCard v-for="related in relatedProducts" :key="related.id" :product="related" />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { getAllProductsByID } from '@/services/productService'

const route = useRoute()
// const productStore = useProductStore()
const cartStore = useCartStore()
// const allProducts = productStore.getAllItems()

const product = ref<any>(null)

onMounted(async () => {
  const id = route.params.id
  let items = await getAllProductsByID(id.toString())
  product.value = items

  // if (product.value) {
  //   relatedProducts.value = allProducts
  //     .filter((p) => p.id !== product.value.id && p.category === product.value.category)
  //     .slice(0, 3)
  // }
})

function addToCart(item: any) {
  cartStore.addProduct(item)
}
</script>
