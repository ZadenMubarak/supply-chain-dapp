import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import * as solanaWeb3 from '@solana/web3.js'

const inventory = {
  'Product A': 10,
  'Product B': 20,
  'Product C': 5
};


function Dashboard() {
  // State to store the current inventory levels
  const [inventory, setInventory] = useState({});

  // Fetch the current inventory levels from the backend
  useEffect(() => {
    fetch('/api/inventory')
      .then(res => res.json())
      .then(data => setInventory(data));
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="page-title">Supply Chain Dashboard</h1>
      <div className="inventory-container">
        <h2>Inventory Levels</h2>
        <table>
          <thead>
            <tr>
              <th style={{'border-bottom':'1px solid navy'}}>Product</th>
              <th style={{'border-bottom':'1px solid navy'}}>Current Level</th>
              
              
            </tr>
          </thead>
          <tbody>
            {Object.keys(inventory).map((product, index) => (
              <tr key={index}>
                <td>{product}</td>
                <td>{inventory[product]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {console.log(solanaWeb3)}
      {console.log(solanaWeb3)}
      {console.log('solanaWeb3')}
      {console.log(solanaWeb3)}
    </div>
  );
}

export default Dashboard;
