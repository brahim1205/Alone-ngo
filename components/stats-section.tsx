import { Card } from "@/components/ui/card"

export function StatsSection() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lets Change The World With Humanity</h2>
          <p className="text-lg text-orange-600">Delivering help and hope to children</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-white shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">5960</div>
            <p className="text-orange-600 font-medium">Completed Projects</p>
          </Card>
          <Card className="p-8 text-center bg-white shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">3719</div>
            <p className="text-orange-600 font-medium">People We Helped</p>
          </Card>
          <Card className="p-8 text-center bg-white shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">569</div>
            <p className="text-orange-600 font-medium">Awards Achieved</p>
          </Card>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-4">We Are In A Mission</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Explore Our Latest Causes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden shadow-lg">
            <img src="/people-packing-donation-boxes.jpg" alt="Donation packing" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2">Your Small Donation Can Change a Life</h4>
              <p className="text-sm text-orange-600 mb-4">February 14, 2025</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">$120,000</div>
                  <p className="text-sm text-gray-600">Donation Needed</p>
                </div>
                <button className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700">♥</button>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <img src="/young-woman-with-donation-box.jpg" alt="Woman with donation box" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2">A New Album by Rebecca: Help poor people</h4>
              <p className="text-sm text-orange-600 mb-4">February 14, 2025</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">$50,000</div>
                  <p className="text-sm text-gray-600">Donation Needed</p>
                </div>
                <button className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700">♥</button>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <img src="/medical-professionals-helping-patients.jpg" alt="Medical help" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2">South African Pre Primary School Build</h4>
              <p className="text-sm text-orange-600 mb-4">February 14, 2025</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">$32,000</div>
                  <p className="text-sm text-gray-600">Donation Needed</p>
                </div>
                <button className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700">♥</button>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium">
            MORE CAUSES
          </button>
        </div>
      </div>
    </section>
  )
}
