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


export default function Humanities() {
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
                    className="w-full h-full object-fill"
                  />
                </div>

                {/* <div className="absolute bottom-0 right-0 w-auto group">
                         <div className="w-12 group-hover:w-full h-full transition-all duration-300 bg-color">
                           <Button
                             variant="outline"
                             className="w-full h-full border-0 rounded-none bg-color"
                           >
                             <ChevronsRight />
                           </Button>
                         </div>
                       </div> */}
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

          {/* <SelectedSnapDisplay
                 selectedSnap={selectedSnap}
                 snapCount={snapCount}
               /> */}
        </div>
      </section>
      <div className="section container">
        <div className="grid md:grid-cols-4 gap-2">
          <div className="">
            <BreadCrumbs menuLists={academics} />
          </div>
          <div className="col-span-3">
            {" "}
            <h1 className="first-letter">Humanities</h1>
            <div className="space-y-4">
            <p className="leading-relaxed">
              Humanities at Hrit encourage students to understand what indeed
              the true essence of human endeavours and goal. They support
              students to dive in to the language, culture and histories of
              society and its typical nature. Social justice and equality is on
              the top of their priority.
            </p>
            <p>
              They unfold how people tried to make moral, spiritual and
              intellectual sense of people, society and world. Most importantly,
              they teach the difference between empathy and sympathy and push
              people not live critically, logically rather spiritually and
              divinely. They teach us to reason about being human.
            </p>
            </div>

            <section className="">
              <div className="">
                <div className=" mx-auto mb-8">
                  <h2 className="">
                    <span className="bg-text-next">Course</span> Offered
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Comprehensive legal education programs designed to prepare
                    students for successful careers in law.
                  </p>
                </div>

                <Tabs defaultValue="grade-xi" className="mt-8">
                <TabsList className="grid w-full grid-cols-2">

            <TabsTrigger value="grade-xi">Grade XI</TabsTrigger>
            <TabsTrigger value="grade-xii">Grade XII</TabsTrigger>
          </TabsList>
          <TabsContent value="grade-xi">
            <div className="grid md:grid-cols-2 gap-6">
              <CourseCard
                title="Compulsory English"
                description="Core English language course required for all students."
              />
              <CourseCard title="Compulsory Nepali" description="Essential Nepali language studies for all students." />
              <CourseCard
                title="Economics"
                description="Study of production, distribution, and consumption of goods and services."
              />
              <CourseCard
                title="Sociology"
                description="Analysis of social relationships, social institutions, and social structures."
              />
              <CourseCard
                title="Rural Development"
                description="Study of improving the economic and social life of rural communities."
              />
              <CourseCard title="Major English" description="Advanced English language and literature studies." />
              <CourseCard
                title="Major Nepali"
                description="In-depth study of Nepali language, literature and culture."
              />
              <CourseCard
                title="Political Science"
                description="Study of political systems, governance, and political behavior."
              />
              <CourseCard
                title="Population Studies"
                description="Analysis of human populations, including size, structure, and demographics."
              />
              <CourseCard
                title="Mass Communication"
                description="Study of media and its impact on society and culture."
              />
              <CourseCard title="Mathematics" description="Study of numbers, quantities, shapes, and patterns." />
            </div>
          </TabsContent>
          <TabsContent value="grade-xii">
            <div className="grid md:grid-cols-2 gap-6">
              <CourseCard
                title="Compulsory English"
                description="Advanced core English language course required for all students."
              />
              <CourseCard
                title="Economics"
                description="Advanced study of economic theories, policies, and applications."
              />
              <CourseCard title="Sociology" description="In-depth analysis of social phenomena and institutions." />
              <CourseCard
                title="Rural Development"
                description="Advanced study of rural economic and social development strategies."
              />
              <CourseCard title="Major English" description="Specialized English language and literature studies." />
              <CourseCard
                title="Gender Studies"
                description="Analysis of gender roles, relations, and identities in society."
              />
              <CourseCard
                title="Political Science"
                description="Advanced study of political theories, systems, and international relations."
              />
              <CourseCard
                title="Population Studies"
                description="In-depth analysis of population dynamics and demographic trends."
              />
              <CourseCard
                title="Mass Communication"
                description="Advanced study of media production, analysis, and effects."
              />
              <CourseCard title="Mathematics" description="Advanced study of mathematical concepts and applications." />
            </div>
          </TabsContent>
        </Tabs>
              </div>
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
