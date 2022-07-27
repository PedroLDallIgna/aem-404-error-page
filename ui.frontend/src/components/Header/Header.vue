<template>
  <header>
    <h1 :style="{ fontSize: formatHeaderFontSize, color: headerColor }">{{ headerContent }}</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderPedro',
  props: {
    headerContent: {
      type: String,
      default: '404 not found'
    },
    headerFontSize: {
      type: String,
      default: '24'
    },
    headerColor: {
      type: String,
      default: '#333333'
    }
  },
  computed: {
    formatHeaderFontSize () {
      return (this.headerFontSize / 16) + 'em'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Header.scss';
</style>
