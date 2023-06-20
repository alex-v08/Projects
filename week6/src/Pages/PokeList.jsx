import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PokeList = () => {

    const [pokeList, setPokeList] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    useEffect(() => {
        axios(url)
        .then(res => setPokeList(res.data.results))
    }, [])
    console.log(pokeList)
  return (
    <div>
        {pokeList.map(poke => <Link to={`/pokemon/${poke.name}`}><li>{poke.name}</li></Link>)}
    </div>
  )
}

export default PokeList