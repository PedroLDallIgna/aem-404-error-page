<template>
    <img :src="imgSource" :alt="imgDescription" />
</template>

<script>
export default {
  name: 'ImagePedro',
  props: {
    imgSource: {
      type: String,
      default: '/content/dam/vue/espantalho.png'
    },
    imgDescription: {
      type: String,
      default: 'Espantalho'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Image.scss";
</style>
