<template>
    <p :style="{ fontSize: formatTextSize, color: textColor }">{{ textContent }}</p>
</template>

<script>
export default {
  name: 'TextPedro',
  props: {
    textContent: {
      type: String,
      default: 'The page you are looking for might be removed or is temporarily unavailable'
    },
    textSize: {
      type: Number,
      default: 24
    },
    textColor: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    formatTextSize () {
      return (Number(this.textSize) / 16) + 'em'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Text.scss";
</style>
