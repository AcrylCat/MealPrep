<template>
	<article id="recipe-details">
		<h2>Recipe Details</h2>
		<form>
			<label>Recipe Name:</label>
			<input type="text" required v-model="name" />

			<label>Short Description:</label>
			<input type="text" required v-model="details" />

			<label>Type</label>
			<select v-model="type" required>
				<option value="Main Recipe">Main Recipe</option>
				<option value="Prepped Ingredient">Prepped Ingredient</option>
			</select>

			<fieldset id="allergen-list">
				<legend>Allergens</legend>
				<div v-for="allergen in allergenOptions" :key="allergen.key" class="allergen">
					<input :id="allergen.label" type="checkbox" :value="allergen.key" v-model="allergens" />
					<label :for="allergen.label">{{ allergen.label }}</label>
				</div>
			</fieldset>

			<fieldset id="ingredients">
				<legend>Ingredients Input</legend>
				<ul>
					<li v-for="(ingredient, index) in ingredients" :key="ingredient.key" class="ingredient">
						<fieldset>
							<legend>Ingredient #{{ index + 1 }}</legend>
							<div class="ingredient-size">
								<label for="amount">Amount</label>
								<input id="amount" type="number" v-model="ingredient.amount" min="0" />
								<select v-model="ingredient.measurement" required>
									<option v-for="measurement in measurementOptions" :value="measurement" :key="measurement"
										class="measurement">
										{{ measurement }}
									</option>
								</select>
							</div>
							<div>
								<label for="ingredient">Ingredient Name</label>
								<input id="ingredient" type="text" v-model="ingredient.value" />
							</div>
						</fieldset>

						<!-- measurements, sizes and name -->

					</li>
					<button @click="addIngredient">ADD ME</button>
				</ul>
			</fieldset>
		</form>

		<p>name: {{ name }}</p>
		<p>details: {{ details }}</p>
		<p>type: {{ type }}</p>
		<p>allergens: {{ allergens }} </p>
		<p>ingredients: {{ ingredients }}</p>

	</article>
</template>

<script>
export default {
	name: 'RecipeDetails',
	data() {
		return {
			name: '',
			details: '',
			type: '',
			allergens: [],
			ingredients: [{ amount: null, measurement: null, ingredient: null }],
		}
	},
	methods: {
		addIngredient() {
			const ingredient = { amount: null, measurement: null, ingredient: null }
			this.ingredients.push(ingredient)
		}
	},
	computed: {
		allergenOptions() {
			const options = [
				{ label: 'Nuts', key: 'nuts' },
				{ label: 'Eggs', key: 'eggs' },
				{ label: 'Fish', key: 'fish' },
				{ label: 'Lactose', key: 'lactose' },
				{ label: 'Test', key: 'test' },
				{ label: 'Test2', key: 'test2' },
			]
			return options
		},
		measurementOptions() {
			const options = [
				'tbsp', 'tsp', 'fl.oz', 'cup', 'ml', 'lb', 'g', 'kg', 'l',
			]
			return options
		}
	}
}
</script>
<style lang="scss" scoped>
#recipe-details {
	form {
		max-width: 420px;
		margin: 30px auto;
		background: white;
		text-align: left;
		padding: 40px;
		border-radius: 10px;
	}

	label {
		color: #aaa;
		display: inline-block;
		font-size: 0.6em;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: bold;
	}

	input,
	select {
		display: block;
		padding: 10px 6px;
		width: 100%;
		box-sizing: border-box;
		border: none;
		border-bottom: 1px solid #ddd;
		color: #555;
	}

	.ingredient-size {
		display: flex;
		flex-wrap: wrap;

		&>* {
			flex: 50%;
		}

		label {
			flex: 100%;
		}
	}

	.ingredient {
		list-style: none;
	}

	#allergen-list {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;

		&>* {
			gap: 0.5rem;
			display: flex;
		}
	}
}
</style>
