import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Header() {
  return (
    <header className="w-full">
      {/* Barre de contact */}
      <div className="bg-gray-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="text-gray-600">Phone No: (+42) 348 952 11</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Follow Us:</span>
            <div className="flex gap-2">
              <Facebook className="w-4 h-4 text-gray-600" />
              <Twitter className="w-4 h-4 text-gray-600" />
              <Youtube className="w-4 h-4 text-gray-600" />
              <Instagram className="w-4 h-4 text-gray-600" />
              <Linkedin className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="bg-white border-b py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={"/imgi_1_cts-logo.png"}
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Liens de navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">HOME</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">PAGES</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">BLOG</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">CAUSES</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">SHOP</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">CONTACT</a>
          </div>

          {/* Panier */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                  />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                0
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
