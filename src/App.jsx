import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const updatedOutput = inputValue
      .replace(/[A-Z]/g, "X")
      .replace(/[a-z]/g, "x")
      .replace(/\d/g, "D");

    setOutputValue(updatedOutput);
  }, [inputValue]);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
  };

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
      <input type="text" className="input" value={outputValue} readOnly />

      <button className="button" onClick={handleCopy}></button>
    </div>
  );
};

export default App;
