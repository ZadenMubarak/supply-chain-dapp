import React, { useState, useEffect } from 'react';
import './TransactionHistory.css';
import Modal from './Modal';

const transactions1 = {
    product:"pants",
    quantity:"500",
    date:"2022/5/6"
}

function TransactionHistory() {
  // State to store the transaction history
  const [transactions, setTransactions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch the transaction history from the backend
  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="transactions-container">
      <button className='openModal'
      onClick={
        () => {
          setModalOpen(true);
        }
      }
      >View recent receipt</button>
      <h1 className="page-title">Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th style={{"width":"300px"}}>Product :</th>
            <th style={{"width":"300px"}}>Quantity :</th>
            <th style={{"width":"300px"}}>Date :</th>
          </tr>
        </thead>
        <br/>
        <div className='hisdiv'>
          <th>Liqui Fruit --Breakfast punch</th>
          <th>400 Boxes</th>
          <th>2023/01/29</th>
        </div>

        <div className='hisdiv1'>
          <th>Liqui Fruit --Orange</th>
          <th>230 Boxes</th>
          <th>2023/01/02</th>
        </div>

        <div className='hisdiv2'>
          <th>Coca Cola</th>
          <th>300 Boxes</th>
          <th>2023/02/04</th>
        </div>

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
      {modalOpen && <Modal setOpenModal={setModalOpen}/>}
    </div>
  );
}

export default TransactionHistory;
