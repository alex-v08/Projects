import { useState, useRef } from 'react'

const Clock = () => {
  const [playing, setPlaying] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null)

  function handleClick() {
    if (playing) {
      clearInterval(intervalRef.current || undefined)
      setPlaying(false)
    } else {
      setSeconds(0)
      setPlaying(true)

      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)
    }
  }

  return (
    <>
      <h1>{seconds}</h1>
      <button onClick={handleClick}>{playing ? 'stop' : 'play'}</button>
    </>
  )
}

export default Clock
