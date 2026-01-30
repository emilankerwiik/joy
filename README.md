# x402 Payments - Agent Skill

An open-source [Agent Skill](https://agentskills.io) that enables AI agents to make micropayments via the [x402 protocol](https://x402.org).

## What is this?

This skill teaches AI agents how to:
- Create and manage crypto wallets
- Fund wallets with USDC and ETH for gas
- Make automatic micropayments when APIs return 402 Payment Required
- Interact with x402-compatible services like Browserbase and Firecrawl

## Quick Install

Add this skill to Cursor:

1. Open **Cursor Settings** (Cmd+Shift+J / Ctrl+Shift+J)
2. Navigate to **Rules**
3. Click **Add Rule** → **Remote Rule (Github)**
4. Paste: `github.com/emilankerwiik/joy/x402-payments`

## Repository Structure

```
joy/
├── x402-payments/          # Agent Skill
│   ├── SKILL.md            # Main skill instructions
│   ├── scripts/            # Executable TypeScript scripts
│   │   ├── fetch-with-payment.ts
│   │   ├── create-wallet.ts
│   │   ├── check-balance.ts
│   │   ├── list-services.ts
│   │   └── fund-wallet.ts
│   ├── references/         # Detailed documentation
│   │   ├── API-REFERENCE.md
│   │   └── SERVICES.md
│   └── assets/
│       └── config-template.json
├── landing/                # Next.js landing page
└── README.md
```

## Prerequisites

1. **thirdweb API Key**: Get one at [thirdweb.com/dashboard](https://thirdweb.com/dashboard)
2. **USDC on Base**: For making payments
3. **ETH on Base**: For gas fees

## Usage

### 1. Set up environment

```bash
export THIRDWEB_SECRET_KEY='your-secret-key'
```

### 2. Create a wallet

```bash
cd x402-payments
npx ts-node scripts/create-wallet.ts
```

### 3. Fund your wallet

Send USDC and ETH to the wallet address on Base chain.

### 4. Make payments

```bash
npx ts-node scripts/fetch-with-payment.ts \
  --url "https://api.browserbase.com/v1/sessions" \
  --method "POST" \
  --body '{"browserSettings": {"viewport": {"width": 1920, "height": 1080}}}'
```

## Supported Services

| Service | Description | Documentation |
|---------|-------------|---------------|
| [Browserbase](https://browserbase.com) | Cloud browser automation | [x402 Integration](https://docs.browserbase.com/integrations/x402/introduction) |
| [Firecrawl](https://firecrawl.dev) | Web scraping API | [x402 Search](https://docs.firecrawl.dev/x402/search) |

## How x402 Works

1. Agent makes request to x402-compatible API
2. API returns `402 Payment Required` with payment requirements
3. The skill automatically signs a payment using your wallet
4. Request is retried with payment header
5. API verifies payment and returns the response

## Links

- [Agent Skills Specification](https://agentskills.io/specification)
- [x402 Protocol](https://x402.org)
- [thirdweb x402 Documentation](https://portal.thirdweb.com/x402)

## License

MIT
