import React, { useState, useEffect } from 'react';
import './TransactionHistory.css';

const transactions1 = {
    product:"pants",
    quantity:"500",
    date:"2022/5/6"
}

function TransactionHistory() {
  // State to store the transaction history
  const [transactions, setTransactions] = useState([]);

  // Fetch the transaction history from the backend
  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="transactions-container">
      <h1 className="page-title">Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transactions1.product}</td>
              <td>{transactions1.quantity}</td>
              <td>{transactions1.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
