// TransactionForm.js
import React from 'react';

function TransactionForm({ newTransaction, onDescriptionChange, onAmountChange, onAddTransaction }) {
  return (
    <form>
      <label>
        Description:
        <input type="text" value={newTransaction.description} onChange={onDescriptionChange} />
      </label>
      <label>
        Amount:
        <input type="number" value={newTransaction.amount} onChange={onAmountChange} />
      </label>
      <button type="button" onClick={onAddTransaction}>
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
