<template>
    <main>
        <div
            v-show="getShowImg"
            class="imgContainer"
            >
            <image-pedro :imgSource="imgSource" :imgDescription="imgDescription"/>
        </div>
        <div class="infoContainer">
            <title-pedro
                v-show="getShowTitle"
                class="title"
                :titleContent="titleContent"
                :titleColor="titleColor"
                :titleSize="titleSize"
                :titleType="titleType"/>
            <text-pedro
                v-show="getShowText"
                class="text"
                :textContent="textContent"
                :textColor="textColor"
                :textSize="textSize"/>
            <button-pedro
                class="button"
                :buttonContent="buttonContent"
                :buttonFontSize="buttonFontSize"
                :buttonType="buttonType"/>
        </div>
    </main>
</template>

<script>
import ImagePedro from '../../micro/Image/Image.vue'
import TitlePedro from '../../micro/Title/Title.vue'
import TextPedro from '../../micro/Text/Text.vue'
import ButtonPedro from '../../micro/Button/Button.vue'
export default {
  name: 'MainPedro',
  components: {
    ImagePedro,
    TitlePedro,
    TextPedro,
    ButtonPedro
  },
  props: {
    showImg: {
      type: String,
      default: ' '
    },
    imgSource: {
      type: String,
      default: '/content/dam/vue/espantalho.png'
    },
    imgDescription: {
      type: String,
      default: 'Espantalho'
    },
    showTitle: {
      type: String,
      default: ' '
    },
    titleContent: {
      type: String,
      default: 'I have bad news for you'
    },
    titleColor: {
      type: String,
      default: '#333333'
    },
    titleSize: {
      type: String,
      default: '64'
    },
    titleType: {
      type: String,
      default: 'h1'
    },
    showText: {
      type: String,
      default: ' '
    },
    textContent: {
      type: String,
      default: 'The page you are looking for might be removed or is temporarily unavailable'
    },
    textColor: {
      type: String,
      default: '#4F4F4F'
    },
    textSize: {
      type: String,
      default: '24'
    },
    buttonContent: {
      type: String,
      default: 'Back to Homepage'
    },
    buttonFontSize: {
      type: String,
      default: '14'
    },
    buttonType: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    getShowImg () {
      return Boolean(this.showImg)
    },
    getShowTitle () {
      return Boolean(this.showTitle)
    },
    getShowText () {
      return Boolean(this.showText)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Main.scss';
</style>
