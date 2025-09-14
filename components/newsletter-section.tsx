import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/3">
            <h3 className="text-3xl font-bold mb-2">SUBSCRIBE</h3>
            <h4 className="text-xl text-muted-foreground mb-6">FOR NEWSLETTER</h4>
          </div>

          <div className="lg:w-2/3 flex gap-4 w-full max-w-md">
            <Input placeholder="Your email here..." className="flex-1 bg-white border-gray-300" />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 font-semibold">SUBSCRIBE</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
