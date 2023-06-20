import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')

    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = `https://api.spoonacular.com/food/search?apiKey=${apiKey}&query=${search}&number=10`;
    // https://api.spoonacular.com/recipes/{id}/information
    useEffect(() => {
        axios(url)
        .then(res => setRecipes(res.data.searchResults[0].results))
    }, [url])
    console.log(recipes)
  return (
    <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
        {recipes.map((recipe) => (
            <div>
                <li>{recipe.name}</li>
            </div>
        ))}
    </div>
  )
}

export default Recipes