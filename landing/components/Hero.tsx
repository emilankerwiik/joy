"use client";

import { Zap, Github, ArrowRight } from "lucide-react";
import CopyInstructions from "./CopyInstructions";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <Zap className="w-4 h-4" />
          <span>Open Standard for AI Agent Payments</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Give AI agents the{" "}
          <span className="gradient-text">power to pay</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Enable your AI agents to make micropayments via the x402 protocol.
          Purchase browser sessions, scrape websites, and access premium APIs - all with automatic crypto payments.
        </p>

        {/* CTA section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CopyInstructions />
          
          <a
            href="https://github.com/emilankerwiik/joy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 transition-all"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>

        {/* Supported tools */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm text-slate-500 mb-4">Works with leading AI development tools</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <span className="font-medium">Cursor</span>
            <span className="text-slate-600">|</span>
            <span className="font-medium">Claude Code</span>
            <span className="text-slate-600">|</span>
            <span className="font-medium">Codex</span>
            <span className="text-slate-600">|</span>
            <span className="font-medium">Gemini CLI</span>
            <span className="text-slate-600">|</span>
            <span className="font-medium">VS Code</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-slate-500 rotate-90" />
        </div>
      </div>
    </section>
  );
}
