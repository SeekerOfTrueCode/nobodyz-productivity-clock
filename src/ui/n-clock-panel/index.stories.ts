import type { Meta, StoryObj } from '@storybook/vue3'
// import { within, userEvent } from '@storybook/testing-library'

import NClockPanel from './index.vue'
import NButton from '../n-button/index.vue'

const meta = {
  title: 'core-components/n-clock-panel',
  component: NClockPanel,
  render: (args: unknown) => ({
    components: { NClockPanel },
    setup() {
      return { args }
    },
    template: '<n-clock-panel v-bind="args"><n-clock-panel/>'
  }),
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number' },
    valueMax: { control: 'number' },
    size: { control: 'number' }
  },
  args: {} // default value
} satisfies Meta<typeof NClockPanel>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  }
  //   play: async ({ canvasElement }: any) => {
  //     const canvas = within(canvasElement)
  //     const loginButton = await canvas.getByText('button', { name: /Display test/i })
  //     await userEvent.click(loginButton)
  //   }
}

export const HeaderAndFooter: Story = {
  args: {

  },
  render: (args: unknown) => ({
    components: { NClockPanel },
    setup() {
      return { args }
    },
    template: `
    <n-clock-panel v-bind="args">
      <template #header>Header</template> 
      <template #footer>Footer</template>
      <template #start>start</template> 
      <template #end>end</template>
    <n-clock-panel/>
    `
  })
}

export const WithIcons: Story = {
  args: {

  },
  render: (args: unknown) => ({
    components: { NClockPanel, NButton },
    setup() {
      return { args }
    },
    template: `
    <n-clock-panel v-bind="args">
      <template #header><NButton size="x-small" variant="text" icon="mdi-home"/></template> 
      <template #footer><NButton size="x-small" variant="text" icon="mdi-home"/></template>
      <template #start><NButton size="x-small" variant="text" icon="mdi-home"/></template> 
      <template #end><NButton size="x-small" variant="text" icon="mdi-home"/></template>
    <n-clock-panel/>
    `
  })
}