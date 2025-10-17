"use client";

import { useState } from "react";

export function CTA() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("CTA submit:", query);
      alert(`Let's get started with: "${query}"`);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center bg-gray-50 rounded-3xl my-12">
      <h6 className="text-5xl font-semibold mb-6 tracking-tight">
        Let&apos;s make insurance simple
      </h6>
      <p className="text-lg text-gray-600 mb-10">
        Start your free coverage check. It takes 60 seconds.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl flex flex-col sm:flex-row gap-4 justify-center"
      >
        <input
          className="flex-1 rounded-full border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#0057d9]"
          placeholder="Ask me anything about your insurance"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-full bg-[#0057d9] px-8 py-4 text-white font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Get Started
        </button>
      </form>
      <p className="mt-3 text-sm text-gray-400">
        No fees. No jargon. Just clarity.
      </p>
    </section>
  );
}

