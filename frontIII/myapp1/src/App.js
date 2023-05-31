
import './styles/App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Button from '@mui/material/Button';

function App() {
  const titulo = "Examen React 2023"
  return (
    <>
    <div className="App">
      <Header titulo={titulo}/>
      <h1>React App</h1>
      <Button variant="contained">Continuar</Button>
      <Button variant="outlined" color="success">Guardar</Button>
      <Button variant="outlined" color="error">Cancelar</Button>
    </div></>
  );
}

export default App;
