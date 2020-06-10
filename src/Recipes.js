import React from 'react';
import Recipe from './Recipe';

const Recipes = ({recipes}) => {
    return ( 
        <section class="text-gray-700 body-font pt-0">
        <div class="container px-5 mx-auto">
          <div class="flex flex-col">
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Meal Frontier</h1>
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
     );
}
 
export default Recipes;