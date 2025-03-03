import { Card, CardContent } from "@/components/ui/card";

const directors = [
  {
    name: "Prashamsa Subedi",
    role: "President",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Sarad Yadav",
    role: "Vice-President",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Amrita Upadhaya",
    role: "Vice-President",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Jasmin Giri",
    role: "General Secretary",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Shivaji Prasad Kushwaha",
    role: "Secretary",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Samrid Dahal",
    role: "Treasurer",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Amar Yadav",
    role: "Executive Member",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },

  {
    name: "Arya Jha",
    role: "Executive Member",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Bijaya Shrestha ",
    role: "Executive Member",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },

  {
    name: "Diya Pudasaini",
    role: "Executive Member",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Dipesh Shrestha",
    role: "Executive Member",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },

  {
    name: "Sujal Khatri",
    role: "Executive Member",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
  {
    name: "Binita Rimal",
    role: "Executive Member",
    image: "/alumni/Asset-25.png",
    date: "2080/11/20",
  },
];

export default function AlumniCommittee() {
  return (
    <div className="container">
      <h1>
        <span className="bg-text-next">Alumni</span> Committee
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {directors.map((director, index) => (
          <Card
            key={index}
            className="hover:scale-105 transition-transform duration-200 shadow-lg rounded-xl"
          >
            <CardContent className="flex flex-col items-center text-center p-6">
              <img
                src={director.image}
                alt={director.name}
                className="w-28 h-28 rounded-full border-4 border-gray-200"
              />
              <h3 className="text-lg font-semibold mt-4">{director.name}</h3>
              <p className="text-sm text-gray-500">{director.role}</p>
              {/* <p className="text-xs text-gray-400 mt-1">{director.date}</p> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
