<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  wrap: { type: Boolean, default: true },
  justify: { type: String },
  align: { type: String },
  gap: { type: String },
})

const computedClass = computed(() => {
  return [
    'flex',
    props.wrap !== false ? 'flex-wrap' : 'flex-nowrap',
    props.justify ? `justify-${props.justify}` : 'a',
    // 'justify-center',
    props.align ? `items-${props.align}` : '',
    props.gap ? `gap-${props.gap}` : '',
  ].join(' ')
})
</script>
