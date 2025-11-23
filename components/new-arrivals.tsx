export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Silk Minimalist Blouse",
      description: "Premium silk in ivory white",
      image: "/womens-silk-blouse-minimal-style.jpg",
    },
    {
      id: 2,
      name: "Tailored Linen Shirt",
      description: "Crisp linen in natural beige",
      image: "/mens-linen-shirt.jpg",
    },
    {
      id: 3,
      name: "Structured Wool Coat",
      description: "Classic tailoring in charcoal",
      image: "/wool-coat-elegant.jpg",
    },
    {
      id: 4,
      name: "Modern Trousers",
      description: "High-waist cut in stone grey",
      image: "/high-waist-trousers.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16">New Arrivals</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative h-64 md:h-80 overflow-hidden mb-4 bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-lg font-light mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 border border-foreground text-foreground font-medium text-sm hover:bg-foreground hover:text-background transition-colors">
            View All New Arrivals
          </button>
        </div>
      </div>
    </section>
  )
}
