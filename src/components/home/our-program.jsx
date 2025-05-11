import { cn } from "@/lib/utils";
import { HoverEffect } from "../ui/card-hover-effect";

export default function OurProgram() {
  const projects = [
    {
      title: "Law",
      link: "/law",
      description:
        "The program gives students a grasp of the legal system, human rights, criminal law, and constitutional law...",
    },
    {
      title: "Management",
      link: "/management",

      description: `The course lays emphasis on basic business principles, managing money, and strategic decision-making...
`,
    },
    {
      title: "Science",
      link: "/science",

      description:
        "The program emphasizes in-depth learning in subjects like Physics, Chemistry, Biology and Mathematics...",
    },
    // {
    //   title: "Arts",
    //   link: "/fine-arts",

    //   description:
    //     "Fine Art is art developed primary for aesthetic and intellectual purpose and judged for its beauty and meaningfulness...",
    // },
    // {
    //     title: "Humanities",
    //     link: "/humanities",
  
    //     description:
    //       "Humanities at Hrit encourage students to understand what indeed the true essence of human endeavours and goal...",
    //   },
  ];
  return (
    <section className="bg-slate-200">
    <div className="container mx-auto py-16">
      <div className="text-center mb-5">
        <h1 className="">Our Programs</h1>
        <div className="border-primary rounded-r-lg mb-5 -mt-6">
          {/* <blockquote className="text-gray-700 italic"> */}
          Empowering You, Transforming You
          {/* </blockquote> */}
        </div>
      </div>
      {/* <div className="grid grid-cols-4 gap-4"> */}
      <HoverEffect
        items={projects}
        className={cn(
          "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4"
        )}
      />
      {/* <div>Law</div>
        <div>Management</div>
        <div>Science</div>
        <div>Arts</div> */}
      {/* </div> */}
    </div>
    </section>
  );
}
