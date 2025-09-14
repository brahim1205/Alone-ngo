import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function NewsSection() {
  const news = [
    {
      date: "MAY 14, 2025",
      comments: "0",
      title: "Sees boom in younger volunteers following pandemic",
      author: "By Bearsthemes",
      image: "/young-volunteers-helping-community.jpg",
    },
    {
      date: "MAY 11, 2025",
      comments: "0",
      title: "Breaking Barriers: Empowering Women in Sports",
      author: "By Bearsthemes",
      image: "/women-participating-in-sports-empowerment.jpg",
    },
    {
      date: "MAY 03, 2025",
      comments: "0",
      title: "Summit to focus on responsible use of AI in fundraising",
      author: "By Bearsthemes",
      image: "/ai-technology-fundraising-summit.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">We Are In A Mission</h2>
          <h3 className="text-2xl font-semibold text-primary mb-6">Explor Our News & Updates</h3>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Button variant="outline" size="sm" className="p-2 bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-lg font-semibold">DON</span>
            <Button variant="outline" size="sm" className="p-2 bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <Button variant="outline" className="font-semibold bg-transparent">
            MORE UPDATES
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-primary font-semibold mb-2">
                  <span>{article.date}</span>
                  <span>{article.comments}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 text-balance leading-tight">{article.title}</h4>
                <div className="text-sm text-muted-foreground">{article.author}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
