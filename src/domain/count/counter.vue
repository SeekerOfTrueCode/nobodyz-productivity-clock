<script setup lang="ts">
import { useCountStore } from './stores/count'
defineProps<{ [key: string]: unknown }>()

const countStore = useCountStore()
await countStore.$persistedState.isReady()
</script>

<template>
  <div class="card">
    <n-button @click="() => countStore.count++">
      Count is {{ countStore.count }}
    </n-button>

    <p>Edit <code>components/count-example.vue</code> to test HMR</p>
    <p></p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
