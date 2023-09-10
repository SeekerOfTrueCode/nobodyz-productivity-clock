import { mount } from '@vue/test-utils'
import NButton from './index.vue'
import { createVuetify } from 'vuetify'
import { expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue3'
import * as DefaultStories from './index.stories'

describe('Testing NButton ', () => {
  const { Default: NButtonDefault } = composeStories(DefaultStories)

  test('[classic] component props', async () => {
    const wrapper = mount(NButton, {
      slots: { default: 'Hello' },
      global: {
        plugins: [createVuetify()]
      }
    })
    expect(wrapper.text()).toContain('Hello')
  })

  test('[storybook] existing', async () => {

    render(NButtonDefault(), {
      global: {
        plugins: [createVuetify()]
      }
    })

    const divElement = screen.getByTestId('n-button')
    fireEvent.click(divElement)
    expect(divElement).toBeInTheDocument()
  })
})



