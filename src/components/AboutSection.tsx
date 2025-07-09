export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Clarence AI</h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Clarence AI Rollup is a technology-driven insurance agency acquisition platform that combines artificial intelligence with deep industry expertise. Founded by a team of insurance veterans and AI specialists, we&apos;re revolutionizing how insurance agencies are valued and acquired.
        </p>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Our mission is to provide fair, transparent, and efficient acquisition services that benefit both agency owners and the broader insurance ecosystem. Backed by leading investors and powered by proprietary AI technology, we&apos;re building the future of insurance agency consolidation.
        </p>
        <div className="flex justify-center items-center space-x-8 text-gray-400">
          <div className="text-center">
            <div className="text-sm font-medium">Backed by</div>
            <div className="text-lg font-semibold">Top Tier VCs</div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-sm font-medium">Founded by</div>
            <div className="text-lg font-semibold">Industry Veterans</div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-sm font-medium">Powered by</div>
            <div className="text-lg font-semibold">AI Technology</div>
          </div>
        </div>
      </div>
    </section>
  )
}