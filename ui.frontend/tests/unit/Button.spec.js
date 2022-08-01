import { shallowMount } from '@vue/test-utils'
import ButtonPedro from '@/components/micro/Button/Button.vue'

describe('Button.vue', () => {
  it('without props specified', () => {
    const wrapper = shallowMount(ButtonPedro)
    const buttonEl = wrapper.find('button').element
    expect(buttonEl.textContent).toBe('BACK TO HOMEPAGE')
  })
  it('with props specified', () => {
    const wrapper = shallowMount(ButtonPedro, {
      propsData: {
        buttonType: 'primary',
        buttonContent: 'return',
        buttonFontSize: 14
      }
    })
    const buttonEl = wrapper.find('button').element
    expect(buttonEl.textContent).toBe('RETURN')
    expect(buttonEl.classList[0]).toBe('primary')
    expect(buttonEl.style.fontSize).toBe((14 / 16) + 'em')
  })
})
