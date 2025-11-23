"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Join Our Style Community</h2>
        <p className="text-gray-600 mb-10">Be the first to know about new drops and trends.</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-foreground bg-white"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {submitted && <p className="mt-4 text-sm text-gray-600">Thank you for subscribing!</p>}
      </div>
    </section>
  )
}
