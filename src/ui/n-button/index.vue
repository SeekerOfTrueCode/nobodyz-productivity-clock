<script setup lang="ts">
defineOptions({ inheritAttrs: false })
// defineProps()
// defineEmits()
</script>

<template>
  <v-btn v-bind="$attrs"><slot></slot></v-btn>
</template>

<style scoped></style>
