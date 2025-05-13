<template>
  <div class="flex flex-col gap-4 sm:flex-row sm:items-end mb-6">
    <div>
      <label class="block text-sm font-medium">Categoría</label>
      <select v-model="filters.category" class="mt-1 p-2 border rounded w-full">
        <option value="">Todas</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-medium">Precio máximo</label>
      <input
        v-model.number="filters.maxPrice"
        type="number"
        class="mt-1 p-2 border rounded w-full"
      />
    </div>

    <div class="flex-1">
      <label class="block text-sm font-medium">Buscar</label>
      <input
        v-model="filters.search"
        type="text"
        placeholder="Nombre del producto"
        class="mt-1 p-2 border rounded w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  filters: {
    category: string
    maxPrice: number | null
    search: string
  }
  categories: string[]
}>()

const emit = defineEmits(['update:filters'])
</script>
