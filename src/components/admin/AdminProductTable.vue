<template>
  <div class="overflow-x-auto">
    <table class="min-w-full text-sm text-left">
      <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        <tr>
          <th class="p-3">ID</th>
          <th class="p-3">Nombre</th>
          <th class="p-3">Descripcion</th>
          <th class="p-3">Categoría</th>
          <th class="p-3">Precio</th>
          <th class="p-3">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id" class="border-b">
          <td class="p-3">{{ index + 1 }}</td>
          <td class="p-3">{{ product.name }}</td>
          <td class="p-3">{{ product.description }}</td>
          <td class="p-3">{{ product.category }}</td>
          <td class="p-3">S/ {{ product.price }}</td>
          <td class="p-3 space-x-2">
            <button class="text-blue-600" @click="$emit('edit', product)">Editar</button>
            <button class="text-red-600" @click="$emit('delete', product.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  products: any[]
}>()

defineEmits(['edit', 'delete'])
</script>
