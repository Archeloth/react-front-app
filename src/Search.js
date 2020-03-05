import React, { useState } from 'react';
import Recipe from './Recipe';

function Search () {

    const [recipes, setRecepies] = useState([]);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(0);

    const apiEndpoint = "https://public-recepy-api.herokuapp.com/recepts/search/";

    const updateSearch = e => {
        setSearch(e.target.value);
        if (e.target.value.length > 3) {
            getRecepies();
        } else {
            while(recipes.length > 0) {
                recipes.pop();
            }
            setResults(0);
        }
    }

    const getRecepies = async () => {
        const response = await fetch(apiEndpoint+search);
        if(response.status === 200){
            const data = await response.json();
            setResults(data.length);
            setRecepies(data);
        }
    }

    return (
        <div>
            <input type="text" className="search-input" value={search} onChange={updateSearch} placeholder="Search"/>
            <p>Found recipes: {results}</p>
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

export default Search;