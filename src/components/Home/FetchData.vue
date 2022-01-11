<script setup>
import axios from 'axios'
const { data } = await axios.get(import.meta.env.VITE_FAKE_PROMISE + import.meta.env.VITE_FAKE_DATA + '/photos')
</script>

<template>
  <div>
    Data: {{ data }}
  </div>
</template>
