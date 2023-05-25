import React, { useState } from 'react';
import { fetchRandomImage } from './api/api';

import TodoList3 from './api/LlavesCss';




function Imagenes() {
  const [image, setImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const image = await fetchRandomImage(searchTerm);
      setImage(image);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {image && (
        <div>
          <h2>{image.tags}</h2>
          <img src={image.webformatURL} alt={image.tags} />
        </div>
      )}
    </div>
  )
  

  
}

const today = new Date();

function formatDate(date) {
  return (new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date));
}

function TodoList() {
  return (
    <>
    <h1>To Do List for {formatDate(today)}</h1>
    </>
  );
}

function Lista() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};





 function ListaIm() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src='https://i.imgur.com/7vQD0fPs.jpg'
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}




function App() {
  return (
    <section>
    <h1>Amazing scientists</h1>
    
    <Imagenes />
    <Imagenes />
    <Imagenes />
    <TodoList />
    <Lista />
    <ListaIm />
   

  </section>
     
  );
}


export default App;





