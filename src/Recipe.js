import React from'react';

const Recipe = (props) => {
    return(
        <div className="recipe">
            <h1>{props.name}</h1>
            <label>Ingredients:</label>
            <ul>
            {props.ingredients.map((ingredient, i) =>
                <li key={i}>{ingredient}</li>
            )}
            </ul>
            
            <p><span>Recipe Owner: </span><b>{props.owner}</b></p>
            
            <p><span>Created: </span><b>{props.creationDate}</b></p>
        </div>
    );
}

export default Recipe;