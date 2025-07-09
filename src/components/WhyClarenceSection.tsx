export default function WhyClarenceSection() {
  const features = [
    {
      title: 'Fair & Transparent',
      description: 'No hidden fees or surprises - just honest, straightforward valuations',
      icon: '⚖️'
    },
    {
      title: 'Fast Closings',
      description: 'Complete the entire process in just 7 days from submission to close',
      icon: '⚡'
    },
    {
      title: 'AI-Powered Growth',
      description: 'Post-acquisition AI software implementation to boost sales performance',
      icon: '🚀'
    },
    {
      title: 'Proven Track Record',
      description: 'Trusted by agency owners across the country',
      icon: '🏆'
    }
  ]

  const stats = [
    { number: '50+', label: 'Agencies Acquired' },
    { number: '$200M', label: 'Premiums Managed' },
    { number: '98%', label: 'Owner Satisfaction' }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Clarence AI</h2>
          <p className="text-xl text-gray-600">The trusted partner for insurance agency acquisitions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
          <blockquote className="text-xl text-gray-700 text-center italic mb-4">
            &ldquo;Clarence AI made the acquisition process incredibly smooth. From the initial valuation to the final handover, everything was transparent and professional. The AI-powered software they implemented has already increased our sales by 30%. I couldn&apos;t be happier with the outcome.&rdquo;
          </blockquote>
          <div className="text-center">
            <cite className="text-gray-600 not-italic">– Sarah Mitchell, Former Agency Owner</cite>
          </div>
        </div>
      </div>
    </section>
  )
}