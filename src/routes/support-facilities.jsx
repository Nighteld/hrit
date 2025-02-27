import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";
import "../../src/css/base.css";
import "../../src/css/embla-full.css";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export default function SupportFacilities() {
  const projects = [
    {
      title: "Auditorium Hall",
      description:
        "Air conditioned seminar hall with seating capacity of 150 members, is the meeting hub fro department meeting and other seminars.",
    },
    {
      title: "Transport ",
      description:
        "Buses owned by college provide good transportation at nominal charge.",
    },
    {
      title: "Cafeteria ",
      description:
        "Well managed college cafeteria serves delicious, fresh and hygienic breakfast, meal, bakeries, tea coffee, and juice. We discourage junk food.",
    },
    {
      title: "Library ",
      description:
        "‘Silence service and users education’ are three criteria on which library operates. Library current collection includes both print and digital documents. It is open and immense source of information. Students and faculty teachers can also access to their won websites to see details of books necessary for them.",
    },
    {
      title: "Separate Hostel ",
      description:
        "College provides separate hostel for boys and girls with furnished double and single room, with separate bathroom, spacious playground and with well provision of round-the clock security, emergency medical care and housekeeping facilities.",
    },
    {
      title: "Other facilities",
      description:
        "Students will have extra opportunities to go out of the college to extend their knowledge and experience. Beside these, college conducts verities of extracurricular and sports activities. Similarly clubs are formed according interest and inherent capabilities of the students.",
    },
    {
      title: "Classroom",
      description:
        "We accommodate limit numbers of student in spacious class room. A long with this we have decorated our classes with full digital content like interactive white board, power podium, visual presenter, digital camera and digital sound system with acoustic speakers",
    },
    {
      title: "Sports",
      description:
        "We have wide, spacious and student friendly ground with flower bloomed garden. We equally offer different games like Table Tennis, Basket Ball, Volley Ball, football and Badminton. More than this, different martial arts, Tie-Chi, meditation, opportunities to national and international competition, training from national coaches are parts of our extra-curricular activities.",
    },
    {
      title: "Computer Lab",
      description:
        "We have a technically supported and well equipped computer lab with unlimited internet facilities. The lab is a full -time operating section designed to provide an easy and coveted access for the learning minds to explore through cloud-based technology.",
    },
  ];

  return (
    <div className="section container">
      <div className="grid md:grid-cols-4 gap-2">
        <div className="">
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1>
            <span className="bg-text-next">Our</span> Support{" "}
            <span className="bg-text-next">And</span> Facilities
          </h1>
          <div>
            <p>
              The goal of education will not match its target until we blend
              education with new technologies. The new trends of learning like
              e-learning, e-classes, digitalized memo are part of our learning
              strategies. Students through our website can grasp all the needed
              stuffs. We have online scheme for parents and guardians that from
              all over the world, they can take any information required of
              students whether they come to college or not, what is their
              academic progress, how they are grooming in college, through their
              individual user id. Beside that we have also worked on following
              needed facilities:
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <HoverEffect items={projects} className={cn("grid grid-cols-2 ")} />
      </div>
    </div>
  );
}
