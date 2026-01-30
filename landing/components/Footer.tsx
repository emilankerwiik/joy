"use client";

import { Github, ExternalLink } from "lucide-react";

const links = {
  resources: [
    { name: "Agent Skills Spec", href: "https://agentskills.io/specification" },
    { name: "x402 Protocol", href: "https://x402.org" },
    { name: "thirdweb x402 Docs", href: "https://portal.thirdweb.com/x402" },
  ],
  services: [
    { name: "Browserbase", href: "https://browserbase.com" },
    { name: "Firecrawl", href: "https://firecrawl.dev" },
    { name: "thirdweb", href: "https://thirdweb.com" },
  ],
  tools: [
    { name: "Cursor", href: "https://cursor.com" },
    { name: "Claude Code", href: "https://claude.ai" },
    { name: "GitHub Codex", href: "https://github.com/features/copilot" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">x402 Payments</h3>
            <p className="text-slate-400 text-sm mb-4">
              An open-source Agent Skill for enabling AI agents to make micropayments via the x402 protocol.
            </p>
            <a
              href="https://github.com/emilankerwiik/joy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>emilankerwiik/joy</span>
            </a>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">x402 Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4">Supported Tools</h4>
            <ul className="space-y-3">
              {links.tools.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            Built with the{" "}
            <a
              href="https://agentskills.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Agent Skills
            </a>{" "}
            open standard
          </p>
          <p className="text-slate-500 text-sm">
            MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
