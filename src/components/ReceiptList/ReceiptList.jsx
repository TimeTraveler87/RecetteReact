import React from "react";
import { useState,useEffect } from "react";
// Importation des données des recettes , edit : se fait désormais via le context 
import ReceiptProvider, { useReceiptList } from '../../contexts/ReceiptContext'
import Detail from "../Detail/Detail";
import {
  Link,
} from "react-router-dom";
import '../../css/Receiptlist.css'

const ReceiptList = () => {
  const {Receipts} = useReceiptList()
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
  useEffect(()=> {
    // let tmp = [...localStorageList]
    // tmp.push(JSON.parse(localStorage.getItem('myData')))
    // console.log(tmp[0].imageUrl)
    // setLocalStorageList(tmp)
    console.log("ReceiptsUseEffect : "+Receipts)
  },[])

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
        {Receipts.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Temps de cuisson : {recipe.prepTime}</p>
            <Link to={`/recette/${recipe.id}`}>
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                style={{
                  maxWidth: "300px",
                  maxHeight: "400px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </li>
        ))}
        {/* {localStorageList.map((recipe) => (
			 <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Temps de cuisson : {recipe.prepTime}</p>
            <Link to={`/recette/${recipe.id}`}>
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                style={{
                  maxWidth: "300px",
                  maxHeight: "400px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </li>
			))} */}
      </ul>
        </div>
      )}
    </div>
  );
};

export default ReceiptList;
