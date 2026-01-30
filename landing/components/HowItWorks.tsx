"use client";

import { Settings, Wallet, Compass, Zap } from "lucide-react";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Configure thirdweb API key",
    description:
      "Get your secret key from thirdweb dashboard and set the THIRDWEB_SECRET_KEY environment variable.",
    code: "export THIRDWEB_SECRET_KEY='your-key-here'",
  },
  {
    icon: Wallet,
    number: "02",
    title: "Create or connect wallet",
    description:
      "The agent creates a server wallet using a unique identifier. Fund it with USDC and ETH for gas.",
    code: "npx ts-node scripts/create-wallet.ts",
  },
  {
    icon: Compass,
    number: "03",
    title: "Discover x402 services",
    description:
      "List available services like Browserbase and Firecrawl that accept x402 micropayments.",
    code: "npx ts-node scripts/list-services.ts",
  },
  {
    icon: Zap,
    number: "04",
    title: "Make payments automatically",
    description:
      "Wrap API calls with fetchWithPayment. The x402 protocol handles payment negotiation automatically.",
    code: "npx ts-node scripts/fetch-with-payment.ts --url <api-url>",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From setup to payment in minutes
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get your AI agents making payments with just a few steps.
            No complex integrations required.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-slate-900/30 border border-slate-800"
            >
              {/* Step number and icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="md:hidden">
                  <span className="text-5xl font-bold text-slate-800">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <span className="hidden md:block text-3xl font-bold text-slate-800">
                    {step.number}
                  </span>
                </div>
                <p className="text-slate-400 mb-4">{step.description}</p>
                <div className="code-block px-4 py-3 text-sm">
                  <code className="text-emerald-400">{step.code}</code>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[2.5rem] top-[5.5rem] w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-slate-700 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
