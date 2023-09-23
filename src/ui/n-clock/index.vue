<script setup lang="ts">
import { secondsToTimeFormat } from '@/utils/time/seconds-to-time-format'
import { percentageOf } from '@/utils/math/percentage-of'

const props = withDefaults(
  defineProps<{
    modelValue: number;
    valueMax?: number | undefined;
    size?: number;
  }>(),
  {
    modelValue: 0,
    valueMax: undefined,
    size: 96
  }
)

const progress = computed(() => {
  if (props.valueMax == null) return 0
  return percentageOf(props.modelValue, props.valueMax)
})
const fontSize = computed(() => `${Math.round(props.size / 5.25)}px`)
const timeCurrent = computed(() => secondsToTimeFormat(props.modelValue)) // timeCurrent: '00:00:00'
</script>

<template>
  <div data-testid="n-clock" class="n-clock flex-inline-center"> 
    <div class="n-clock__text-container flex-center">
      <span class="n-clock__text" :style="{ fontSize }" v-text="timeCurrent" />
    </div>
    <v-progress-circular :model-value="progress" :size="size" />
  </div>
</template>

<style>
.n-clock {
  position: relative;
}
.n-clock__text-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.n-clock__text {
  user-select: none;
  /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000; */
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-inline-center {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
