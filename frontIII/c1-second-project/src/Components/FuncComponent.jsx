import React, { useEffect, useState } from 'react'

export const FuncComponent = () => {
    const [state,setState] = useState({
        name: 'FuncComponent'
    })

  useEffect(() => {
    console.log('FuncComponent montado')
    return () => {
        console.log('FuncComponent desmontado')
    }
    }, [])

    
  return (
    <div>
    <h1>FuncComponent</h1></div>
  )
}


export default FuncComponent