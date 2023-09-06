<script setup lang="ts">
import Counter from '@/domain/count/counter.vue'
const { t } = useI18n({})
</script>

<template>
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
