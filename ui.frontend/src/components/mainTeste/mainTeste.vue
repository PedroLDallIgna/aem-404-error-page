<template>
<div>
  <div
      v-show="showImg"
      class="imgContainer">
    <image-pedro
        :imgSource="imgSource"
        :imgDescription="imgDescription"
    />
  </div>
  <div class="infoContainer">
    <title-pedro
        v-show="showTitle"
        :titleContent="titleContent"
        :titleType="titleType"
        :titleSize="titleSize"
    />
    <text-pedro
        v-show="showText"
        :textContent="textContent"
        :textSize="textSize"
    />
    <button-pedro
        :buttonContent="buttonContent"
        :buttonType="buttonType"
        :buttonFontSize="buttonFontSize"
    />
  </div>
</div>
</template>

<script>
import ImagePedro from '@/components/micro/Image/Image.vue'
import TitlePedro from '@/components/micro/Title/Title.vue'
import TextPedro from '@/components/micro/Text/Text.vue'
import ButtonPedro from '@/components/micro/Button/Button.vue'
export default {
  name: 'MainTeste',
  components: {
    ImagePedro,
    TitlePedro,
    TextPedro,
    ButtonPedro
  },
  props: {
    showImg: {
      type: Boolean,
      default: true
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
      type: Boolean,
      default: true
    },
    titleContent: {
      type: String
    },
    titleType: {
      type: String,
      default: 'h1'
    },
    titleSize: {
      type: Number,
      default: 64
    },
    showText: {
      type: Boolean,
      default: true
    },
    textContent: {
      type: String
    },
    textSize: {
      type: Number,
      default: 24
    },
    buttonContent: {
      type: String,
      default: 'Botão'
    },
    buttonType: {
      type: String,
      default: 'primary'
    },
    buttonFontSize: {
      type: Number,
      default: 14
    }
  }
}
</script>

<style>

</style>
