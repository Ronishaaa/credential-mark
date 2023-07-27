import { useState } from 'react'
import './App.css'

function App() {

    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');


    function handleInputValue(event) {
      const newInputValue = event.target.value;
      setInputValue(newInputValue);
      const updatedOutput = newInputValue.replace(/[A-Z]/g, 'X').replace(/[a-z]/g, 'x').replace(/\d/g, 'D');
      setOutputValue(updatedOutput);
    }

  function handleCopy() {
    navigator.clipboard.writeText(inputValue);
  }

  return (
    <div className="container">
      <h1>Input :</h1>
      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={handleInputValue}
      />
      <h1>Output :</h1>
      <input
        type="text"
        className="input"
        value={outputValue}
        readOnly
      />
      <button className="button" onClick={handleCopy}></button>
    </div>
  )

}


export default App
