import React from "react";

function Transaction({ item }) {
  return (
    <>
      {item.map((data) => (
        <tr key={data.id}>
          <td>{data.date}</td>
          <td>{data.description}</td>
          <td>{data.category}</td>
          <td>{data.amount}</td>
        </tr>
      ))}
    </>
  );
}

export default Transaction;