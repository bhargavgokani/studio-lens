export default function CategoryHighlights() {
  const categories = [
    {
      name: "Women",
      image: "/womens-fashion-elegant-clothing.jpg",
    },
    {
      name: "Men",
      image: "/mens-fashion-modern-clothing.jpg",
    },
    {
      name: "Accessories",
      image: "/luxury-accessories-minimalist-design.jpg",
    },
  ]

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {categories.map((category) => (
          <div key={category.name} className="relative h-80 md:h-96 group cursor-pointer overflow-hidden">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white font-serif text-3xl font-light">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
