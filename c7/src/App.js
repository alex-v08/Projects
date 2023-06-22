import { useRef } from 'react'

const App = () => {
  const ref = useRef()
  const inputRef = useRef()
  const click = () => {
    console.log(ref.current.clientHeight)
    ref.current.innerHTML = 'Chanchito feliz'
  }
  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>Lala</div>
    </div>
  )
}
export default App
