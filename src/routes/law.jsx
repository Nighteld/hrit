import useEmblaCarousel from "embla-carousel-react";

import "../../src/css/embla-full.css";
import "../../src/css/base.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "@/components/EmblaCarouselSelectedSnapDisplay";
import Autoplay from "embla-carousel-autoplay";
import BreadCrumbs from "@/components/BreadCrumbs";
import { academics, components } from "@/layouts/NavBarDemo";
import { Link, NavLink } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import {
//   useSelectedSnapDisplay
// } from "./EmblaCarouselSelectedSnapDisplay";

export default function Law() {
  const OPTIONS = { dragFree: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);

  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div>
      <section className="about-embla relative">
        <div className="about-embla__viewport " ref={emblaRef}>
          <div className="about-embla__container">
            {SLIDES.map((index) => (
              <div className="about-embla__slide " key={index}>
                <div className="about-embla__slide__number">
                  <img
                    src={`/banner/hrit${index}.jpg`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center text-center justify-center embla__controls absolute bottom-5 left-10">
          <div className="about-embla__buttons">
            <PrevButton
              className="about-embla__button"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              className="about-embla__button"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
      <div className="section container mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-2">
          <div className="">
            <BreadCrumbs menuLists={academics} />
          </div>
          <div className="col-span-3">
            <div className="mb-15">
              <h1>
                <span className="bg-text-next">Special</span> Law
              </h1>
              <div className="p-6 bg-light border-l-4 border-primary rounded-r-lg mb-5">
                <blockquote className="text-gray-700 italic">
                  “A journey into Legal Excellence and Social Justice”
                </blockquote>
              </div>
              <div className="space-y-4 leading-relaxed mb-5">
                <p>
                  HRIT College's the first Law School of Nepal and the program
                  gives students a sound foundation in law if they are
                  interested in a career in law.
                </p>
                  
                  <p>
                  The program gives students a
                  grasp of the legal system, human rights, criminal law, and
                  constitutional law. Whether you're interested in becoming a
                  lawyer, a legal advisor, or a human rights activist, our
                  curriculum prepares you for a career that upholds justice and
                  equality. 
                  </p>
                  <p>
                  Students are given exposure to an enriching
                  intellectual environment with frequent visit to Supreme Court,
                  District Court, Court Justice, Bar Association, legal
                  institution and guest lectures from professionals.
                  </p>
                  
              </div>
              {/* <p>
                HRIT as a law college is dedicated to advancing human dignity,
                social welfare, and justice through knowledge of law. Students
                are exposed to an enriching intellectual environment with
                frequent visit to Supreme Court, District courts, Court justice,
                Bar Association, legal institutions and through guest lectures
                from the exceptional faculty professionals. Our goal is for our
                graduates to possess the core competencies essential to embark
                on the practice of law. These core competencies are accomplished
                through:
              </p> */}
              <ul className="section-text list-item-before space-y-1 leading-relaxed">
                <li>Legal Analysis</li>
                <li>Legal Research and Writing</li>
                <li>Fundamentals of clients Service</li>
                <li>
                  Fundamentals of dispute processing and legal problem solution
                </li>
                <li>
                  Fundamentals of professional responsibility and Identity.
                </li>
              </ul>
            </div>
            <section className="">
              <div className="">
                <div className=" mx-auto mb-8">
                  <h2 className="text-3xl font-bold tracking-tight">
                    <span className="bg-text-next">Our</span> Programs
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Comprehensive legal education programs designed to prepare
                    students for successful careers in law.
                  </p>
                </div>

                <Tabs defaultValue="grade-xi" className=" mx-auto">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="grade-xi">Grade XI</TabsTrigger>
                    <TabsTrigger value="grade-xii">Grade XII</TabsTrigger>
                  </TabsList>
                  <TabsContent value="grade-xi" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <CourseCard
                        title="Constitutional Law"
                        description="Study of the fundamental principles and structure of government."
                      />
                      <CourseCard
                        title="Procedural Law"
                        description="Understanding the rules and methods for conducting civil and criminal cases."
                      />
                      <CourseCard
                        title="Jurisprudence and Legal Theories"
                        description="Exploration of the philosophy and theories behind legal systems."
                      />
                      <CourseCard
                        title="Human Rights/General Law (Optional)"
                        description="Study of international and domestic human rights frameworks."
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="grade-xii" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <CourseCard
                        title="Nepalese Legal System"
                        description="Comprehensive study of Nepal's legal framework and institutions."
                      />
                      <CourseCard
                        title="Legal Drafting"
                        description="Developing skills in drafting legal documents and contracts."
                      />
                      <CourseCard
                        title="Civil and Criminal Law and Justice"
                        description="Understanding substantive civil and criminal laws and procedures."
                      />
                      <CourseCard
                        title="Human Rights/General Law (Optional)"
                        description="Advanced study of human rights law and its applications."
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            <section>
              <h3 className="text-4xl font-semibold">Career Opportunities after Law +2</h3>
              <ul className="space-y-1 leading-relaxed list-item-tick">
                <li>Law School (LLB)</li>
                <li>Legal Advisor or Consultant</li>
                <li>Advocate, Lawyer, Public Prosecutor</li>
                <li>Legal Writing or Journalism</li>
                <li>Corporate Law or Government Services</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
function CourseCard({ title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
