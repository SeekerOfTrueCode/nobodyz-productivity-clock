<script setup lang="ts">
import Counter from '@/domain/count/counter.vue'
const { t } = useI18n({})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Suspense>
    <Counter />
  </Suspense>
  <RouterLink :to="'/about'">{{ t("route.about") }}</RouterLink>
  <RouterLink :to="'/about/complex'">{{ t("route.aboutComplex") }}</RouterLink>
</template>

<route lang="yaml">
name: "Home"
meta:
  layout: popup-default
</route>
