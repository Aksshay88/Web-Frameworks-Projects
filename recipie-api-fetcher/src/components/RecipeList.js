// RecipeList.js

import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import { fetchRecipes } from "../services/RecipeService";

function RecipeList() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const fetchedRecipes = await fetchRecipes(query);
      setRecipes(fetchedRecipes);
      setError(null);
    } catch (error) {
      setError("Error fetching recipes. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Recipe Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => handleSearch(query)}>Search</button>
      {error && <div>{error}</div>}
      <div>
        {recipes.map((recipe, index) => (
          <RecipeDetails key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
