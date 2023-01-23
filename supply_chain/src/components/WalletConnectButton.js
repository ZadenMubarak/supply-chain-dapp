import React, { useState } from 'react';
import { Connection } from '@solana/web3.js';

function WalletConnectButton() {
  // State to store the connection status
  const [isConnected, setIsConnected] = useState(false);

  // Function to handle the connection to the wallet
  const handleConnect = async () => {
    try {
        // Initialize the Connection object
        const connection = new Connection('https://testnet.solana.com');
        // Connect to the wallet
        // await connection.confirmTransaction();
        // Update the connection status
        setIsConnected(true);
    } catch (error) {
        console.error(error);
    }
  }

  // Function to handle the disconnection from the wallet
  const handleDisconnect = async () => {
    try {
        // Initialize the Connection object
        const connection = new Connection('https://testnet.solana.com');
        // Disconnect from the wallet
        await connection.disconnect();
        // Update the connection status
        setIsConnected(false);
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div>
      {isConnected ? (
        <button onClick={handleDisconnect}>Disconnect</button>
      ) : (
        <button onClick={handleConnect}>Connect</button>
      )}
    </div>
  );
}

export default WalletConnectButton;
