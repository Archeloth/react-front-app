import React, { useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function Search () {

    const [recipes, setRecepies] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    const apiEndpoint = "https://public-recepy-api.herokuapp.com/recepts/search/";

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        if(search === "") { return };
        console.log(search);
        console.log(query);
        setQuery(search);
        getRecepies();
        setSearch("");
    }

    const getRecepies = async () => {
        const response = await fetch(apiEndpoint+query);
        const data = await response.json();
        console.log(data);
        setRecepies(data);
    }

    return (
        <div>
            <form onSubmit={getSearch} className="search-form">
                <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                <Recipe 
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