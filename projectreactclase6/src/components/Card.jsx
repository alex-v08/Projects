import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {
  return (
    <Link to={`/beer/${data.id}`}>
      <div className='card'>
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt='beer-detail' />
        <button>Ver detalles</button>
      </div>
    </Link>
  )
}

export default Card
