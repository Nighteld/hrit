export default function Events() {
  const events = [
    {
      title: "Moot Court 2081",
      date: "January 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Science & Social Exhibition",
      date: "January 20, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Political Discussion",
      date: "January 25, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#005B7F] mb-8">Important Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

