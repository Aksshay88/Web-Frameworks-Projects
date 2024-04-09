// Summary.js
import React from "react";

function Summary({ expenses }) {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${total}</p>
    </div>
  );
}

export default Summary;
