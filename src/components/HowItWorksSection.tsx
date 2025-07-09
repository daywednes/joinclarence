export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Submit Your Agency',
      description: 'Provide basic information about your insurance agency through our simple form',
      icon: '📝'
    },
    {
      number: 2,
      title: 'AI-Powered Valuation',
      description: 'Our advanced AI analyzes your agency data to provide an accurate valuation',
      icon: '🤖'
    },
    {
      number: 3,
      title: 'Due Diligence',
      description: 'We conduct thorough due diligence to verify all information and finalize terms',
      icon: '🔍'
    },
    {
      number: 4,
      title: 'Close & Transition',
      description: 'Complete the acquisition with full transition support for seamless handover',
      icon: '🤝'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, transparent process from start to finish</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}