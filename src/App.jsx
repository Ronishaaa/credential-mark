import { useState, useEffect } from "react";
import "./App.css";
import useClipboard from "./hooks/useClipboard";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const clipboard = useClipboard();

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
    clipboard.copy(outputValue);
  };

  const handleClear = () => {
    setInputValue("");
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

      <button className="clearButton" onClick={handleClear} />

      <h1>Output :</h1>

      <div className="output">
        <input type="text" className="input" value={outputValue} readOnly />
        <button
          className="copyButton"
          onClick={handleCopy}
          style={{ backgroundColor: clipboard.copied ? "green" : "black" }}
        ></button>
        {clipboard.copied && <p>Copied</p>}
      </div>
    </div>
  );
};

export default App;
