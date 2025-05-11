"use client"

import { motion } from "framer-motion"
import { Calendar, Tag, ChevronRight, FileText, Trophy, Badge } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useQuery } from "@tanstack/react-query"
import { fetchEventLists } from "@/action/eventAction"



const notices = [
  {
    id: 1,
    title: "Hrit Inter College Legal Quiz Contest 2080",
    date: "JANUARY 10, 2024",
    category: "NOTICE",
    type: "event",
    description:
      "Hrit Academy is thrilled to extend invitation for Hrit Inter College Legal Quiz Contest 2080 organized by Hrit Legal Club taking place on Magh 12, 2080. This event stands as an exceptional opportunity to foster legal knowledge and perspectives.",
    image: "https://hritacademy.edu.np/wp-content/uploads/2023/08/notice_hrit_11_class_start-01-768x768.jpg?height=400&width=600",
  },
  {
    id: 2,
    title: "Result Distribution Program 2080!",
    date: "NOVEMBER 26, 2023",
    category: "UNCATEGORIZED",
    type: "result",
    description:
      "Dear Hritian Parents/ Guardian/ Students, We hope this post finds you well! As per our academic calendar, we're excited to share the academic achievements of our brilliant students as the result of First Terminal Examination 2080. ⭐ We appreciate your cooperation",
    image: "https://hritacademy.edu.np/wp-content/uploads/2023/11/NOtice-Result-Distribution-2080-320x320.jpg?height=400&width=600",
  },
  {
    id: 3,
    title: "Result Distribution Program 2080!",
    date: "NOVEMBER 26, 2023",
    category: "UNCATEGORIZED",
    type: "result",
    description:
      "Dear Hritian Parents/ Guardian/ Students, We hope this post finds you well! As per our academic calendar, we're excited to share the academic achievements of our brilliant students as the result of First Terminal Examination 2080. ⭐ We appreciate your cooperation",
    image: "https://hritacademy.edu.np/wp-content/uploads/2023/11/NOtice-Result-Distribution-2080-320x320.jpg?height=400&width=600",
  },
  {
    id: 4,
    title: "Result Distribution Program 2080!",
    date: "NOVEMBER 26, 2023",
    category: "UNCATEGORIZED",
    type: "result",
    description:
      "Dear Hritian Parents/ Guardian/ Students, We hope this post finds you well! As per our academic calendar, we're excited to share the academic achievements of our brilliant students as the result of First Terminal Examination 2080. ⭐ We appreciate your cooperation",
    image: "https://hritacademy.edu.np/wp-content/uploads/2023/11/NOtice-Result-Distribution-2080-320x320.jpg?height=400&width=600",
  },
]

export default function NoticesFeed() {
      const { isPending, error, data } = useQuery({
        queryKey: ["events"],
        queryFn: () => fetchEventLists({}),
        retry: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      });
  return (
    <div className="container mx-auto py-16">
      <div className="space-y-8">
        {notices.map((notice, index) => (
          <motion.div
            key={notice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                {/* Left side - Image */}
                <div className="md:w-1/3 relative">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={notice.image || "/placeholder.svg"}
                      alt={notice.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <Badge variant={notice.type === "event" ? "default" : "secondary"} className="absolute top-4 left-4">
                    {notice.type === "event" ? (
                      <Trophy className="w-3 h-3 mr-1" />
                    ) : (
                      <FileText className="w-3 h-3 mr-1" />
                    )}
                    {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                  </Badge>
                </div>

                {/* Right side - Content */}
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {notice.date}
                      <Separator orientation="vertical" className="h-4" />
                      <Tag className="w-4 h-4" />
                      {notice.category}
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight bg-text ">{notice.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="p-0">
                    <CardDescription className="text-base leading-relaxed">{notice.description}</CardDescription>
                  </CardContent>

                  <CardFooter className="p-0 mt-6">
                    <Button variant="outline" className="group default-button text-white">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

