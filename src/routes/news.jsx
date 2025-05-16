import { fetchEventLists } from "@/action/eventAction";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

export default function News() {
  
    const { isPending, error, data } = useQuery({
      queryKey: ["events"],
      queryFn: () => fetchEventLists({
        eventCategory:"News"
      }),
      retry: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });
  const news = [
    {
      id: 1,
      title: "𝐁𝐢𝐠 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧𝐬 𝐭𝐨 𝐭𝐡𝐞 𝐕𝐢𝐜𝐭𝐨𝐫𝐢𝐨𝐮𝐬 𝐋𝐞𝐠𝐚𝐥 𝐌𝐢𝐧𝐝𝐬!",
      image:
        "https://hritacademy.edu.np/wp-content/uploads/2024/12/moot-court-competition-2081a.jpg?height=400&width=600",
      description:
        "This is a simple card with an image at the top and content below. You can customize this text to display whatever information you need.",
    },
    {
      id: 2,
      title: "Card Title",
      image:
        "https://hritacademy.edu.np/wp-content/uploads/2024/12/nepali-drama.jpg?height=400&width=600",
      description:
        "This is a simple card with an image at the top and content below. You can customize this text to display whatever information you need.",
    },
    {
      id: 3,
      title: "Card Title",
      image:
        "https://hritacademy.edu.np/wp-content/uploads/2024/11/political-discussion-on.jpg?height=400&width=600",
      description:
        "This is a simple card with an image at the top and content below. You can customize this text to display whatever information you need.",
    },
    {
      id: 4,
      title: "Card Title",
      image:
        "https://hritacademy.edu.np/wp-content/uploads/2024/12/moot-court-competition-2081a.jpg?height=400&width=600",
      description:
        "This is a simple card with an image at the top and content below. You can customize this text to display whatever information you need.",
    },
    {
      id: 5,
      title: "Card Title",
      image:
        "https://hritacademy.edu.np/wp-content/uploads/2024/12/moot-court-competition-2081a.jpg?height=400&width=600",
      description:
        "This is a simple card with an image at the top and content below. You can customize this text to display whatever information you need.",
    },
    {
      id: 6,
      title: "Card Title",
      image:
        "https://hritacademy.edu.np/wp-content/uploads/2024/12/moot-court-competition-2081a.jpg?height=400&width=600",
      description:
        "This is a simple card with an image at the top and content below. You can customize this text to display whatever information you need.",
    },
  ];
  return (
    <div className="container mx-auto py-16">
      <h1 className="first-letter">
        <span className="">News</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {news.map((item) => (
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg "
            key={item.id}
          >
            <div className="relative h-48 w-full">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2 text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <Button className="default-button group" variant="">
                  Learn More
                </Button>
                <span className="text-gray-500 text-sm">2 min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
