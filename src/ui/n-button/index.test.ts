// import { mount } from '@vue/test-utils'
import { fireEvent, render, screen } from '@testing-library/vue'
import { composeStory } from '@storybook/testing-vue3'

// import HelloDiv from './index.vue'
// import { it, expect } from 'vitest'

import Meta, { Default as DefaultStory } from './index.stories'
const DefaultStoryView = composeStory(DefaultStory, Meta)

// test('[classic] Testing NButton component props', async () => {
//   const wrapper = mount(HelloDiv, { props: { msg: 'Hello' } })
//   expect(wrapper.find('div').text()).toContain('Hello')
// })

test('[storybook] Testing NButton component props', async () => {
  render(DefaultStoryView())
  const divElement = screen.getByTestId('n-button')

  fireEvent.click(divElement)
  await nextTick() // wait for v-if to render hidden part after changing variable's value

  const isClicked = screen.getByTestId('clicked')
  expect(isClicked).toBeInTheDocument()
})
