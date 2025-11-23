export default function SustainabilitySection() {
  const pillars = [
    {
      title: "Ethical Materials",
      description: "Sourced from certified suppliers",
      icon: "◆",
    },
    {
      title: "Sustainable Process",
      description: "Carbon-neutral production",
      icon: "◉",
    },
    {
      title: "Timeless Designs",
      description: "Built to last for years",
      icon: "■",
    },
  ]

  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div>
            <img src="/sustainable-fashion-production-ethical-materials.jpg" alt="Sustainability" className="w-full h-80 md:h-96 object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sustainability is at the heart of everything we do. We're committed to creating beautiful fashion
              responsibly, with consideration for our environment and the communities we work with.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-2xl text-gray-400 flex-shrink-0">{pillar.icon}</span>
                  <div>
                    <h3 className="font-serif text-lg font-light mb-1">{pillar.title}</h3>
                    <p className="text-sm text-gray-600">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
