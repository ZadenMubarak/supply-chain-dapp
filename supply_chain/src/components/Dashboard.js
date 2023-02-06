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
              <th style={{'border-bottom':'1px solid navy', "width":"400px"}}>Product :</th>
              <th style={{'border-bottom':'1px solid navy', "width":"400px"}}>Current Level :</th>
              <br/>            
              
            </tr>
          </thead>
          <br/>
          <div className='invl'>
            <th className='textl'>Liqui Fruit orange</th>
            <th className='skul'>630 Total Boxes of 1L</th>
          
          </div>

          <div className='inv2'>
            <th className='text2'>Coca Cola</th>
            <th className='sku2'>300 Total Boxes of 2L</th>
          
          </div>

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
