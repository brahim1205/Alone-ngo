import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProductShop() {
  const products = [
    {
      name: "Reusable Collection",
      price: "£15.00-£20.00",
      originalPrice: null,
      image: "/reusable-coffee-mug-collection.jpg",
      sale: true,
      badges: ["Handmade", "Eco-Friendly"],
    },
    {
      name: "Fair-Trade Coffee Beans",
      price: "£18.00",
      originalPrice: "£20.00",
      image: "/fair-trade-coffee-beans-package.jpg",
      sale: true,
      badges: [],
    },
    {
      name: "Aloe Vera Eco Hand Soap",
      price: "£5.00",
      originalPrice: null,
      image: "/aloe-vera-eco-hand-soap.jpg",
      sale: false,
      badges: ["Natural"],
    },
    {
      name: "Natural Lip Balm",
      price: "£7.00",
      originalPrice: null,
      image: "/natural-organic-lip-balm.jpg",
      sale: false,
      badges: ["Natural", "Premium Product"],
    },
  ]

  const brandLogos = [
    "DEERREED",
    "ORIGINAL CO",
    "SHOPNAME",
    "quality product",
    "Holiden & Madian",
    "HOSOREN 1991",
    "BUSINESS",
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">We Are In A Mission</h2>
          <h3 className="text-2xl font-semibold text-primary">Product Shop</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                {product.sale && (
                  <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground z-10">Sale!</Badge>
                )}
                <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
                  {product.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-balance">{product.name}</h4>
                <div className="flex items-center gap-2 mb-4">
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through text-sm">{product.originalPrice}</span>
                  )}
                  <span className="font-bold text-primary">{product.price}</span>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-semibold text-muted-foreground">
            {brandLogos.map((logo, index) => (
              <div key={index} className="px-4 py-2 border rounded-lg bg-background">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
