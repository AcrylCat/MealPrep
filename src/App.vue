<template>
  <MyHeader />
  <MyNavigation />
  <main id="content">
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue'
import MyNavigation from './components/MyNavigation.vue'

export default {
  components: { RouterView, MyHeader, MyNavigation }
}
</script>

<style lang="scss">
#app {
  padding: 2rem;
  margin: 0 auto;
  font-weight: normal;

  @media (min-width: 1024px) {
    display: grid;
    padding: 0;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 80px 1fr;

    grid-template-areas: 'nav header' 'nav content';
  }
  #content {
    grid-area: content;
    padding: 0.5rem;
  }
}
</style>
