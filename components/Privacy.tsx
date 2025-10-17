export function Privacy() {
  return (
    <section id="privacy" className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h6 className="text-5xl font-semibold mb-4 tracking-tight">
        Private. Secure. Always.
      </h6>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Clarence uses bank-level encryption and only partners with trusted,
        licensed brokers. Your info is yours — and it stays that way.
      </p>
      <div className="mx-auto h-56 w-80 rounded-3xl border border-gray-200 bg-gray-50 flex items-center justify-center">
        <svg
          className="w-16 opacity-60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      </div>
    </section>
  );
}

