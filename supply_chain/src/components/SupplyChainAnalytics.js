import React, { useState, useEffect } from 'react';
import './SupplyChainAnalytics.css';
import { Line } from 'react-chartjs-2';

function SupplyChainAnalytics() {
  // State to store the analytics data
  const [analytics, setAnalytics] = useState({});

  // Fetch the analytics data from the backend
  useEffect(() => {
    fetch('/api/analytics')
      .then(res => res.json())
      .then(data => setAnalytics(data));
  }, []);

  const data = {
    labels: analytics.labels,
    datasets: [
      {
        label: 'Inventory Levels',
        data: analytics.data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="analytics-container">
      <h1 className="page-title">Supply Chain Analytics</h1>
      <Line data={data} />
    </div>
  );
}

export default SupplyChainAnalytics;
