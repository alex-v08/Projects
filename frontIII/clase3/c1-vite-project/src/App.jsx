
import React from 'react';

import './App.css'

import react from './assets/react.svg'



function Lista() {
  const [items, setItems] = React.useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  function handleClick() {
    // Clona el estado actual
    const newItems = [...items];

    // Agrega un nuevo item al clon
    newItems.push({
      id: newItems.length + 1,
      name: `Item ${newItems.length + 1}`,
    });

    // Sincroniza el estado con el nuevo array
    setItems(newItems);
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Item</button>
    </>
  );
}

function Imagen() {
  return (
    <img src={react} alt="react" />
  )
}

function Form() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    /*
      Previene el comportamiento default de los
      formularios el cual recarga el sitio
    */
    evt.preventDefault();

    // Aquí puedes usar values para enviar la información
  }

  function handleChange(evt) {
    /*
      evt.target es el elemento que ejecuto el evento
      name identifica el input y value describe el valor actual
    */
    const { target } = evt;
    const { name, value } = target;

    /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del
         input que ejecutó el evento
    */
    const newValues = {
      ...values,
      [name]: value,
    };

    // Sincroniza el estado de nuevo
    setValues(newValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <>
    <h1>To Do List for {formatDate(today)}</h1>
    </>
  );
}




function App() {
  

  return (
    <>
      <Imagen/>
      <Form />
      <Lista />  
      <TodoList/>       
    </>
  )
}

export default App
