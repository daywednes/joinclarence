export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          We acquire top-performing insurance agencies
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Fast, simple, and fair valuations. Get your offer in 7 days with no broker fees and seamless transition support. Post-acquisition, we use AI-powered insurance software to boost your sales performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('lead-form')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Request an Offer
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg border-2 border-blue-600 transition-colors"
          >
            See How It Works
          </button>
        </div>
      </div>
    </section>
  )
}