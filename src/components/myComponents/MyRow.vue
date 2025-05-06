<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  wrap: { type: Boolean, default: true },
  justify: { type: String, default: 'start' },
  align: { type: String, default: 'start' },
  gap: { type: String, default: '2' },
})

const computedClass = computed(() => {
  return [
    'flex',
    props.wrap !== false ? 'flex-wrap' : 'flex-nowrap',
    props.justify ? `justify-${props.justify}` : '',
    props.align ? `items-${props.align}` : '',
    props.gap ? `gap-${props.gap}` : '',
  ].join(' ')
})
</script>
