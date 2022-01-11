<script setup>
import { reactive } from 'vue'
import FetchData from '../components/Home/FetchData.vue';

const url = import.meta.env.SSR
  ? import.meta.url
  : document.querySelector('.import-meta-url').textContent

const protocol = new URL(url).protocol

const state = reactive({
  count: 0,
  protocol,
  url
})
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>
      <img src="../assets/logo.png" alt="logo" />
    </p>
    <button @click="state.count++">count is: {{ state.count }}</button>
    <p class="inter">this will be styled with a font-face</p>
    <p class="import-meta-url">{{ state.url }}</p>
    <p class="protocol">{{ state.protocol }}</p>
    <Suspense>
      <FetchData />
      <template #fallback>
        <div>
          isLoading
        </div>
      </template>
    </Suspense>
  </div>
</template>
