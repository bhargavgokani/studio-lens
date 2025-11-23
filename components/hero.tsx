export default function Hero() {
  return (
    <section className="pt-20 pb-0">
      <div className="relative h-screen/2 md:h-screen/1.5 flex flex-col items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <img
          src="/luxury-fashion-model-elegant-clothing-aesthetic.jpg"
          alt="Hero fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6 text-white drop-shadow-lg">
            Redefining Modern Fashion
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 drop-shadow font-light">
            Timeless elegance meets contemporary design in our carefully curated collections
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-background text-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              Explore Collection
            </button>
            <button className="px-8 py-3 border border-white text-white font-medium text-sm hover:bg-white/10 transition-colors">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
