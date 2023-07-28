import React from "react";
import { useState, useEffect } from "react";
// Importation des données des recettes , edit : se fait désormais via le context 
import { useReceiptList } from '../../contexts/ReceiptContext'
import {
  Link,
} from "react-router-dom";
import '../../css/Receiptlist.css'
import Card from "../Card/Card";

const ReceiptList = () => {
  const { receipts } = useReceiptList()
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // console.log("Receipt Browser"+receipts)
  // Gestion du clique sur une image de recette
  const handleRecipeClick = (recipe) => {
    console.log("Clicked recipe:", recipe);
    setSelectedRecipe(recipe);
  };
  // Gestion du clique sur le bouton "Retour"
  const handleBackClick = () => {
    setSelectedRecipe(null);
  };
  useEffect(() => {
    // let tmp = [...localStorageList]
    // tmp.push(JSON.parse(localStorage.getItem('myData')))
    // console.log(tmp[0].imageUrl)
    // setLocalStorageList(tmp)
    console.log("receiptsUseEffect : ",receipts)
  }, [])

  return (
    <div>
      <div>
          <div>
            <h2>Recettes</h2>
          </div>
          {receipts.map((recipe, i) => (
            <div key={i} >

              <Link to={`/recette/${recipe.id}`}>
                <Card recipe={recipe} />
              </Link>
            </div>
          ))}
        </div>
      
    </div>
  );
}
  export default ReceiptList;
