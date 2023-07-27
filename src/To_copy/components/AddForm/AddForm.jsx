import React, { useState } from 'react'
import ReceiptProvider, { useReceiptList } from '../../contexts/ReceiptContext'

const AddForm = () => {

  const {addReceipts,Receipts} = useReceiptList()
  //INPUT
	const [titleInput, setTitleInput] = useState("");
	const [recetteInput, setRecetteInput] = useState("");
  const [photoInput, setPhotoInput] = useState("");
  const [durationInput, setDurationInput] = useState();
  const [difficultyInput, setDifficultyInput] = useState("");
  const [partInput, setPartInput] = useState();
  const [tagInput, setTagInput] = useState("");
  //INGREDIENT
  const [ingredientInput, setIngredientInput] = useState("");
  const [quantityInput, setQuantityInput] = useState();
  const [ingredientList, setIngredientList] = useState([]);

  //TAGS
  const [readTagList] = useState(["DESSERTS","PLATS","ENTREES","APPERITIFS"]);
  const [tagList, setTagList] = useState([]);

  //GESTION ERREUR
  const [isPartTypeError, setIsPartTypeError] = useState(false);
  const [isDurationTypeError, setIsDurationTypeError] = useState(false);

  const handleSubmit = e => {
        e.preventDefault()
        let objReceipt = 
        {
          name:titleInput,
          photo:photoInput,
          duration:durationInput,
          portions:partInput,
          tags:[...tagList]
        }
        addReceipts(objReceipt)
        // addReceipts(tagInput)
        // setTaskInput("")
    }
    const typeErrorHandling = e => {
      if(parseInt(Number(e)) == e)
        return true
      else
      {
        // alert("Incorrect type");
        return false
      }
  }
  const partHandling = e =>{
    if(typeErrorHandling(e))
    {
      setPartInput(e)
    }
    else
    {
      setIsPartTypeError(true)
      setPartInput("")
    }
  }
  const durationHandling = e =>{
    if(typeErrorHandling(e))
      setDurationInput(e)
    else
    {
      setDurationInput("")
      setIsDurationTypeError(true)
    }
  }
  const ingredientHandling = e =>{
    let obj = 
    {

    }
    setIngredientList([...ingredientList,])
  }
  const tagHandling = e =>{
    e.disabled = true
    e.style.backgroundColor = "grey"
    setTagList([...tagList,e.value])

  }
	return (
      <form  style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'450px', width:'300px',margin:'auto'}} onSubmit={handleSubmit}>
        <label>Titre</label>
        <input
          type="text"
          onChange={(e) => setTitleInput(e.target.value)}
          value={titleInput}
          />
          <label>Recette</label>
            <input
          type="text"
          onChange={(e) => setRecetteInput(e.target.value)}
          value={recetteInput}
          />
          <label>Photo</label>
                    <input
          type="text"
          onChange={(e) => setPhotoInput(e.target.value)}
          value={photoInput}
          />
          <label>Durée</label>
                    <input
          type="text"
          onChange={(e) => durationHandling(e.target.value)}
          value={durationInput}
        />
        {
          isDurationTypeError &&
          <div style={{color:'red'}}>Veuillez entrer des chiffres</div>
        }
        <label for="difficulty-names">Difficulté :</label>
        <select onInp name="difficulty-names" id="difficulty-names" onChange={(e)=>setDifficultyInput(e.target.value)} value={difficultyInput}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select> 
        <label>Portions</label>
              <input
          type="text"
          onChange={(e) => partHandling(e.target.value)}
          value={partInput}
        />
        {
          isPartTypeError &&
          <div style={{color:'red'}}>Veuillez entrer des chiffres</div>
        }
        <div style={{display:'flex',justifyContent:'space-between'}} className="tags">
            {
              readTagList.length > 0 &&
              readTagList.map((tag, i) => (
                <button id={i} value={tag} onClick={(e)=>tagHandling(e.target)} style={{width:'70px',fontSize:'10px',color:'white',backgroundColor:'green',display:'flex',justifyContent:'space-evenly'}}>
                  {tag}
                </button>
            ))

            }
        </div>
        <label>Tags</label>
              <input
          type="text"
          // onKeyDown={(e)=>handleDisabling(e.target)}
          disabled={true}
          onChange={(e) => setTagInput(e.target.value)}
          value={tagList}
          />
          <label>Ingrédients</label>
          <div style={{display:'flex',justifyContent:'space-between'}}>

          <input
            type="text"
            onChange={(e) => setIngredientInput(e.target.value)}
            value={ingredientInput}
            style={{minWidth:'60%'}}
          />
          <select onInp name="quantity-names" id="quantity-names" onChange={(e)=>setQuantityInput(e.target.value)} value={quantityInput}>
            <option value="gramme">g</option>
            <option value="litre">L</option>
            <option value="livre">Lb</option>
            <option value="kilogramme">kg</option>
            <option value="millilitre">mL</option>
          </select>
          <button  onClick={(e) => ingredientHandling(e.target.value)} style={{color:'white', backgroundColor:'green', width:'30px', height:'30px'}}>+</button>
          </div>
        <button type="submit">Valider</button>
      </form>
	);
}

export default AddForm