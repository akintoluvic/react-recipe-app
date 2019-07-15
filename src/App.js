import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "4b8833db";
  const APP_KEY = "455209e5c0a5870189c6a73719e5a19a";

  const [search, setSearch] = useState([]);  
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');
  
  useEffect( async () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return ( 
    <div className='App'>
      <h1>Recipe App</h1>
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-button" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" >Search</button>
      </form>
      {recipes.map( recipe =>(
      <Recipe 
        key= {recipe.recipe.calories} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
      />
      ))}
    </div>
   );
}
 
export default App;

