"use client";

import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-semibold text-lg text-neutral-900">
          🦐 Openkrill
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#instructions"
            className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
          >
            How to use
          </a>
          <a
            href="#why-this"
            className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
          >
            Roadmap
          </a>
          <a
            href="#how-it-works"
            className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
          >
            How it works
          </a>
          <a
            href="https://portal.thirdweb.com/x402"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
          >
            x402
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/emilankerwiik/openkrill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
