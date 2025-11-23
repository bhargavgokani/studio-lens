"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-serif font-bold tracking-wide">
          ÉLAN
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
            Women
          </Link>
          <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
            Men
          </Link>
          <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
            New Arrivals
          </Link>
          <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
            Collection
          </Link>
          <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
            Sale
          </Link>
        </nav>

        {/* Shop Now Button */}
        <button className="px-5 py-2 bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity">
          Shop Now
        </button>
      </div>
    </header>
  )
}
