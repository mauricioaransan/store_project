<template>
  <div v-if="visible" class="fixed inset-0 bg-modal-bg flex items-center justify-center z-50">
    <div class="bg-white dark:bg-gray-900 w-full max-w-md p-6 rounded-lg shadow-lg relative">
      <button @click="close" class="absolute top-2 right-2 text-gray-500 hover:text-red-500">
        ✕
      </button>

      <h2 class="text-xl font-bold mb-4 text-center">
        {{ isEditMode ? 'Editar Producto' : 'Agregar Producto' }}
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium">Nombre</label>
          <input
            v-model="form.name"
            required
            class="input border border-black rounded-md min-w-full"
          />
        </div>

        <div>
          <label class="block text-sm font-medium">Descripción</label>
          <textarea
            v-model="form.description"
            required
            class="input border border-black rounded-md min-w-full"
          />
        </div>

        <div>
          <label class="block text-sm font-medium">Precio</label>
          <input
            v-model.number="form.price"
            required
            type="number"
            class="input border border-black rounded-md min-w-full"
          />
        </div>

        <div>
          <label class="block text-sm font-medium">Categoría</label>
          <input
            v-model="form.category"
            required
            class="input border border-black rounded-md min-w-full"
          />
        </div>

        <div>
          <label class="block text-sm font-medium">Imagen (URL)</label>
          <input
            v-model="form.image_url"
            required
            type="url"
            class="input border border-black rounded-md min-w-full"
          />
        </div>

        <div class="flex justify-between mt-6">
          <button type="submit" class="btn-primary">
            {{ isEditMode ? 'Guardar Cambios' : 'Agregar Producto' }}
          </button>

          <button v-if="isEditMode" @click.prevent="emitDelete" class="btn-danger">Eliminar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import type { Product } from '@/types/product'

interface Props {
  modelValue: boolean
  product?: Product | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'save', product: Partial<Product>): void
  (e: 'update', product: Product): void
  (e: 'delete', id: number): void
}>()

const visible = ref(props.modelValue)
const form = reactive<Partial<Product>>({
  name: '',
  description: '',
  price: 0,
  category: '',
  image_url: '',
})

const isEditMode = ref(false)

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
  },
)

watch(
  () => props.product,
  (newProduct) => {
    if (newProduct) {
      isEditMode.value = true
      Object.assign(form, newProduct)
    } else {
      isEditMode.value = false
      Object.assign(form, {
        name: '',
        description: '',
        price: 0,
        category: '',
        image_url: '',
      })
    }
  },
)

function handleSubmit() {
  if (isEditMode.value && props.product) {
    emit('update', { ...props.product, ...form } as Product)
  } else {
    emit('save', form)
  }
  close()
}

function emitDelete() {
  if (props.product?.id) {
    emit('delete', props.product.id)
    close()
  }
}

function close() {
  emit('update:modelValue', false)
}
</script>

<style scoped>
/* .input {
  @apply w-full border border-gray-300 rounded px-3 py-2 dark:bg-gray-800 dark:text-white;
}
.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
}
.btn-danger {
  @apply bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700;
} */
</style>
