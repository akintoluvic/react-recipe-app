import React, {useEffect, useState} from 'react';
import './tailwind.css';
import './App.css';
import { Nav } from './components/Nav';
import Recipes from './Recipes';

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
    console.log(e.target.value)
  }

  const getSearch = e => {
    // e.preventDefault();
    setQuery(search);
    console.log(search);
  }

  return ( 
    <div className="App bg-gray-100 pt-24 lg:pt-0">
      <Nav 
        onSearch={getSearch} 
        textChange={updateSearch} 
        search={search} 
      />
      <Recipes recipes={recipes} />
    </div>
   );
}
 
export default App;

