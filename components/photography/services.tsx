"use client"

import { Card } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Timeless documentation of your special day with artistic direction and candid moments.",
    icon: "💒",
  },
  {
    id: 2,
    title: "Portrait Sessions",
    description: "Professional headshots, family portraits, and personal branding photography.",
    icon: "👤",
  },
  {
    id: 3,
    title: "Product Shoots",
    description: "High-quality commercial photography for e-commerce and marketing campaigns.",
    icon: "📦",
  },
  {
    id: 4,
    title: "Event Coverage",
    description: "Complete documentation of corporate events, conferences, and celebrations.",
    icon: "🎉",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive photography solutions tailored to your unique needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="p-8 hover:shadow-lg transition-shadow duration-300 border-border bg-background"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-serif text-xl mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
