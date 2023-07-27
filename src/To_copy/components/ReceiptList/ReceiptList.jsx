import React from "react";
import { useState } from "react";
import recipesData from "../Receipt/recette.json"; // Importation des données des recettes
import Detail from "../Detail/Detail";

const ReceiptList = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // Gestion du clique sur une image de recette
  const handleRecipeClick = (recipe) => {
    console.log("Clicked recipe:", recipe);
    setSelectedRecipe(recipe);
  };
  // Gestion du clique sur le bouton "Retour"
  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <div>
          <button onClick={handleBackClick}>Retour</button>
          <Detail recipe={selectedRecipe} />{" "}
          {/* Affiche le composant Recette avec la recette sélectionnée */}
        </div>
      ) : (
        <div>
          <h2>Recettes</h2>
          <ul>
            {recipesData.map((recipe) => (
              <li key={recipe.id}>
                <h3>{recipe.name}</h3>
                <p>Temps de cuisson : {recipe.cookTime}</p>
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  style={{
                    maxWidth: "300px",
                    maxHeight: "400px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRecipeClick(recipe)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReceiptList;
