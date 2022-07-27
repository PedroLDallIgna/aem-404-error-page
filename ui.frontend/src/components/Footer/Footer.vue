<template>
  <p :style="{ fontSize: formatFooterFontSize, color: footerFontColor }">created by <span class="username">{{ username }}</span> - <a href="https://devchallenges.io" :style="{ color: footerFontColor }">devChallenges.io</a></p>
</template>

<script>
export default {
  name: 'FooterPedro',
  props: {
    username: {
      type: String,
      default: 'username'
    },
    footerFontSize: {
      type: Number,
      default: 14
    },
    footerFontColor: {
      type: String,
      default: '#BDBDBD'
    }
  },
  computed: {
    formatFooterFontSize () {
      return (this.footerFontSize / 16) + 'em'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Footer.scss';
</style>
