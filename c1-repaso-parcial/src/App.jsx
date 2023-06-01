import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Tarjeta from './Components/Tarjeta'

function App() {

  const [cumpleaniero, setCumpleaniero] = useState({
    name: '',
    date: null
  })

  const [styles, setStyles] = useState({
    background: 'transparent',
    color: 'white'
  })
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(cumpleaniero.name.length > 3){
      setShow(true)
    }
  }

  return (
    <>
      <Formulario handleSubmit={handleSubmit}  setCumpleaniero={setCumpleaniero} setStyles={setStyles}/>
      
      {show && <Tarjeta cumpleaniero={cumpleaniero} styles={styles}/>}

    </>
  )
}

export default App
