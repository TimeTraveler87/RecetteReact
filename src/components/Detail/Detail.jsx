import * as React from "react";
// import data from "../Receipt/recette.json" 
import { useReceiptList } from '../../contexts/ReceiptContext'


const Detail = ({id}) => {
  // const {id} = useParams();
  const {receipts} = useReceiptList()
  const recipe = receipts.find(el=>el.id == id)

  return (
    <div>
      <h2>Detail</h2>
      <ul>
        <h3>{recipe.title}</h3>
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          style={{
            maxWidth: "300px",
            maxHeight: "400px",
          }}
        />
        <p>Ingredients: {recipe.ingredients.join(", ")}</p>
        <p>Instructions: {recipe.recipe}</p>
        <p>Prep Time: {recipe.prepTime}</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Portions: {recipe.portions}</p>

        {/* <p>Cook Time: {recipe.cookTime}</p> */}
      </ul>
    </div>
  );
};

export default Detail;
