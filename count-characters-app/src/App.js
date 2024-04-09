// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    setCharCount(inputText.length);
  };

  return (
    <div className="App">
      <h1>Character Counter</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your text here..."
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
}

export default App;
