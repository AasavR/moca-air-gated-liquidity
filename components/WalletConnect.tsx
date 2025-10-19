'use client';
import React from 'react';
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function WalletConnect(){
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      <div>Connected: {isConnected ? address : 'No'}</div>
      <div style={{display:'flex',gap:8}}>
        {!isConnected && <button onClick={() => connect()}>Connect Wallet</button>}
      </div>
    </div>
  );
}