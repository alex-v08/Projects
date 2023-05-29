
import './App.css'



const Texto = ({data}) => {
  return (
  <div className='div ti'>
  Meu primeiro parágrafo {data} 
</div>)
}



function App() {
  

  return (
    <>
    esto estaria bien <Texto data="la cocncha" /> a ver si funciona
    </>
  )
}

export default App
