import React from 'react'

const Tarjeta = ({cumpleaniero, styles}) => {
  return (
    <div className='tarjeta' style={{backgroundColor: styles.background, color: styles.color}}>
        <h2>Estas invitado al cumple de {cumpleaniero.name}</h2>
        <h3>Va a ser el día {cumpleaniero.date}</h3>
        <h1>Te esperamos!!</h1>
    </div>
  )
}

export default Tarjeta