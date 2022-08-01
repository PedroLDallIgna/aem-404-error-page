<template>
    <p>{{ condition ? 'aparece' : 'não aparece' }}</p>
</template>

<script>
export default {
  name: 'Teste',
  props: {
    condition: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>
