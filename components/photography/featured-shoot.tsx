"use client"

export default function FeaturedShoot() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-[500px] overflow-hidden">
            <img
              src="/featured-photoshoot-editorial-style.jpg"
              alt="Featured shoot"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-accent uppercase tracking-widest text-sm mb-4">Featured Shoot</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Urban Fashion Editorial</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A striking collaboration capturing the essence of modern urban fashion. This shoot combines natural
              lighting with architectural elements to create visually compelling imagery that tells a story.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors gap-2 font-semibold"
            >
              View Full Shoot →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
