import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from '../TransactionTable';
import SearchBar from './SearchBar';

const TransactionApp = () => {
  const initialTransactions = [
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Gas', amount: 30 },
    // Add more transactions as needed
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Ensure both description and amount are provided
    if (newTransaction.description.trim() === '' || newTransaction.amount.trim() === '') {
      alert('Please enter both description and amount.');
      return;
    }

    // Create a new transaction object
    const newTransactionObj = {
      id: transactions.length + 1,
      description: newTransaction.description,
      amount: parseFloat(newTransaction.amount),
    };

    // Update the state with the new transaction
    setTransactions([...transactions, newTransactionObj]);

    // Clear the form
    setNewTransaction({ description: '', amount: '' });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Transaction App</h1>

      <TransactionForm
        newTransaction={newTransaction}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />

      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default TransactionApp;
