import React from 'react';

const TransactionForm = ({ newTransaction, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Description:
        <input type="text" name="description" value={newTransaction.description} onChange={onInputChange} />
      </label>

      <label>
        Amount:
        <input type="text" name="amount" value={newTransaction.amount} onChange={onInputChange} />
      </label>

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
