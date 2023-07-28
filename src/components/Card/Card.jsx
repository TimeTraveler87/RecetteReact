import React from 'react'

const Card = ({recipe}) => {

  return (
    <div>
            <h3>{recipe.title}</h3>
            <p>Temps de cuisson : {recipe.prepTime}</p>
            <img
                src={recipe.imageUrl}
                alt={recipe.title}
                style={{
                  maxWidth: "300px",
                  maxHeight: "400px",
                  cursor: "pointer",
                }}
              />
    </div>
  )
}

export default Card