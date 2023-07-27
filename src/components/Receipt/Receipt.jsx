import React from 'react'
import recipesData from "./recette.json"
const Receipt = () => {
	return (
		<div>
		  <h2>Recipes</h2>
		  <ul>
			{recipesData.content.map((recipe) => (
			  <li key={recipe.id}>
				<h3>{recipe.title}</h3>
				<p>Ingredients: {recipe.ingredients.join(", ")}</p>
				<p>Instructions: {recipe.ingredients}</p>
				<p>Prep Time: {recipe.prepTime}</p>
				{/* <p>Cook Time: {recipe.cookTime}</p> */}
			  </li>
			))}
			{JSON.parse(localStorage.getItem('myData')).map((recipe) => (
			  <li key={recipe.id}>
				<h3>{recipe.title}</h3>
				<p>Ingredients: {recipe.ingredients.join(", ")}</p>
				<p>Instructions: {recipe.ingredients}</p>
				<p>Prep Time: {recipe.prepTime}</p>
				{/* <p>Cook Time: {recipe.cookTime}</p> */}
			  </li>
			))}
		  </ul>
		</div>
	  );
	};

export default Receipt