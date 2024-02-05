import React, { useState } from "react";

function TransactionForm() {
  const [transactionData, setTransactionData] = useState({
    data: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setTransactionData({
      ...transactionData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    });
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} required />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={handleChange}
            required
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;