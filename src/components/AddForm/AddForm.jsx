import React, { useState } from 'react'
import { useReceiptList } from '../../contexts/ReceiptContext'
import data from "../Receipt/recette.json"
// import '../../css/AddForm.css'
const AddForm = () => {

  const { setreceipts, receipts } = useReceiptList()
  //INPUT
  const [titleInput, setTitleInput] = useState("");
  const [recetteInput, setRecetteInput] = useState("");
  const [photoInput, setPhotoInput] = useState("");
  const [durationInput, setDurationInput] = useState("");
  const [difficultyInput, setDifficultyInput] = useState("");
  const [partInput, setPartInput] = useState("");
  const [tagInput, setTagInput] = useState("");


  //INGREDIENT
  const [nameIngredientInput, setnameIngredientInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const [unitInput, setUnitInput] = useState("");
  const [ingredientList, setIngredientList] = useState([]);

  //TAGS
  const [readTagList] = useState(["DESSERTS", "PLATS", "ENTREES", "APPERITIFS"]);
  const [tagList, setTagList] = useState([]);

  //GESTION ERREUR
  const [isPartTypeError, setIsPartTypeError] = useState(false);
  const [isDurationTypeError, setIsDurationTypeError] = useState(false);
  const [isQuantityTypeError, setIsQuantityTypeError] = useState(false);

  //const final
  const [result, setResult] = useState([]);
  const [isValidated, setIsValidated] = useState(false);


  const readHandling = e => {
    console.log(ingredientList)
  }
  const handleSubmit = e => {
    e.preventDefault()
    // const objReceipt =
    // {
    //   id: receipts.length,
    //   title: titleInput,
    //   recipe: recetteInput,
    //   imageUrl: photoInput,
    //   prepTime: durationInput,
    //   difficulty: difficultyInput,
    //   portions: partInput,
    //   tags: tagList,
    //   ingredients: ingredientList
    // }

    setIsValidated(true)
    setDifficultyInput("")
    setDurationInput("")
    setPartInput("")
    setPhotoInput("")
    setRecetteInput("")
    setTitleInput("")
    setTagList([])
    setIngredientList([])
    setreceipts([
      ...receipts,
      {
        id: receipts.length,
        title: titleInput,
        recipe: recetteInput,
        imageUrl: photoInput,
        prepTime: durationInput,
        difficulty: difficultyInput,
        portions: partInput,
        tags: tagList,
        ingredients: ingredientList
      }
    ])
    console.log("receipts AfterForm :" + [...receipts])
    // // const parsedData = JSON.parse(localStorage.getItem('myData'));
    // // if(parsedData)
    // //   tmpData = [...tmpData,...parsedData]
    // setResult(tmpData)
    // console.log(tmpData)
    // let jsonData = JSON.stringify([...tmpData])
    // //Integration formulaire
    // localStorage.setItem('myData', jsonData);
    // console.log("All local storage :"+window.localStorage)
    // console.log("Item myData from localStorage" + localStorage.getItem('myData'))

    // parsedData = JSON.parse(localStorage.getItem('myData'));
    // console.log(parsedData)
    // console.log("ParsedData (final) "+parsedData)
    // parsedData.forEach(el => {
    // });
    // let json = JSON.stringify(tmpData)
    // tmpData.push(objReceipt)
    // var fs = require('fs')
    // fs.writeFile('../Receipt/recette.json',json,'utf8')
    // addreceipts(tagInput)
    // setTaskInput("")
  }
  const typeErrorHandling = e => {
    if (parseInt(Number(e)) == e)
      return true
    else {
      // alert("Incorrect type");
      return false
    }
  }
  const partHandling = e => {
    if (typeErrorHandling(e)) {
      setPartInput(e)
      setIsPartTypeError(false)
    }
    else {
      setIsPartTypeError(true)
      setPartInput("")
    }
  }
  const durationHandling = e => {
    if (typeErrorHandling(e)) {
      setDurationInput(Number(e))
      setIsDurationTypeError(false)
    }
    else {
      setDurationInput("")
      setIsDurationTypeError(true)
    }
  }
  const quantityHandling = e => {
    if (typeErrorHandling(e)) {
      setQuantityInput(Number(e))
      setIsQuantityTypeError(false)
    }
    else {
      setQuantityInput("")
      setIsQuantityTypeError(true)
    }
  }

  const ingredientHandling = e => {
    let obj =
    {
      quantity: quantityInput,
      name: nameIngredientInput,
      unit: unitInput
    }
    setIngredientList([...ingredientList, {
      quantity: quantityInput,
      name: nameIngredientInput,
      unit: unitInput
    }])
    setQuantityInput("")
    setnameIngredientInput("")
  }
  const tagHandling = e => {
    // e.disabled = true
    // e.style.backgroundColor = "grey"
    setTagList([...tagList, e.value])

  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '450px', width: '300px', margin: 'auto' }} >
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
      <div style={{ color: 'red', display: isDurationTypeError ? 'block' : 'none', visibility: isDurationTypeError ? 'visible' : 'hidden' }}>Veuillez entrer des chiffres</div>
      <label htmlFor="difficulty-names">Difficulté :</label>
      <select name="difficulty-names" id="difficulty-names" onChange={(e) => setDifficultyInput(e.target.value)} value={difficultyInput}>
        <option disabled={true} value="">Choisir :</option>
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

      <div style={{ color: 'red', display: isPartTypeError ? 'block' : 'none', visibility: isPartTypeError ? 'visible' : 'hidden' }}>
        Veuillez entrer des chiffres
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }} className="tags">
        {
          readTagList.length > 0 &&
          readTagList.map((tag, i) => (
            <button key={i} type='button' id={i} value={tag} onClick={(e) => tagHandling(e.target)} style={{ width: '70px', fontSize: '10px', color: 'white', backgroundColor: 'green', display: 'flex', justifyContent: 'space-evenly' }}>
              {tag}
            </button>
          ))

        }
      </div>
      <label>Tags</label>
      <input
        type="text"
        // onKeyDown={(e)=>handleDisabling(e.target)}
        onChange={(e) => setTagInput(e.target.value)}
        value={tagList}
      />
      <label>Ingrédients</label>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '20px' }}>
        <input
          type="text"
          onChange={(e) => setnameIngredientInput(e.target.value)}
          value={nameIngredientInput}
          style={{ minWidth: '40%' }}
          placeholder={"Name"}
        />
        <input
          type="text"
          onChange={(e) => quantityHandling(e.target.value)}
          value={quantityInput}
          style={{ width: '50px' }}
          placeholder={"Quantity"}
        />
        <div style={{ color: 'red', position: 'absolute', top: '30px', display: isQuantityTypeError ? 'block' : 'none', visibility: isQuantityTypeError ? 'visible' : 'hidden' }}>Veuillez entrer des chiffres</div>
        <select name="unit-names" id="unit-names" onChange={(e) => setUnitInput(e.target.value)} value={unitInput}>
          <option disabled={true} value="">Unité</option>
          <option value="gramme">g</option>
          <option value="litre">L</option>
          <option value="livre">Lb</option>
          <option value="kilogramme">kg</option>
          <option value="millilitre">mL</option>
        </select>
        <button type='button' onClick={(e) => ingredientHandling(e.target)} style={{ color: 'white', backgroundColor: 'green', width: '30px', height: '30px' }}>+</button>
      </div>
      {
        ingredientList.length > 0 &&
        <div style={{ width: '100%', height: '300px' }}>
          <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            {
              ingredientList.map((el, i) => (
                <tr key={i}>
                  <td style={{ minWidth: '150px', border: '1px solid black', borderCollapse: 'collapse' }}>{el.name}</td>
                  <td style={{ minWidth: '50px', border: '1px solid black', borderCollapse: 'collapse' }}>{el.quantity}</td>
                  <td style={{ minWidth: '50px', border: '1px solid black', borderCollapse: 'collapse' }}>{el.unit}</td>
                </tr>
              ))
            }
          </table>
        </div>
      }
      {/* <button type='button' onClick={(e) => readHandling(e.target)}>Log</button> */}
      <button type="submit">Valider</button>
      <div style={{ borderRadius: '5px', display: 'flex', justifyContent: 'space-between', height: '50px', width: '300px', backgroundColor: 'green', display: isValidated ? 'block' : 'none', visibility: isValidated ? 'visible' : 'hidden' }}>
        <p style={{ color: 'white', textAlign: 'center' }}>Formulaire envoyé avec succès !</p>
      </div>
    </form>

  );
}

export default AddForm