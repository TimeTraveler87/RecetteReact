import * as React from "react";
import {
  BrowserRouter as BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import data from "../Receipt/recette.json" 

const Detail = () => {
  const {id} = useParams();
  const recipe = data.find(el=>el.id == id)

  return (
    <div>
      <h2>Detail</h2>
      <ul>
        <h3>{recipe.name}</h3>
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          style={{
            maxWidth: "300px",
            maxHeight: "400px",
          }}
        />
        <p>Ingredients: {recipe.ingredients.join(", ")}</p>
        <p>Instructions: {recipe.instructions}</p>
        <p>Prep Time: {recipe.prepTime}</p>
        <p>Cook Time: {recipe.cookTime}</p>
      </ul>
    </div>
  );
};

export default Detail;
