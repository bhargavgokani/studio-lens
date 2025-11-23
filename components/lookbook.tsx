export default function Lookbook() {
  const images = [
    "/tall-vertical-fashion-photography-woman.jpg",
    "/tall-vertical-fashion-photo-minimal-outfit.jpg",
    "/tall-vertical-lifestyle-fashion-imagery.jpg",
    "/tall-vertical-editorial-fashion-portrait.jpg",
    "/tall-vertical-luxury-fashion-styling.jpg",
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16">Editorial Lookbook</h2>

        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4 min-w-min">
            {images.map((image, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-48 md:w-64 h-96 md:h-[500px] overflow-hidden cursor-pointer"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Lookbook ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
