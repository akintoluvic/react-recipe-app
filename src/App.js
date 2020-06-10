import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './tailwind.css';
import './App.css';
import { Nav } from './components/Nav';

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
      
      <section className="text-gray-700 body-font pt-0">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier</h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
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
      </section>
    </div>
   );
}
 
export default App;

