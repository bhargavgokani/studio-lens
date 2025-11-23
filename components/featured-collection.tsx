export default function FeaturedCollection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/lifestyle-fashion-photography-editorial.jpg"
              alt="Featured collection"
              className="w-full h-96 md:h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Heritage Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Heritage Collection draws inspiration from timeless design principles and sustainable craftsmanship.
              Each piece is meticulously crafted to stand the test of time, combining classic silhouettes with
              contemporary minimalism.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We believe in quality over quantity. Every garment is designed to be mixed, matched, and worn for years to
              come.
            </p>
            <button className="px-6 py-3 bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
