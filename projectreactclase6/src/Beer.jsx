import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Beer = () => {
  const [beer, setBeer] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  const getBeer = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
    const data = await res.json()
    setBeer(data[0])
  }

  useEffect(() => {
    getBeer()
  }, [params.id])

  const goBack = () => {
    navigate(-1) // Navega hacia atrás en la historia del navegador
  }

  return (
    <div className='cardflex'>
      <h2>Cerveza numero {params.id}</h2>
      {beer.id > 0 ? (
        <div className='card'>
          <img src={beer.image_url} alt='beer-detail' />
          <p>{beer.tagline}</p>
          <p>{beer.description}</p>
          <p>{beer.brewers_tips}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={goBack}>Go back</button>
    </div>
  )
}

export default Beer
