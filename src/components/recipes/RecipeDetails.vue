<template>
	<article id="recipe-details">
		<h2>Recipe Details</h2>
		<form @submit.prevent="handleSubmit">
			<label>Recipe Name:</label>
			<input type="text" required v-model="item.name" />

			<label>Short Description:</label>
			<input type="text" required v-model="item.details" />

			<label>Type</label>
			<select v-model="item.type" placeholder="Select Recipe Type" required>
				<option value="" selected disabled hidden>Select Type</option>
				<option value="Main Recipe">Main Recipe</option>
				<option value="Prepped Ingredient">Prepped Ingredient</option>
			</select>

			<fieldset id="allergen-list">
				<legend>Allergens</legend>
				<div v-for="allergen in allergenOptions" :key="allergen.key" class="allergen">
					<input :id="allergen.label" type="checkbox" :value="allergen.key" v-model="item.allergens" />
					<label :for="allergen.label">{{ allergen.label }}</label>
				</div>
			</fieldset>

			<fieldset id="ingredients">
				<legend>Ingredients list</legend>
				<ul>
					<li v-for="(ingredient, index) in item.ingredients" :key="ingredient.key" class="ingredient">
						<fieldset>
							<legend>Ingredient #{{ index + 1 }}</legend>
							<div class="ingredient-size">
								<label for="amount">Amount</label>
								<input id="amount" type="number" v-model="ingredient.amount" min="0" />
								<select v-model="ingredient.measurement" required>
									<option value="" selected disabled hidden>Select</option>
									<option v-for="measurement in measurementOptions" :value="measurement" :key="measurement"
										class="measurement">
										{{ measurement }}
									</option>
								</select>
							</div>
							<div>
								<label for="ingredient">Item Name</label>
								<input id="ingredient" type="text" v-model="ingredient.value" />
							</div>
						</fieldset>

						<!-- measurements, sizes and name -->

					</li>
					<button type="button" @click="addIngredient">Add Item</button>
				</ul>
			</fieldset>
			<div class="submit">
				<button type="submit">Submit Recipe</button>
			</div>
		</form>

	</article>
</template>

<script>
import axios from 'axios';

const defaultItem = {
	name: '',
	details: '',
	type: '',
	allergens: [],
	ingredients: [{ amount: null, measurement: '', ingredient: '' }],
}

export default {
	name: 'RecipeDetails',
	data() {
		return {
			item: { ...defaultItem },
			ALLERGENS: [],
			recipes: []
		}
	},
	props: {
		isNew: {
			type: Boolean,
			default: false,
		}
	},
	watch: {
		recipes: {
			deep: true,
			handler(data) {
				console.log('watch')
				localStorage.setItem('recipes', JSON.stringify(data))
			}
		}
	},
	methods: {
		addIngredient() {
			const ingredient = { amount: 0, measurement: '', ingredient: '' }
			this.item.ingredients.push(ingredient)
		},
		handleSubmit() {
			console.log('form submitted', this.item)
			const id = this.recipes.length + 1;
			if (this.isNew) {
				this.recipes.push({ id, ...this.item })
				this.$router.push(`/recipes/${id}`);
			} else {
				const index = this.recipes.findIndex((item) => item.id === this.item.id);
				if (index > -1) {
					this.recipes[index] = { ...this.item };
				}
			}
		},
		restoreItem() {
			const id = this.$route.params.id;
			if (this.isNew || id === 'new') {
				this.item = defaultItem;
			} else {
				this.item = { ...defaultItem, ...(this.recipes.find((item) => Number(item.id) === Number(id)) || {}) }
			}
		}
	},
	mounted() {
		console.log('App Mounted');
		if (localStorage.getItem('recipes')) {
			this.recipes = JSON.parse(localStorage.getItem('recipes'));
		}

		return axios.get('https://static.openfoodfacts.org/data/taxonomies/allergens.json')
			.then(({ data }) => {
				this.ALLERGENS = data;
			})
			.then(() => this.restoreItem())
			.catch((err) => console.error(err))
	},
	computed: {
		allergenOptions() {
			return Object.keys(this.ALLERGENS).map((item) => {
				const [lang, key] = item.split(':');
				const { name } = this.ALLERGENS[item];
				return { label: name[lang], key };
			})
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
		margin: 30px auto;
		background: white;
		text-align: left;
		border-radius: 10px;
		width: 100%;

		@media (min-width: 680px) {
			max-width: 500px;
			padding: 40px;

		}
	}

	label {
		color: #aaa;
		display: inline-block;
		font-size: 0.6em;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: bold;
		text-wrap: nowrap;
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

	.submit {
		text-align: center;
	}

	#ingredients ul {
		padding: 0;

		@media (min-width: 680px) {
			padding: 16px;
		}
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
