"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "https://hritacademy.edu.np/wp-content/uploads/2023/11/hrit_web11-02-2048x2048.jpg?height=600&width=1200",
    title: "Welcome to HRIT ACADEMY",
    description: "Smart Choice for Smart Students",
  },
  {
    image: "https://hritacademy.edu.np/wp-content/uploads/2023/11/website_new-02-2048x2048.jpg?height=600&width=1200",
    title: "Excellence in Education",
    description: "Shaping Future Leaders",
  },
  {
    image: "https://hritacademy.edu.np/wp-content/uploads/2023/11/hrit_website-02-1529x1536.jpg?height=600&width=1200",
    title: "Excellence in Education",
    description: "Shaping Future Leaders",
  },
  
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  const goToPrevious = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };
  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full   ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl text-center">{slide.description}</p>
            <button className="mt-8 bg-[#FFA500] hover:bg-[#ff9100] text-white font-bold py-3 px-8 rounded-full transition duration-300">
              APPLY NOW
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  )
}

