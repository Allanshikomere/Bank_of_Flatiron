import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionList.js";
import Search from "./Search";
import TransactionForm from "./TransactionForm";

function AccountContainer() {
  const [query, setQuery] = useState("");

  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3001/transactions"
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
      <TransactionForm />
      <TransactionsList data={search(transaction)} />
    </div>
  );
}

export default AccountContainer;