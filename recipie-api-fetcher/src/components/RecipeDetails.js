import React from "react";

function RecipeDetails({ recipe }) {
  return (
    <div className="recipe-details">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
