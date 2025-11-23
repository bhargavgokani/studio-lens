export default function Testimonials() {
  const testimonials = [
    {
      quote: "The quality and attention to detail are unmatched. Every piece feels premium.",
      author: "Sarah M.",
    },
    {
      quote: "I love the minimalist aesthetic. Their pieces work beautifully together.",
      author: "James L.",
    },
    {
      quote: "Finally, a brand that prioritizes timeless design over trends.",
      author: "Elena R.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border border-gray-200">
              <p className="font-serif text-lg mb-6 leading-relaxed">
                <span className="text-3xl text-gray-300 mr-2">"</span>
                {testimonial.quote}
              </p>
              <p className="text-sm font-medium text-gray-600">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
