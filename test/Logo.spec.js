import { mount } from '@vue/test-utils'
import Logo from '@/components/ExampleComponent.vue'

describe('Example Component', () => {
  test('exists', () => { // Changed test description for clarity
    const wrapper = mount(Logo)
    expect(wrapper.exists()).toBe(true) // Changed assertion
  })
})
