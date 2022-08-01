import { shallowMount } from '@vue/test-utils'
import TextPedro from '@/components/micro/Text/Text.vue'

describe('Text.vue', () => {
  it('without props specified', () => {
    const wrapper = shallowMount(TextPedro)
    const textEl = wrapper.find('p').element
    expect(textEl.textContent).toBe('The page you are looking for might be removed or is temporarily unavailable')
  })
  it('with props specified', () => {
    const wrapper = shallowMount(TextPedro, {
      propsData: {
        textContent: 'Error 404 text',
        textColor: '#0000FF',
        textSize: 22
      }
    })
    const textEl = wrapper.find('p').element
    expect(textEl.textContent).toBe('Error 404 text')
    expect(textEl.style.color).toBe('rgb(0, 0, 255)')
    expect(textEl.style.fontSize).toBe((22 / 16) + 'em')
  })
})
