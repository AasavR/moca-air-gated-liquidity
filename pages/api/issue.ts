// Server API stub for issuing a credential (MOCK)
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address } = req.body || {};
  if (!address) return res.status(400).json({ error: 'Missing address' });

  // ===== MOCKED RESPONSE =====
  // Replace this block with a real call to Moca Console / Moca API.
  // Use MOCA_SITE_SECRET from env vars for server-side auth.
  const mockCredential = {
    id: 'cred_' + Math.random().toString(36).slice(2,9),
    subject: address,
    type: 'kyc_test',
    claims: { kyc: 'passed', score: 750 },
    issuedAt: new Date().toISOString(),
    proof: { type: 'MOCK_PROOF', signature: '0xMOCKSIG' }
  };

  // Optional: persist to DB for demo (omitted)
  return res.status(200).json({ success: true, credential: mockCredential });
}