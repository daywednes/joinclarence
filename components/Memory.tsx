export function Memory() {
  const items = ["Home", "Auto", "Business", "Life", "Claims", "Renewals"];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h5 className="text-5xl font-semibold mb-6 tracking-tight">
        I remember so you don&apos;t have to
      </h5>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Clarence tracks renewals, policies, and coverage details. When something
        changes, I&apos;ll tell you. When you can save, I&apos;ll show you.
      </p>
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-gray-200 bg-white py-4 text-gray-700 font-medium"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

