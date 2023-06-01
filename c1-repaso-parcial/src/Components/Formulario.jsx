import React from 'react'

const Formulario = ({setCumpleaniero, setStyles, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
        <label >Nombre del cumpleañero</label>
        <input type="text" onBlur={(e) => setCumpleaniero((prevState) => ({...prevState, name: e.target.value}))}/>
        <label >Fecha: </label>
        <input type="date" onChange={(e) => setCumpleaniero((prevState) => ({...prevState, date: e.target.value}))}/>

        <label >Color de tarjeta</label>
        <select onChange={(e) => setStyles((prevState) => ({...prevState, background: e.target.value}))}>
            <option value="transparent">transparent</option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="pink">pink</option>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="purple">purple</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>

        <label >Color de letra</label>
        <select onChange={(e) => setStyles((prevState) => ({...prevState, color: e.target.value}))}>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="pink">pink</option>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="purple">purple</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        <button>Mostrar Tarjeta</button>
    </form>
  )
}

export default Formulario