export function ValueProp() {
  const carriers = [
    { name: "Travelers", placeholder: true },
    { name: "Nationwide", placeholder: true },
    { name: "Chubb", placeholder: true },
    { name: "Progressive", placeholder: true },
  ];

  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="text-5xl font-semibold mb-6 tracking-tight">
        Smart coverage made simple
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Clarence compares top carriers, explains coverage in plain English, and
        keeps everything in one clean dashboard.
      </p>
      <div className="flex justify-center gap-8 flex-wrap">
        {carriers.map((carrier) => (
          <div
            key={carrier.name}
            className="h-12 px-6 flex items-center justify-center bg-gray-100 rounded-lg opacity-60 font-semibold text-gray-700"
          >
            {carrier.name}
          </div>
        ))}
      </div>
    </section>
  );
}

