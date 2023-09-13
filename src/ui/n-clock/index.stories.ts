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
    template: '<n-clock />'
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
    size: 32
  } // default value
} satisfies Meta<typeof NClock>

export default meta
type Story = StoryObj<typeof meta>;

export const DisplayMessage: Story = {
  args: {
    modelValue: 0,
    valueMax: undefined,
    size: 32
  }
  //   play: async ({ canvasElement }: any) => {
  //     const canvas = within(canvasElement)
  //     const loginButton = await canvas.getByText('button', { name: /Display test/i })
  //     await userEvent.click(loginButton)
  //   }
}

