import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function decrease(){
    setCount(count-1);
  }

  function increase(){
    setCount(count+1);
  }

  function reset(){
    setCount(0);
  }


  return (
   <>
      <h1>Count : {count}</h1>

      <div>
        <button id='decrease' onClick={decrease}>Decrease</button>
        <button id='reset' onClick={reset}>Reset</button>
        <button id='increase' onClick={increase}>Increase</button>
      </div>
   </>
  )
}

export default App
