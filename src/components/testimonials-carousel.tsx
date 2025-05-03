
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  content: string
  name: string
  role: string
  program: string
  year: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "My time at this college transformed my career path. The professors were incredibly supportive and the hands-on learning experiences prepared me for the real world. I secured a job at a top firm before graduation!",
    name: "Sarah Johnson",
    role: "Alumni",
    program: "Computer Science",
    year: "Class of 2023",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The research opportunities available to undergraduates are unmatched. I was able to co-author a paper with my professor during my junior year, which opened doors for my graduate studies at MIT.",
    name: "Michael Chen",
    role: "Alumni",
    program: "Biochemistry",
    year: "Class of 2022",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "As a parent, I was impressed by the level of communication from faculty and the support services available to students. My daughter thrived in this nurturing environment and developed both academically and personally.",
    name: "Robert Williams",
    role: "Parent",
    program: "Parent of Psychology Student",
    year: "Class of 2024",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    content:
      "Teaching at this institution has been the highlight of my career. The students are engaged and motivated, and the administration truly values innovative teaching methods and research excellence.",
    name: "Dr. Elena Rodriguez",
    role: "Faculty",
    program: "Professor of Economics",
    year: "Faculty since 2015",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    content:
      "The global study programs changed my perspective on international business. My semester abroad in Tokyo gave me insights I use every day in my current role at a multinational corporation.",
    name: "David Okafor",
    role: "Alumni",
    program: "International Business",
    year: "Class of 2021",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-12 px-4 md:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Voices from Our Community</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from our students, alumni, faculty, and parents about their experiences at our institution.
          </p>
        </div>

        <div className="relative">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative shrink-0">
                  <div className="absolute -top-4 -left-4 text-emerald-600">
                    <Quote className="h-8 w-8" />
                  </div>
                  <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white shadow-md">
                    <AvatarImage
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback className="bg-emerald-100 text-emerald-800 text-xl">
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-slate-700 italic mb-4">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold text-slate-900">{testimonials[currentIndex].name}</p>
                    <p className="text-emerald-600">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-slate-500">
                      {testimonials[currentIndex].program} • {testimonials[currentIndex].year}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-slate-200 hover:bg-emerald-50 hover:text-emerald-600"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-slate-200 hover:bg-emerald-50 hover:text-emerald-600"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
