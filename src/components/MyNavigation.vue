<template>
  <nav id="my-navigation">
    <div id="my-navigation__icon">
      <i class="fa-solid fa-plate-wheat"></i>
    </div>

    <ul id="my-navigation__links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'MyNavigation',
  components: { RouterLink }
}
</script>

<style lang="scss">
$gap: 0.5rem;

#my-navigation {
  grid-area: nav;

  &__icon {
    height: 60px;
    display: flex;
    font-size: 2rem;
    align-items: center;
  }
  &,
  &__links {
    gap: $gap;
    padding: 0;
    display: flex;
    align-items: center;
    @media (min-width: 1024px) {
      flex-direction: column;
    }
  }
}
</style>
