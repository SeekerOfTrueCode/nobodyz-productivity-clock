<script setup lang="ts">
defineSlots<{
  // default(props: { msg: string }): any
  header(props: unknown): unknown;
  footer(props: unknown): unknown;
  start(props: unknown): unknown;
  end(props: unknown): unknown;
}>()

const props = withDefaults(
  defineProps<{
    modelValue: number;
    valueMax?: number | undefined; // FIXME: maybe modelValueMax?
    size?: number;
    sizeClockSidesRation?: number;
  }>(),
  {
    modelValue: 0,
    valueMax: undefined,
    size: 144,
    sizeClockSidesRation: 0.6
  }
)

const SIDES_COUNT = 2
const sizes = computed(() => {
  // FIXME: allow for breaking out of square and going for rectangle if provided multiple properties
  const clockSizeFraction = Math.min(Math.max(0, props.sizeClockSidesRation), 1)
  const sideSizeFraction = (1 - clockSizeFraction) / SIDES_COUNT

  const clock = Math.floor(props.size * clockSizeFraction)
  const side = Math.floor(props.size * sideSizeFraction)
  return {
    clock,
    side
  }
})
</script>

<template>
  <div class="d-inline-block">
    <v-card class="n-clock-panel d-flex flex-column">
      <header
        class="d-flex align-center justify-center pa-1"
        :style="`height: ${sizes.side}px;`"
      >
        <slot name="header"></slot>
      </header>
      <div class="d-flex">
        <div :style="`width: ${sizes.side}px;`">
          <slot name="start"></slot>
        </div>
        <NClock
          :model-value="props.modelValue"
          :value-max="props.valueMax"
          :size="sizes.clock"
        />
        <div :style="`width: ${sizes.side}px;`">
          <slot name="end"></slot>
        </div>
      </div>
      <footer
        class="d-flex align-center justify-center pa-1"
        :style="`height: ${sizes.side}px;`"
      >
        <slot name="footer"></slot>
      </footer>
    </v-card>
  </div>
</template>

<style>
.n-clock-panel {
  overflow: visible !important;
}
</style>
