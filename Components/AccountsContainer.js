import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [query, setQuery] = useState("");

  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    let url = "http://localhost:8001/transactions"
    fetch(url)
      .then((r) => r.json())
      .then((data) => setTransaction(data));
  });

  const keys = ["description", "category"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toUpperCase().includes(query))
    );
  };
  return (
    <div>
      <Search input={setQuery} />
      <AddTransactionForm />
      <TransactionsList data={search(transaction)} />
    </div>
  );
}

export default AccountContainer;