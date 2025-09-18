export function SDGSection() {
  const goals = [
    {
      title: "No\nPoverty",
      icon: "/humain.svg",
    },
    {
      title: "Quality\nEducation",
      icon: "/cerveau.svg",
    },
    {
      title: "Clean Water\nand Save life",
      icon: "/eau.svg",
    },
    {
      title: "Good Health\nand Care.",
      icon: "/medoc.svg",
    },
    {
      title: "Partnerships\nFor the Goals",
      icon: "/money.svg",
    },
    {
      title: "Zero\nHunger",
      icon: "/burger.svg",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Sustainable Development Goals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {goals.map((goal, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img src={goal.icon} alt={goal.title.replace(/\n/g, " ")} className="h-12" />
              </div>
              <h3 className="font-medium text-sm text-gray-700 whitespace-pre-line leading-tight">{goal.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
