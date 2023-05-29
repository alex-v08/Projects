import { useState } from 'react'

import './App.css'
import Tarjeta from './Componets/Tarjeta'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState(null)
  const [color, setColor] = useState('transparent')

  return (
    <>
    <label>Ingrese el nombre del Cumpleañoero </label>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
      <Tarjeta name={name} date={date} setBackground={setColor}/>
      <label htmlFor="name">Ingrese el nombre del Cumpleañero</label>
      <input type="date" id="name" onChange={(e) => setName(e.target.value)} />
      <select onChange={(e)=>setColor(e.target.value)}>
        <option value="transparent">transparent</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>


      </select>
      
    </>
  )
}

export default App
