"use client";

export default function WhyThis() {
  return (
    <section id="why-this" className="py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-coral-500 font-medium text-sm mb-3">Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
            I want to be free, Bill!
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            There&apos;s no such thing as free, Will. Come on, less thinking, more swarming.
          </p>
        </div>

        {/* Video */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
          <video
            controls
            className="w-full"
            preload="metadata"
          >
            <source src="/krill.mov" type="video/quicktime" />
            <source src="/krill.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
