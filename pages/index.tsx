'use client';
import React, { useEffect, useState } from 'react';
import WalletConnect from '../components/WalletConnect';
import { initMoca } from '../lib/mocaClient';

export default function Home(){
  const [address, setAddress] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [moca, setMoca] = useState<any>(null);

  useEffect(() => {
    // quick wallet address read from window.ethereum for demo only
    (async () => {
      if ((window as any).ethereum) {
        try {
          const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
          setAddress(accounts[0]);
        } catch(e){}
      }
    })();
    const m = initMoca(process.env.NEXT_PUBLIC_MOCA_SITE_KEY || '');
    setMoca(m);
  }, []);

  async function requestCredential(){
    setStatus('Requesting credential (server)...');
    try {
      const res = await fetch('/api/issue', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({ address })
      });
      const json = await res.json();
      setStatus('Issued (mock): ' + JSON.stringify(json));
    } catch(e){
      setStatus('Error: ' + String(e));
    }
  }

  async function verifyCredential(){
    setStatus('Verifying (server)...');
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({ address })
      });
      const json = await res.json();
      setStatus('Verify (mock): ' + JSON.stringify(json));
    } catch(e){
      setStatus('Error: ' + String(e));
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>AIR — Identity Gated Liquidity (Demo)</h1>
        <p className="muted">A minimal demo to issue & verify mock Moca credentials.</p>

        <div style={{marginTop:12}}>
          <WalletConnect />
        </div>

        <div style={{marginTop:16, display:'flex', gap:10}}>
          <button onClick={requestCredential} disabled={!address}>Request Test Credential</button>
          <button onClick={verifyCredential} disabled={!address}>Verify Credential</button>
        </div>

        <div style={{marginTop:16}}>
          <strong>Status:</strong>
          <div className="card" style={{marginTop:8}}>{status}</div>
        </div>

        <div style={{marginTop:16}}>
          <p><em>Notes:</em> This project ships with mocked server endpoints. Replace with real Moca Console API calls and integrate the Moca JS SDK for production flows.</p>
        </div>
      </div>
    </div>
  );
}