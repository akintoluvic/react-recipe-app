import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

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

  const buttonSearch = e => {
    e.preventDefault();
    setQuery(e.target.value);
    console.log(e.target.value);
  }

  return ( 
    <div className="App">
      <h1 className="id">Recipe App</h1>
      <button onClick={buttonSearch} type="button" value="Potato">Potato</button>
      <button  onClick={buttonSearch} type="button" value="Yam">Yam</button>
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" >Search</button>
      </form>
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

