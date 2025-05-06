<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  sm: { type: String },
  md: { type: String },
  lg: { type: String },
  xl: { type: String },
  '2xl': { type: String },
})

const computedClass = computed(() => {
  return [
    props.sm ? `sm:w-${props.sm}/12` : '',
    props.md ? `md:w-${props.md}/12` : '',
    props.lg ? `lg:w-${props.lg}/12` : '',
    props.xl ? `xl:w-${props.xl}/12` : '',
    `2xl:w-${props['2xl']}/12`,
    `p-1`,
  ].join(' ')
})
// const computedClass = computed(() => {
//   return [
//     `w-full`,
//     `sm:w-12/12`,
//     `md:w-4/12`,
//     `lg:w-3/12`,
//     `xl:w-3/12`,
//     `2xl:w-2/12`,
//     `p-1`,
//     `rounded`,
//   ].join(' ')
// })
// const computedClass = computed(() => {
//   return [
//     `w-full`,
//     props.cols ? `w-12/12` : '',
//     props.sm ? `sm:w-6/12` : '',
//     props.md ? `md:w-4/12` : '',
//     props.lg ? `lg:w-3/12` : '',
//     props.xl ? `xl:w-3/12` : '',
//     props['2xl'] ? `xl:w-2/12` : '',
//     `p-1`,
//   ].join(' ')
// })
</script>
