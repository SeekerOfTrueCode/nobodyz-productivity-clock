import type { Meta, StoryObj } from '@storybook/vue3'
// import { within, userEvent } from '@storybook/testing-library'

import NClock from './index.vue'

const meta = {
  title: 'core-components/n-clock',
  component: NClock,
  render: (args: unknown) => ({
    components: { NClock },
    setup() {
      return { args }
    },
    template: '<n-clock v-bind="args" />'
  }),
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number' },
    valueMax: { control: 'number' },
    size: { control: 'number' }
    // onClick: { action: 'clicked' }
  },
  args: {
    modelValue: 0,
    valueMax: undefined,
    size: 96
  } // default value
} satisfies Meta<typeof NClock>

export default meta
type Story = StoryObj<typeof meta>;

export const DefaultValues: Story = {
  args: {
    modelValue: 0,
    valueMax: undefined,
    size: 96
  }
}

export const NegativeValue: Story = {
  args: {
    modelValue: -50,
    valueMax: undefined,
    size: 96
  }
}

export const AboveHalfTime: Story = {
  args: {
    modelValue: 61,
    valueMax: 120,
    size: 96
  }
}
