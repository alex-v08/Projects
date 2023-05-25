import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <div key={item.id}>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img src={pizza.img} alt=''/>
  
</div>
</>
  )
}

export default Card