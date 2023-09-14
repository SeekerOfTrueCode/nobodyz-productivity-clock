import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue' // fireEvent,
import { composeStories } from '@storybook/testing-vue3'
import { createVuetify } from '@/infrastructure/plugins/setup-vuetify/create-vuetify'
import NClock from './index.vue'
import * as DefaultStories from './index.stories'
// import { it, expect } from 'vitest'

describe('Testing NClock ', () => {
  const { DefaultValues, NegativeValue, AboveHalfTime } = composeStories(DefaultStories)

  test('[classic] display text', async () => {
    const wrapper = mount(NClock, {
      global: {
        plugins: [createVuetify()]
      },
      props: {
        modelValue: 0,
        valueMax: undefined,
        size: 96
      }
    })
    expect(wrapper.find('.n-clock__text').text()).toContain('00:00:00')
  })

  test('[storybook] exists', async () => {
    render(DefaultValues(), {
      global: {
        plugins: [createVuetify()]
      }
    })
    const divElement = screen.getByTestId('n-clock')
    expect(divElement).toBeInTheDocument()
  })

  test('[storybook] negative values stay at 00:00:00', async () => {
    const { container } = render(NegativeValue(), {
      global: {
        plugins: [createVuetify()]
      }
    })
    expect(container.getElementsByClassName('n-clock__text')[0]?.textContent).toContain('00:00:00')
  })

  test('[storybook] svg elements fill above 50% of the circle', async () => {
    const { container } = render(AboveHalfTime(), {
      global: {
        plugins: [createVuetify()]
      }
    })
    const [, fillingElement] = container.getElementsByTagName('circle')
    const attribute = fillingElement.getAttribute('stroke-dashoffset')
    const length = attribute?.length ?? 2
    const strokeAsNumber = parseFloat(attribute?.substring(0, length - 2) ?? '0')
    expect(Math.round(strokeAsNumber)).toBe(62)
  })
})

// fireEvent.click(divElement)
// await nextTick() // wait for v-if to render hidden part after changing variable's value

// const isClicked = screen.getByTestId('clicked')