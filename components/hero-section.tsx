import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/diverse-hands-reaching-out-to-help-each-other--com.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-purple-900/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h2 className="text-lg md:text-xl font-normal mb-4 tracking-wider">Raise Your Hand</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          We Help All People In Need
          <br />
          Around The World
        </h1>
        <p className="text-lg md:text-xl mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
          From providing food, shelter, and medical aid to supporting education and disaster relief, we work tirelessly
          to uplift lives and restore hope across borders.
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
          DONATE NOW
        </Button>
      </div>
    </section>
  )
}
