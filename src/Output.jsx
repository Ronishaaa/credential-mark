import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Output.css";

const Output = () => {
  const [outputValue, setOutputValue] = useState("");
  const { input } = useParams();

  useEffect(() => {
    const updatedOutput = input
      ? input.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "D")
      : "";

    setOutputValue(updatedOutput);
  }, [input]);

  return (
    <div className="container">
      <h1>Output :</h1>
      <input type="text" className="input" value={outputValue} readOnly />
    </div>
  );
};

export default Output;
