<template>
  <header id="my-header">
    <h1>MealPrep.org</h1>
  </header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="scss">
#my-header {
  gap: 0.5rem;
  display: flex;
  grid-area: header;
  align-items: center;
  svg {
    font-size: 2rem;
  }
}
</style>
