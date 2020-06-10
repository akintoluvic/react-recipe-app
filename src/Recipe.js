import React from 'react';

const Recipe = (recipe) => {
    const title = recipe.recipe.label; 
    const calories = recipe.recipe.calories; 
    const image = recipe.recipe.image; 
    const ingredients = recipe.recipe.ingredients;
    console.log(recipe)
    return ( 
        
        // <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        //     <div class="rounded-lg h-64 overflow-hidden">
        //     <img src={image} alt="recipe" class="object-cover object-center h-full w-full" />
        //     </div>
        //     <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
        //     <p class="text-base leading-relaxed mt-2">
        //         <ol>
        //                 {ingredients.map(ingredient => (
        //                     <li>{ingredient.text}</li>
        //                 ))}
        //         </ol>
        //     </p>
        //     <a href="/" class="text-blue-500 inline-flex items-center mt-3">
        //         {calories}
        //     </a>
        // </div>
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
          </div>
          <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
          <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a class="text-blue-500 inline-flex items-center mt-3">Learn More
          </a>
        </div>
     );
}
 
export default Recipe;