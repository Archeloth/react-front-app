import React, { useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

function Home(){
    const apiEndpoint = "https://public-recepy-api.herokuapp.com/recepts";

    const [recipes, setRecepies] = useState([]);

    useEffect( () => {
        getRecepies();
    }, []);

    const getRecepies = async () => {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setRecepies(data);
    }

    return(
        <div>
            <h1>Welcome to the best Cake recipe website!</h1>

            <div className="recipes">
                {recipes.map(recipe => (
                <Recipe 
                key={recipe._id}
                id={recipe._id}
                name={recipe.name} 
                ingredients={recipe.ingredients} 
                owner={recipe.owner} 
                creationDate={recipe.creationDate.split('T')[0]}
                />
                ))}
            </div>
        </div>
    );
}

export default Home;