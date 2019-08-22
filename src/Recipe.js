import React from 'react';
import './App.css';
import axios from 'axios';

const Recipe = (props) => {

    const deleteRecipe = (e) => {
        const r = window.confirm("Are you sure you want to delete this recipe?");
        if(r === true){
            axios.delete(`https://public-recepy-api.herokuapp.com/recepts/${props.id}`)
            .then(response => {
                console.log(response);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            //Return
        }
    };

    return(
        <div className="recipe">
            <h1>{props.name}</h1>
            <label>Ingredients:</label>
            <ul>
            {props.ingredients.map((ingredient) =>
                <li key={ingredient}>{ingredient}</li>
            )}
            </ul>
            
            <p><span>Recipe Owner: </span><b>{props.owner}</b></p>
            
            <p><span>Created: </span><b>{props.creationDate}</b></p>

            <ul className="recipe-links">
                <li className="modify" key="modify">Modify</li>
                <li className="delete" key="delete" onClick={deleteRecipe}>Delete</li>
            </ul>
        </div>
    );
}

export default Recipe;