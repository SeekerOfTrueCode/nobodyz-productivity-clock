<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import type { VBtn } from 'vuetify/components'
defineOptions({ inheritAttrs: false })
const props = withDefaults(
  defineProps<{
    icon:
      | string
      | (string | [string, number])[]
      | (new () => unknown)
      | FunctionalComponent
      | undefined;
  }>(),
  {
    icon: undefined
  }
)
// defineEmits()
</script>

<template>
  <v-btn data-testid="n-button" v-bind="$attrs" :icon="!!props.icon">
    <v-icon v-if="props.icon != null" :icon="props.icon" />
    <slot v-if="$slots.default"></slot>
  </v-btn>
</template>

<style scoped></style>
