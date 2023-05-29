import React from 'react'

const Tarjeta = ({name,date,color}) => {
  return (
    <div className='tarjeta'style={{backgroundColor:{color}}}>
    <h2>Estas Invitado al cumple de{name}</h2>
    <h3>va ser el dia{date}</h3>
    <h1>Te Esperamos</h1></div>
  )
}

export default Tarjeta