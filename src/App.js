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
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
  }

  return ( 
    <div className="App"  class="bg-gray-100 pt-24 lg:pt-0">
      <Nav />
      {/* <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Type in your main ingredient" />
        <button className="search-button" type="submit" >Search</button>
      </form> */}
      <form class="flex flex-grow lg:w-3/4 xl:w-4/5">
        <div class="w-full lg:px-6 lg:w-3/4 xl:px-12 pr-4 inline-flex">
                  <div class="relative pr-4">
                    <input
                      id="docsearch"
                      class="transition-colors duration-100 ease-in-out bg-white shadow-sm focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 pr-2 pl-10 block w-full appearance-none leading-normal"
                      type="text"
                      placeholder="Enter recipe here to search"
                    />
                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                      <svg
                        class="fill-current md-hidden pointer-events-none text-gray-600 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                      </svg>
                    </div>
                  </div>
                  <button type="button" 
                  class="w-full xl:w-1/4 bg-gray-800 rounded-lg text-gray-500 focus:outline-none focus:text-gray-700 flex px-6 items-center ">
                    Search
                  </button>

                  </div>
                </form>


      
      
      <section class="text-gray-700 body-font pt-0">
        <div class="container px-5 mx-auto">
          <div class="flex flex-col">
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier</h1>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
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

