<script setup lang="ts">
import type { VBtn } from 'vuetify/components'
defineOptions({ inheritAttrs: false })
// defineProps()
// defineEmits()
</script>

<template>
  <v-btn data-testid="n-button" v-bind="$attrs"><slot></slot></v-btn>
</template>

<style scoped></style>
