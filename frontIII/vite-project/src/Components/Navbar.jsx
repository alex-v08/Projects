import React from 'react'

const Navbar = () => {

    let titulos = ['Home', 'About', 'Contact', 'Pizzas']
  return (
    <div>
     
     {titulos.map((titulo, index) => (
        <div key={index}>
           <h4>{titulo}</h4>
        </div>
            
     )
     
        )}
    </div>
  )
}

export default Navbar