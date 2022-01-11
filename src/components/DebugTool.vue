<script setup>
import { computed } from 'vue'

const mode = computed(() => JSON.stringify(import.meta.env))
</script>

<template>
  <div>
    {{ mode }}
  </div>
</template>
