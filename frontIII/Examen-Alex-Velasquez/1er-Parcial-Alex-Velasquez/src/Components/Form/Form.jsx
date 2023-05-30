import React from 'react'

import './Form.css'

const Form = () => {
  return (

    //Crear Formulario React, con Nombre, Apellido, Email, Password, Confirmar Password, Boton de Registro
    //Validar que todos los campos sean obligatorios

    //Crear un componente Form.jsx

    //Crear un componente Card.jsx

    //Crear un componente Button.jsx
<form className="form">
    <div className="form-group etiqueta" >
        <label htmlFor="name">Nombre</label>
        <input type="text" className="form-control " id="name" placeholder="Nombre" />
    </div>
    <div className="form-group etiqueta">
        <label htmlFor="lastname">Apellido</label>
        <input type="text" className="form-control" id="lastname" placeholder="Apellido" />
    </div>
    <div className="form-group etiqueta">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Email" />
    </div>
    <div className="form-group etiqueta">
        <label htmlFor="password">Contraseña</label>
        <input type="password" className="form-control" id="password" placeholder="Contraseña" />
    </div>
    <div className="form-group etiqueta">
        <label htmlFor="password2">Confirmar Contraseña</label>
        <input type="password" className="form-control" id="password2" placeholder="Confirmar Contraseña" />
    </div>
    <button type="submit" className="boton">Registrarse</button>






</form>
  )
}

export default Form