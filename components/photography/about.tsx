"use client"

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "12+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Awards Won", value: "25+" },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">About Our Studio</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2012, Lens Studio has been at the forefront of contemporary photography, blending technical
              expertise with artistic vision. We believe every moment deserves to be captured with intention and beauty.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our approach combines natural lighting, authentic storytelling, and meticulous attention to detail. We
              work collaboratively with our clients to ensure we capture not just moments, but emotions and memories
              that last a lifetime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-serif text-3xl font-light mb-2">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-[600px] overflow-hidden">
            <img
              src="/photographer-in-studio-professional-portrait.jpg"
              alt="Studio photographer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
