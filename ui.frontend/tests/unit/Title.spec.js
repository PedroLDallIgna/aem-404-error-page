import { shallowMount } from '@vue/test-utils'
import TitlePedro from '@/components/micro/Title/Title.vue'

describe('Title.vue', () => {
  it('without props specified', () => {
    const wrapper = shallowMount(TitlePedro)
    const titleEl = wrapper.find('h1').element
    expect(titleEl.textContent).toBe('I have bad news for you')
  })
  it('with props specified', () => {
    const wrapper = shallowMount(TitlePedro, {
      propsData: {
        titleType: 'h1',
        titleContent: 'Error 404',
        titleColor: '#000000',
        titleSize: '64'
      }
    })
    const titleEl = wrapper.find('h1').element
    expect(titleEl.textContent).toBe('Error 404')
    expect(titleEl.style.color).toBe('rgb(0, 0, 0)')
    expect(titleEl.style.fontSize).toBe((64 / 16) + 'em')
  })
})
