import type { Meta, StoryObj } from '@storybook/vue3'
// import { within, userEvent } from '@storybook/testing-library'

import NButton from './index.vue'

const meta = {
  title: 'core-components/n-button',
  component: NButton,
  render: (args: unknown) => ({
    components: { NButton },
    setup() {
      return { args }
    },
    template: '<n-button v-bind="args">Example</n-button>'
  }),
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'select', options: ['small', 'medium', 'large'] },
    // backgroundColor: { control: 'color' },
    // onClick: { action: 'clicked' }
  },
  args: {} // default value
} satisfies Meta<typeof NButton>

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

