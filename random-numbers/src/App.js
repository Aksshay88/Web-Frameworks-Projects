// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    const randomNum =
      Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    setRandomNumber(randomNum);
  };

  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <div>
        <label htmlFor="min">Min:</label>
        <input
          type="number"
          id="min"
          value={min}
          onChange={(e) => setMin(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="max">Max:</label>
        <input
          type="number"
          id="max"
          value={max}
          onChange={(e) => setMax(parseInt(e.target.value))}
        />
      </div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default App;
