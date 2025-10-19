# AIR — Moca Proof of Build (Starter)

This repository is a starter Next.js TypeScript project to demo **Identity-Gated Liquidity** using Moca Network (AIR credentials).
It's scaffolded for a hackathon: quick to run locally, easy to deploy to Vercel, and contains server API stubs to integrate with Moca Console.

## What this contains
- Next.js Typescript frontend (pages/)
- Wallet connect UI using `wagmi` (skeleton)
- Server API stubs (`/api/issue`, `/api/verify`) — mocked responses for the hackathon demo
- Instructions to replace mocks with real Moca Console API calls and env vars

## Quick start (local)
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill values
3. `npm run dev` — open http://localhost:3000

## Deploy
1. Push to GitHub
2. Import repo on Vercel
3. Set environment variables in Vercel (see `.env.example`)
4. Deploy

## TODO (for integration with real Moca APIs)
- Replace mock logic in `pages/api/issue.ts` and `pages/api/verify.ts` with real Moca Console endpoints.
- Add Moca JS client in client code and follow their SDK flow for issuance & verification.
- Secure server-side keys (MOCA_SITE_SECRET) — never expose in client.

## Files to check
- `pages/index.tsx` — main UI and demo flows
- `pages/api/issue.ts` — server-side issuance stub (mock)
- `lib/mocaClient.ts` — client-side init helper (placeholder)