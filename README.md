# Neighborhood — Solana Crypto Launchpad

Neighborhood is a Solana-focused launchpad prototype for onboarding, vetting, and listing new token projects.

## Features in this prototype

- Founder submission form with required project details
- Multi-stage vetting workflow (KYC, board review, governance vote)
- Token metrics dashboard and milestone tracker
- Solana launch configuration for sale, vesting, and liquidity-lock settings
- Revenue and fee calculator for launchpad operations

## Stack

- Vanilla HTML/CSS/JavaScript (single-page DApp prototype)
- Wallet integration scaffold for Solana wallets (Phantom-ready stubs)
- JSON-based in-memory store for launchpad project entries

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Notes

This is a product-level prototype UI and workflow simulation. It does not deploy on-chain programs yet; however, it models the architecture and user journey needed for a production implementation on Solana.
