import React from 'react';
import Style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div className = {Style.recipe}>
            <h1>{title}</h1>
            <p><span>Calories:</span> {calories}</p>
            <img className = {Style.image}src = {image} alt = ''/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe