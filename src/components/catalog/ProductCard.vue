<template>
  <div class="bg-sky-500 rounded-xl shadow-md overflow-hidden flex flex-col">
    <img :src="image" alt="producto" class="w-full h-40 object-cover" />
    <div class="p-3">
      <h3 class="text-lg font-semibold mb-1">{{ name }}</h3>
      <p class="text-gray-500 text-sm">{{ description }}</p>
      <p class="mt-2 font-bold text-primary">S/. {{ price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  image: string
  description: string
  price: number
}>()
</script>
