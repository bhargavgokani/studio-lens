"use client"

const testimonials = [
  {
    id: 1,
    quote:
      "Lens Studio captured our wedding day perfectly. Every shot was beautifully composed and told our unique story.",
    author: "Sarah & James",
    rating: 5,
  },
  {
    id: 2,
    quote: "Professional, creative, and incredibly easy to work with. The final images exceeded all expectations.",
    author: "Emma Wilson",
    rating: 5,
  },
  {
    id: 3,
    quote: "The attention to detail and artistic direction set this studio apart. Highly recommended for any occasion.",
    author: "Michael Chen",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Client Testimonials</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 border border-border hover:border-accent transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg italic text-foreground mb-4">"{testimonial.quote}"</p>

              {/* Author */}
              <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
