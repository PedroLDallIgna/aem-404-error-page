<template>
    <h1 v-if="titleType=='h1'" :style="{ fontSize: formatTitleSize, color: titleColor }">{{ titleContent }}</h1>
    <h2 v-else-if="titleType=='h2'" :style="{ fontSize: formatTitleSize, color: titleColor }">{{ titleContent }}</h2>
    <h3 v-else-if="titleType=='h3'" :style="{ fontSize: formatTitleSize, color: titleColor }">{{ titleContent }}</h3>
</template>

<script>
export default {
  name: 'TitlePedro',
  props: {
    titleType: {
      type: String,
      default: 'h1'
    },
    titleContent: {
      type: String,
      default: 'I have bad news for you'
    },
    titleSize: {
      type: Number,
      default: 64
    },
    titleColor: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    formatTitleSize () {
      return (Number(this.titleSize) / 16) + 'em'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Title.scss";
</style>
