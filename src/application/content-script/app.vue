<script setup lang="ts">
import Counter from '@/domain/count/counter.vue'
const viteSvg = chrome.runtime.getURL('public/vite.svg')
const vueSvg = chrome.runtime.getURL('src/assets/vue.svg')
</script>

<template>
  <div
    v-if="!$appLoading.value"
    style="position: absolute; top: 0px; right: 0px; padding: 12px"
  >
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img :src="viteSvg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img :src="vueSvg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <div style="pointer-events: all">
        <Suspense>
          <Counter />
        </Suspense>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
