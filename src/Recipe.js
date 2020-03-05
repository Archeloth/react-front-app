import React from 'react';
import axios from 'axios';

const Recipe = (props) => {

    //const [recepyState, setRecepyState] = useState(true);

    const deleteRecipe = (e) => {
        const r = window.confirm("Are you sure you want to delete this recipe?");
        if(r === true){
            axios.defaults.headers.delete['Access-Control-Allow-Origin'] = 'access-control-allow-origin';
            axios.delete(
                `https://public-recepy-api.herokuapp.com/recepts/${props.id}`
            )
            .then(response => {
                window.location.reload()
                //setRecepyState = false;
            })
            .catch(error => {
                throw error;
            });
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

            <div className="recipe-links">
                <span className="modify" key="modify">Modify</span>
                <span className="delete" key="delete" onClick={deleteRecipe}>Delete</span>
            </div>

        </div>
    );
}

export default Recipe;