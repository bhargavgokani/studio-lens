"use client"

import { useState } from "react"

const categories = ["All", "Weddings", "Portraits", "Fashion", "Events"]

const portfolioItems = [
  {
    id: 1,
    category: "Weddings",
    image: "/elegant-wedding-couple.png",
  },
  {
    id: 2,
    category: "Portraits",
    image: "/professional-portrait.png",
  },
  {
    id: 3,
    category: "Fashion",
    image: "/fashion-photography-model.jpg",
  },
  {
    id: 4,
    category: "Events",
    image: "/event-photography-celebration.jpg",
  },
  {
    id: 5,
    category: "Weddings",
    image: "/wedding-ceremony.png",
  },
  {
    id: 6,
    category: "Portraits",
    image: "/studio-portrait-lighting.jpg",
  },
  {
    id: 7,
    category: "Fashion",
    image: "/fashion-lookbook-photography.jpg",
  },
  {
    id: 8,
    category: "Events",
    image: "/corporate-event-networking.png",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of our finest work, showcasing diverse photographic styles and moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm transition-all duration-200 border ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-border hover:border-accent text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden bg-muted ${
                index === 2 || index === 5 ? "md:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white font-serif text-xl">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
