import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import Header from './Header';
import { Button } from './components/Button';

const App = () => {
  const APP_ID = "8f29537d";
  const APP_KEY = "13b26292968b004e8a3ca722e2e660d3";

  const [search, setSearch] = useState([]);  
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  
  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
  }

  return ( 
    <div className="App">
      <Header />
      {/* <h1 className="id">Type in your Recipe</h1> */}
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Type in your main ingredient" />
        <button className="search-button" type="submit" >Search</button>
      </form>
      <Button name="Sign Up" />
      <div className="recipes">
        {recipes.map( recipe =>(
          <Recipe 
            key= {recipe.recipe.calories} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients} 
          />
        ))}
      </div>
    </div>
   );
}
 
export default App;

