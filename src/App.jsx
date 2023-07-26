import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState({
    inputText: ""
  })
  function handleCopy(){
    navigator.clipboard.writeText(input.inputText)
  }

  function handleChange(event) {
      const {name, value} = event.target
      setInput(prevInput => ({
          ...prevInput,
          [name]: value
      }))
  }

  return (
          <div className="container">
            <h1>Input :</h1>
            <input 
                type="text"
                className="input"
                name="inputText"
                value={input.inputText}
                onChange={handleChange}
            />
            <h1>Output :</h1>
            <input 
                type="text"
                className="input"
                value={input.inputText}
                readOnly
            />
            <button onClick={handleCopy}>copy</button>
              
          </div>
  )
}


export default App
