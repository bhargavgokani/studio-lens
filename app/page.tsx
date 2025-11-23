"use client"

import Header from "@/components/photography/header"
import Hero from "@/components/photography/hero"
import Portfolio from "@/components/photography/portfolio"
import Services from "@/components/photography/services"
import FeaturedShoot from "@/components/photography/featured-shoot"
import About from "@/components/photography/about"
import Testimonials from "@/components/photography/testimonials"
import Contact from "@/components/photography/contact"
import Footer from "@/components/photography/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <FeaturedShoot />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
