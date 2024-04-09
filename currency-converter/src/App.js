import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates[targetCurrency]);
      })
      .catch((error) => {
        console.error("Error fetching exchange rate:", error);
      });
  }, [baseCurrency, targetCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const convertCurrency = () => {
    return (amount * exchangeRate).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>From:</label>
        <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div>
        <label>To:</label>
        <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div>
        <p>
          Converted Amount: {exchangeRate ? convertCurrency() : "Loading..."}
        </p>
      </div>
    </div>
  );
}

export default App;
