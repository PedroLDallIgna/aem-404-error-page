<template>
  <button type="submit" :class="buttonType" :style="{ fontSize: formatButtonFontSize }">{{ transformButtonContent }}</button>
</template>

<script>
export default {
  name: 'ButtonPedro',
  props: {
    buttonContent: {
      type: String,
      default: 'Back to homepage'
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
    transformButtonContent () {
      return this.buttonContent.toUpperCase()
    },
    formatButtonFontSize () {
      return (Number(this.buttonFontSize) / 16) + 'em'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
