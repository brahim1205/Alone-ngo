import { Button } from "@/components/ui/button"

export function EventsSection() {
  const events = [
    {
      title: "Children, Helping",
      subtitle: "Use Hashtags To Support Online",
      location: "United States",
      date: "07 Mar 2026",
      image: "/children-helping-in-community-volunteer-work.jpg",
    },
    {
      title: "Children, Donation",
      subtitle: "Use Hashtags To Support Online",
      location: "United States",
      date: "06 Oct 2025",
      image: "/people-organizing-donation-boxes-for-charity.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">We Are In A Mission</h2>
            <h3 className="text-3xl font-bold mb-6">
              Explore Our
              <br />
              Upcoming Events
            </h3>
            <Button className="bg-green-600 hover:bg-green-700 text-white">MORE EVENTS</Button>
          </div>

          <div className="lg:w-2/3 space-y-6">
            {events.map((event, index) => (
              <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <span className="text-orange-500 font-medium">{event.title}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{event.subtitle}</h4>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 font-medium">EVENT IN:</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 font-medium">DATE:</span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
