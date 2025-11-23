"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const newScale = 1 + scrolled * 0.0003
      setScale(Math.min(newScale, 1.1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center pt-16">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: 'url("/professional-photography-studio-setup-cinematic.jpg")',
          transform: `scale(${scale})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 text-balance">
          Capturing Stories Through the Lens
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 font-light">
          Premium photography services for weddings, portraits, fashion, and events
        </p>
        <a href="#portfolio" className="inline-block">
          <Button size="lg" className="bg-white text-foreground hover:bg-white/90 font-semibold">
            View Portfolio
          </Button>
        </a>
      </div>
    </section>
  )
}
