import React from 'react';
import Recipe from './Recipe';

const Recipes = ({recipes}) => {
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
        <section class="text-gray-700 body-font pt-0">
        <div class="container px-5 mx-auto">
          <div class="flex flex-col">
            {/* <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-blue-500"></div>
            </div> */}
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {recipes.map( recipe =>(
                <Recipe recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
     );
}
 
export default Recipes;