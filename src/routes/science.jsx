import useEmblaCarousel from "embla-carousel-react";

import BreadCrumbs from "@/components/BreadCrumbs";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";
import { useSelectedSnapDisplay } from "@/components/EmblaCarouselSelectedSnapDisplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { academics } from "@/layouts/NavBarDemo";
import Autoplay from "embla-carousel-autoplay";
import "../../src/css/base.css";
import "../../src/css/embla-full.css";

// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import {
//   useSelectedSnapDisplay
// } from "./EmblaCarouselSelectedSnapDisplay";

export default function Science() {
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
      <div className="section container mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-2">
          <div className="">
            <BreadCrumbs menuLists={academics} />
          </div>
          <div className="col-span-3">
            {" "}
            <h1 className="first-letter">Science</h1>
            <div className="p-6 bg-light border-l-4 border-primary rounded-r-lg mb-5">
              <blockquote className="text-gray-700 italic">
                “Discover the Secret of the Universe”
              </blockquote>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed">
                The Science stream of HRIT College is for students who want to
                become professionals in fields like engineering, medical
                sciences, health care, research and technology. 
              </p>

              <p className="leading-relaxed">
              The course is
                designed to enhance the command of students over scientific
                concepts and make them capable of pursuing higher studies in
                various scientific streams.
              </p>

              <p className="leading-relaxed">
              The program emphasizes in-depth
                learning in subjects like Physics, Chemistry, Biology and
                Mathematics with a focus on hands-on learning and research, our
                students are well-prepared to become the next generation of
                scientists, innovators, and problem-solvers.
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

                <Tabs defaultValue="grade-xi" className=" mx-auto">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="grade-xi">Grade XI</TabsTrigger>
                    <TabsTrigger value="grade-xii">Grade XII</TabsTrigger>
                  </TabsList>
                  <TabsContent value="grade-xi" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <CourseCard
                        title="Compulsory English"
                        description="Study of the fundamental principles and structure of government."
                      />
                      <CourseCard
                        title="Physics "
                        description="Understanding the rules and methods for conducting civil and criminal cases."
                      />
                      <CourseCard
                        title="Chemistry"
                        description="Exploration of the philosophy and theories behind legal systems."
                      />
                      <CourseCard
                        title="Mathematics"
                        description="Study of international and domestic human rights frameworks."
                      />
                      <CourseCard
                        title="Biology / Computer Science"
                        description="Study of international and domestic human rights frameworks."
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="grade-xii" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <CourseCard
                        title="Compulsory English"
                        description="Study of the fundamental principles and structure of government."
                      />
                      <CourseCard
                        title="Compulsory Nepali"
                        description="Study of the fundamental principles and structure of government."
                      />
                      <CourseCard
                        title="Physics "
                        description="Understanding the rules and methods for conducting civil and criminal cases."
                      />
                      <CourseCard
                        title="Chemistry"
                        description="Exploration of the philosophy and theories behind legal systems."
                      />
                      <CourseCard
                        title="Mathematics / Biology "
                        description="Study of international and domestic human rights frameworks."
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              
              </div>
            </section>

            <section>
            <h3 className="text-4xl font-semibold">Career Opportunities after Science +2</h3>

            <ul className="section-text list-item-before space-y-1 leading-relaxed">
                <li>Engineering (Mechanical, Civil, Electrical, IT) </li>
                <li>Medicine (MBBS, BDS, Pharmacy)</li>
                <li>Research and Development</li>
                <li>
                Environmental Science
                </li>
                <li>
                Biotechnology
                </li>
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
