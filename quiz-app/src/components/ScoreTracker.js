// components/ScoreTracker.js
import React from "react";

function ScoreTracker({ score, totalQuestions }) {
  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>
        Your Score: {score}/{totalQuestions}
      </p>
    </div>
  );
}

export default ScoreTracker;
