import { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/searchbar";
import RecipeCard from "./components/recepieCard";

const apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiurl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals || []); // handle null case
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes(); // load some recipes initially
  }, []);

  return (
    <div className="container">
      <h1>Our Recipe App</h1>
 
      {/* Searchbar */}
      <Searchbar query={query} setQuery={setQuery} searchRecipes={searchRecipes} />

      <div className="recipes">
        {isLoading ? (
          <p>Loading...</p>
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p>No Recipe Available!</p>
        )}
      </div>
    </div>
  );
}

export default App;
