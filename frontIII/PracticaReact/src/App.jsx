

import './App.css'
/* import { Todo } from './components/Todo' */
/* import Listaitems from './components/Listaitems' */
/* import Listaitems from './components/Listaitems'; */

const ListaItems = (items) => {
  return (
      <div style={{
          border: '1px solid black',
          padding: '1rem',
          margin: '1rem',
          width: '50%',
          textAlign: 'left',
          backgroundColor: 'lightblue'
          

      }}>
          <ul>
             
              {items.map((item) => (
                  <li style={{
                      listStyle: 'none'
                  }} key={item.id}>{item.nombre} {item.apellido} {item.edad}</li>
              ))}
          </ul>
      </div>
  )
}


function App() {
 const lista=[{id:1, nombre:'Juan', apellido:'Perez', edad: 25},
  {id:2, nombre:'Maria', apellido:'Gomez', edad: 30},
  {id:3, nombre:'Pedro', apellido:'Garcia', edad: 35}];
  



  return (
    <>
    <ListaItems items={lista}/> 
{/*     <Todo/>
    <Todo/>
    <Todo/>
    <Todo/> */}
    
     
    </>
  )
}

export default App
