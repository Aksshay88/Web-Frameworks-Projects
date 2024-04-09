// App.js
import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import RecipeList from "./components/RecipeList";
import { fetchRecipes } from "./services/RecipeService";
import "./index.css"; // Import CSS file for styling

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const fetchedRecipes = await fetchRecipes(query);
    setRecipes(fetchedRecipes);
  };

  return (
    <div className="App">
      <h1></h1>
      <button onSubmit={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
