import { Button } from "@/components/ui/button"

export function HelpGoalSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Help is Our Goal</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At the heart of everything we do is a simple mission: to help those in need.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether it's providing food, shelter, education, or emergency aid, we strive to bring relief, hope, and
              lasting change to individuals and communities around the world.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">MORE ABOUT</Button>
          </div>

          <div className="relative">
            <p className="text-sm text-gray-600 mb-4 text-right">We Are In A Mission</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-right">To Help The Helpless</h3>
            <div className="relative">
              <img
                src="/smiling-volunteer-woman-in-warehouse-with-donation.jpg"
                alt="Volunteer helping with donations"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-orange-700 shadow-lg">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
