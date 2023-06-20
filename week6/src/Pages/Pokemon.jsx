import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
    const [poke, setPoke] = useState({})
    const params = useParams()
    console.log(params)
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
    useEffect(() => {
            axios(url)
                .then(res => res.data)
                .then(res => setPoke(res.data))
        },
        [])

    console.log(poke)
  return (
    <div>
        <h3>{poke.name}</h3>
        <img src={poke.sprites?.front_default} alt="" />
    </div>
  )
}

export default Pokemon