import { mount } from '@vue/test-utils'
import { fireEvent, render, screen } from '@testing-library/vue'
import { composeStory } from '@storybook/testing-vue3'

import NClock from './index.vue'
// import { it, expect } from 'vitest'

import Meta, { DisplayMessage as DisplayMessageStory } from './index.stories'
const DisplayMessageView = composeStory(DisplayMessageStory, Meta)

test('[classic] Testing NClock component props', async () => {
  const wrapper = mount(NClock, { props: { } })
  expect(wrapper.find('div').text()).toContain('Hello')
})

test('[storybook] Testing NClock component props', async () => {
  render(DisplayMessageView())
  const divElement = screen.getByTestId('hello-div')

  fireEvent.click(divElement)
  await nextTick() // wait for v-if to render hidden part after changing variable's value

  const isClicked = screen.getByTestId('clicked')
  expect(isClicked).toBeInTheDocument()
})
