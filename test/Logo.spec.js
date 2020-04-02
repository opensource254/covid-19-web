import { mount } from '@vue/test-utils'
import Logo from '@/components/ExampleComponent.vue'

describe('Example Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
