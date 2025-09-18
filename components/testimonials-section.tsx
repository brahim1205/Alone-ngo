import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section
      className="py-16 px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/testimonials-background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm text-white/80 mb-2">We Are In A Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Clients
            <br />
            Says About Performance
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl leading-relaxed text-white mb-8">
            "This charity is doing amazing work in rural areas where help is often overlooked. I'm proud to support
            their mission to lift families out of poverty with dignity and care."
          </blockquote>

          <div className="flex items-center justify-center gap-4 mb-8">
            <img src="/smiling-man-profile-photo.png" alt="Zahid R." className="w-15 h-15 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-semibold text-white">— Zahid R.</div>
              <div className="text-orange-400 text-sm">Nairobi</div>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <button className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
