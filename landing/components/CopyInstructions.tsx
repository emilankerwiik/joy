"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

const SKILL_URL = "github.com/emilankerwiik/joy/x402-payments";

export default function CopyInstructions() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SKILL_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-btn group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all animate-pulse-glow"
    >
      {copied ? (
        <>
          <Check className="w-5 h-5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Terminal className="w-5 h-5" />
          <span>Copy Skill URL</span>
          <Copy className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
        </>
      )}
    </button>
  );
}

export function CopyInstructionsCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SKILL_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Add to Cursor in one click
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Open Cursor Settings, go to Rules, click Add Rule, select Remote Rule (Github),
              and paste this URL:
            </p>

            {/* URL display and copy */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex-1 max-w-lg w-full">
                <div className="code-block flex items-center justify-between px-4 py-3">
                  <code className="text-emerald-400 text-sm md:text-base truncate">
                    {SKILL_URL}
                  </code>
                  <button
                    onClick={handleCopy}
                    className="flex-shrink-0 ml-4 p-2 rounded-md hover:bg-slate-700 transition-colors"
                    aria-label="Copy URL"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Instructions steps */}
            <div className="mt-8 grid sm:grid-cols-4 gap-4 text-sm text-slate-400">
              <div className="p-3 rounded-lg bg-slate-800/50">
                <span className="text-blue-400 font-bold">1.</span> Open Cursor Settings
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50">
                <span className="text-blue-400 font-bold">2.</span> Go to Rules
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50">
                <span className="text-blue-400 font-bold">3.</span> Add Rule → Remote
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50">
                <span className="text-blue-400 font-bold">4.</span> Paste URL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
