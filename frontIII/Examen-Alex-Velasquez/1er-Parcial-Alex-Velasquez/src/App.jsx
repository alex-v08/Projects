import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }


  return (
    <>
      <Card setCount={handleCount} count={count} />
    </>
  )
}

export default App
