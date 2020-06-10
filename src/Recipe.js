import React from 'react';

const Recipe = (recipe) => {
    // const [title, calories, image, ingredients] = recipe;
    // key= {recipe.recipe.calories} 
    //             title={recipe.recipe.label} 
    //             calories={recipe.recipe.calories} 
    //             image={recipe.recipe.image} 
    //             ingredients={recipe.recipe.ingredients}
    console.log(recipe)
    return ( 
        // <div className={style.recipe}>
        //     <img src={image} className={style.image} alt="" />
        //     <div className={style.body}>
        //         <h1>{title}</h1>
        //         <ol>
        //             {ingredients.map(ingredient => (
        //                 <li>{ingredient.text}</li>
        //             ))}
        //         </ol>
        //         <p>{calories}</p>
        //     </div>
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