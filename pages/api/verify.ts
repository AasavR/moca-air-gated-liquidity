// Server API stub for verifying a credential (MOCK)
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address } = req.body || {};
  if (!address) return res.status(400).json({ error: 'Missing address' });

  // ===== MOCKED VERIFICATION =====
  // Replace with actual verification logic: verify Moca proof / VC signature.
  const verified = true;
  const details = { verifier: 'mock', score: 750 };

  return res.status(200).json({ success: verified, details });
}