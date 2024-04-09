// components/Quiz.js
import React, { useState } from "react";

function Quiz({ question, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(selectedOption);
    setSelectedOption("");
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <form onSubmit={handleSubmit}>
        {question.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

export default Quiz;
