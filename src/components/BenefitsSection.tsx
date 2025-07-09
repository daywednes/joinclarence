export default function BenefitsSection() {
  const benefits = [
    {
      icon: '⚡',
      title: '7-Day Close',
      description: 'From initial submission to final offer in just one week'
    },
    {
      icon: '💰',
      title: 'No Broker Fees',
      description: 'Direct acquisition with no middleman costs'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Sales Growth',
      description: 'Post-acquisition AI software to boost sales performance'
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ✓ {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}