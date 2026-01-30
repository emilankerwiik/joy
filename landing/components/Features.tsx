"use client";

import {
  CreditCard,
  Wallet,
  Globe,
  Search,
  Layers,
  DollarSign,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Automatic Payments",
    description:
      "x402 protocol automatically handles 402 Payment Required responses. No manual intervention needed.",
  },
  {
    icon: Wallet,
    title: "Wallet Management",
    description:
      "Create and manage server wallets via thirdweb API. Same identifier always returns the same wallet.",
  },
  {
    icon: Globe,
    title: "Browserbase Integration",
    description:
      "Spin up cloud browser sandboxes for web automation, scraping, and testing with pay-per-session pricing.",
  },
  {
    icon: Search,
    title: "Firecrawl Integration",
    description:
      "Pay-per-scrape web extraction. Search and crawl websites with structured data output.",
  },
  {
    icon: Layers,
    title: "Multi-chain Support",
    description:
      "Payments work on Base, Arbitrum, and 170+ EVM chains. Low fees on L2 networks.",
  },
  {
    icon: DollarSign,
    title: "USDC Payments",
    description:
      "Stablecoin-based payments mean no volatility. Know exactly what you are spending.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium mb-3">For AI-powered workflows</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything agents need to pay
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A complete toolkit for enabling autonomous payments in your AI agents.
            From wallet creation to transaction execution.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
