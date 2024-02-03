// TransactionApp.js
import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';

const TransactionApp = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ date: '', description: '', category: '', amount: 0 });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions') // Update the URL as per your json-server setup
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddTransaction = () => {
    if (newTransaction.description.trim() === '') {
      alert('Please enter a description for the transaction.');
      return;
    }

    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => setTransactions([...transactions, data]))
      .catch((error) => console.error('Error adding transaction:', error));

    setNewTransaction({ date: '', description: '', category: '', amount: 0 });
  };

  const handleDescriptionChange = (event) => {
    setNewTransaction((prevTransaction) => ({ ...prevTransaction, description: event.target.value }));
  };

  const handleAmountChange = (event) => {
    setNewTransaction((prevTransaction) => ({ ...prevTransaction, amount: event.target.value }));
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Transaction App</h1>

      <TransactionForm
        newTransaction={newTransaction}
        onDescriptionChange={handleDescriptionChange}
        onAmountChange={handleAmountChange}
        onAddTransaction={handleAddTransaction}
      />

      <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />

      <TransactionTable transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
};

export default TransactionApp;
