<template>
  <p :style="{ color: getColor }">a cor do texto é: {{ getColor }}</p>
</template>

<script>
export default {
  name: 'ColorTeste',
  props: {
    color: {
      type: String,
      default: '#333333'
    }
  },
  computed: {
    getColor () {
      return this.color
    }
  }
}
</script>

<style>

</style>
