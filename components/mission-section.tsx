export function MissionSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
              We Work in More Than
              <br />
              <span className="text-orange-500">7k Countries</span> To
              <br />
              Strengthen Civic Space
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              Empowering communities worldwide by protecting human rights, promoting free expression, and supporting
              active citizen participation. Our work helps ensure that civil society can thrive, speak freely, and shape
              their own future.
            </p>
            <div className="mt-8">
              <img src="/handwritten-signature-in-orange.jpg" alt="Signature" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
