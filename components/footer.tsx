import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">INFORMATION</h4>
            <p className="text-sm text-green-100 leading-relaxed mb-4">
              Dedicated to making a difference, our NGO provides essential support, resources, and hope to vulnerable
              communities around the world.
            </p>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-800 bg-transparent"
            >
              READ MORE
            </Button>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">CONTACT US</h4>
            <div className="space-y-2 text-sm text-green-100">
              <p>Elliott Ave, Parkville VIC 3052,</p>
              <p>Melbourne Canada</p>
              <p>Phone: (+42) 348 952 11</p>
              <p>Email: info@domain.com</p>
            </div>
            <Button className="mt-4 bg-orange-500 hover:bg-orange-600">CONTACT US</Button>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">QUICK LINKS</h4>
            <div className="space-y-2 text-sm text-green-100">
              <p className="hover:text-white cursor-pointer">Get Involved</p>
              <p className="hover:text-white cursor-pointer">Donate Now</p>
              <p className="hover:text-white cursor-pointer">Become a Volunteer</p>
              <p className="hover:text-white cursor-pointer">Careers</p>
              <p className="hover:text-white cursor-pointer">Site Map</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">HIGHLIGHTS</h4>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/people-packing-donation-boxes.jpg"
                alt="People packing donation boxes"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/young-woman-with-donation-box.jpg"
                alt="Young woman with donation box"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/medical-professionals-helping-patients.jpg"
                alt="Medical professionals helping patients"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/elderly-person-receiving-help-and-care.jpg"
                alt="Elderly person receiving help and care"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/children-helping-in-community-volunteer-work.jpg"
                alt="Children helping in community volunteer work"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/smiling-volunteer-woman-in-warehouse-with-donation.jpg"
                alt="Smiling volunteer woman in warehouse with donation"
                className="w-full h-16 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
