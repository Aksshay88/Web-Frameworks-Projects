// App.js
import React, { useState } from "react";
import Quiz from "./components/Quiz";
import ScoreTracker from "./components/ScoreTracker";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [questions] = useState([
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    // Add more questions here...
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="App">
      <h1>Quiz Application</h1>
      {currentQuestion < questions.length ? (
        <Quiz question={questions[currentQuestion]} onAnswer={handleAnswer} />
      ) : (
        <ScoreTracker score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;
