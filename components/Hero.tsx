import { QueryBox } from "./QueryBox";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center" id="start">
      <h1 className="text-6xl font-semibold mb-6 tracking-tight">
        Hey, I&apos;m Clarence
      </h1>
      <p className="text-2xl text-gray-700 mb-6">
        Your private, personal AI insurance broker
      </p>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        I help you find better coverage, manage renewals, and save time. No
        calls, no paperwork, no stress.
      </p>
      <div className="mx-auto max-w-3xl">
        <QueryBox />
      </div>
      <p className="mt-3 text-sm text-gray-400">
        Trusted by brokers and policyholders nationwide
      </p>
    </section>
  );
}

