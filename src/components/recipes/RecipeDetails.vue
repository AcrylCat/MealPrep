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
					<input :id="allergen.label" type="checkbox" v-model="allergens[allergen.key]" />
					<label :for="allergen.label">{{ allergen.label }}</label>
				</div>
			</fieldset>
		</form>
		<p>name: {{ name }}</p>
		<p>details: {{ details }}</p>
		<p>type: {{ type }}</p>
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
			allergens: {
				nuts: '',
				eggs: '',
			}
		}
	},
	computed: {
		allergenOptions() {
			const options = [
				{ label: 'Nuts', key: 'nuts' },
				{ label: 'Eggs', key: 'eggs' },
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
