"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-serif text-2xl font-bold">Lens Studio</div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm hover:text-accent transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
          Book a Photoshoot
        </Button>
      </div>
    </header>
  )
}
