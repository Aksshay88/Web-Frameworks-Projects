const APP_ID = "563a50c4";
const APP_KEY = "30690a39b29d19392b0212b81822c948";

async function fetchRecipes(query) {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    const data = await response.json();
    return data.hits.map((hit) => hit.recipe);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

export { fetchRecipes };
