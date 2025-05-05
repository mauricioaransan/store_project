<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 p-4">
      <slot />
    </main>
    <!-- Opcional: footer fijo -->
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/ui/Navbar.vue'
import Footer from './Footer.vue'
</script>
