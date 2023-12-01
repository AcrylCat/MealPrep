<template>
  <div>
    <h3>Recipes</h3>
    <ul>
      <li v-for="recipe in recipes">
        <RouterLink :to="`/recipes/${recipe.id}`">{{ recipe.id }}: {{ recipe.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'RecipeList',
  data() {
    return {
      recipes: []
    }
  },
  mounted() {
    console.log('App Mounted');
    if (localStorage.getItem('recipes')) {
      this.recipes = JSON.parse(localStorage.getItem('recipes'));
    }
  },
}
</script>
<style lang="">
  
</style>