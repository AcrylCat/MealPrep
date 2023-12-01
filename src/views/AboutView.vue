<template>
  <div id="about">
    <h1>This is an about page</h1>
    <article id="article">
      <p> This project is meant to help people implement recipes, modify them, and choose an amount of recipes you want to
        make grocery shopping for.</p>
      <p> The finished project is to help you know how many of one ingredient you need if you plan several recipes ahead
        for a Meal Preparation. </p>
      <p>For example: an event or for less food wasted with your regular food shopping and
        preparations.</p>
      <p>The current features already implemented are:
        You can name, categorize and apply allergens to a recipe as well as add the ingredients to the recipe and see them
        on your homepage.</p>
      <p>Future features to be implemented are better editorial tools for your recipes, being able to select multiple
        recipes to be put onto grocery list, information about ingredients like nutritional value and alternative
        ingredient
        suggestions for recipes, storage of ingredients to increase lifecycle, other tips & tricks for ingredients and
        combining of said ingredients with one another to boost nutritional value (e.g. black pepper with curcuma or iron
        rich
        foods with vit c rich foods t increase absorption), all according to known scientific data, and more. Support of
        multiple languages is also on the roadmap.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  #article {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 1024px) {
    min-height: 100vh;
  }
}
</style>
