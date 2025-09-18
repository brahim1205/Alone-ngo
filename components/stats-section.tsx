import { Card } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    {
      icon: "/humain.svg",
      value: "5960",
      label: "Completed Project",
    },
    {
      icon: "/money.svg",
      value: "3719",
      label: "People we Help",
    },
    {
      icon: "/coeur.svg",
      value: "569",
      label: "Awars Archieved",
    },
  ]

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="w-full bg-green-100 rounded-xl py-10 px-4 flex flex-row justify-center items-center gap-16 overflow-x-auto">
          {/* Texte d'intro à gauche */}
          <div className="flex flex-col items-start min-w-[260px] mr-8">
            <span className="text-2xl md:text-3xl font-bold text-green-900 mb-0 leading-tight">
              Lets Change The
            </span>
            <span className="text-3xl md:text-4xl font-extrabold text-green-900 mb-0 leading-tight">
              World With Humanity
            </span>
            <p className="text-base text-orange-600 whitespace-nowrap">
              Delivering help and hope to children
            </p>
          </div>
          {/* Statistiques */}
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[220px]">
              <div className="flex flex-row items-center gap-4 mb-1">
                <img src={stat.icon} alt={stat.label} className="h-16 w-16" />
                <div className="text-4xl font-bold text-green-700">{stat.value}</div>
              </div>
              <p className="text-base text-gray-700 font-medium text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
