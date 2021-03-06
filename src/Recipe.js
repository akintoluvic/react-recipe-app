import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    console.log(title)
    return ( 
        
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
            <img src={image} alt="recipe" className="object-cover object-center h-full w-full" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
            <p className="text-base leading-relaxed mt-2">
                <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                </ol>
            </p>
            <a href="/" className="text-blue-500 inline-flex items-center mt-3">
                {calories}
            </a>
        </div>
     );
}
 
export default Recipe;