export function SecondaryHero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/elderly-person-receiving-help-and-care.jpg')",
        }}
      />
      <div className="relative container mx-auto px-4 text-center">
        <p className="text-lg mb-4 opacity-90">Let's Begin More</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Welcome to Alone NGO Charity Organization
          <br />
          Helping Poor Community.
        </h2>
        <p className="text-xl mb-8 opacity-90">Delivering help and hope to children</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium">
            DONATE NOW
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 font-medium transition-colors">
            APPLY FOR VOLUNTEER
          </button>
        </div>
      </div>
    </section>
  )
}
