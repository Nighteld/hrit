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

export default function Management() {
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
      <div className="section container">
        <div className="grid md:grid-cols-4 gap-2">
          <div className="">
            <BreadCrumbs menuLists={academics} />
          </div>
          <div className="col-span-3 ">
            <div className="">
              <Tabs defaultValue="hotel-management" className="w-full ">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 gap-2">
                  <TabsTrigger value="hotel-management" className="">
                    Hotel Management
                  </TabsTrigger>
                  <TabsTrigger value="business-studies" className="">
                    Business Studies
                  </TabsTrigger>
                  <TabsTrigger value="computer-science" className="bg-muted">
                    Computer Science
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="hotel-management" className="mt-10 md:mt-6">
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      Hotel Management program at HRIT shapes students with
                      Skills and knowledge to be the competent entrepreneur,
                      teacher, housekeeper, cook and many more as a flexible
                      career seeker.
                    </p>
                    <p className="leading-relaxed">
                      {" "}
                      More than this, with the desire to provide quality
                      education of international acceptance, HRIT is providing
                      facilities like training at leading hotels, lectures by
                      veteran cook and academicians tie ups with various leading
                      restaurants, hotels and organizations in Kathmandu and
                      outside.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="business-studies" className="mt-10 md:mt-6">
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      Business studies at Hrit prepare students to master in
                      business activities with capital confidence and competence
                      by letting them know what business is and how it
                      functions.
                    </p>

                    <p className="leading-relaxed">
                      It familiarizes them with core skills and value of
                      business environment and involves them into the capability
                      of understanding individuals, organizations, their needs
                      and problems.
                    </p>
                    <p className="leading-relaxed">
                      {" "}
                      We go specialized with further training in areas such as
                      marketing, accounting, information technologies and most
                      importantly entrepreneurship. “Business Studies
                      demonstrate how variety of areas of study can be combined
                      with productive activity” which we accomplish through
                      capable entrepreneur, bankers, business administrator and
                      renowned character accountants.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="computer-science" className="mt-10 md:mt-6">
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      Computer Science is the study of theory, experimentation
                      and essentially the study of information and computation
                      using the scientific and practical approach.
                    </p>

                    <p className="leading-relaxed">
                      It is an umbrella term for all kind of specialist study of
                      computers and technology. Choosing to study computer
                      science is a savvy choice in an increasingly technology
                      driven world and it could lead to working on the front
                      line of the world's greatest innovations.
                    </p>

                    <p className="leading-relaxed">
                      Computer Science's graduates at Hrit will definitely
                      pursue roles of IT consultants, an information system
                      manager, a database administrator or a multimedia
                      programmer in their career since they usually offered
                      extra efficiency building classes by professionals.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
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
                        title="Accountancy"
                        description="Study of the fundamental principles and structure of government."
                      />
                      <CourseCard
                        title="Economics "
                        description="Understanding the rules and methods for conducting civil and criminal cases."
                      />
                      <CourseCard
                        title="Marketing"
                        description="Exploration of the philosophy and theories behind legal systems."
                      />
                      <CourseCard
                        title="Business Mathematics"
                        description="Study of international and domestic human rights frameworks."
                      />
                      <CourseCard
                        title="Hotel Management "
                        description="Study of international and domestic human rights frameworks."
                      />
                      <CourseCard
                        title="Business Studies "
                        description="Study of international and domestic human rights frameworks."
                      />
                      <CourseCard
                        title="Travel and Tourism "
                        description="Study of international and domestic human rights frameworks."
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="grade-xii" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <CourseCard
                        title="Accountancy"
                        description="Study of the fundamental principles and structure of government."
                      />
                      <CourseCard
                        title="Economics "
                        description="Understanding the rules and methods for conducting civil and criminal cases."
                      />
                      <CourseCard
                        title="Marketing"
                        description="Exploration of the philosophy and theories behind legal systems."
                      />
                      <CourseCard
                        title="Business Mathematics"
                        description="Study of international and domestic human rights frameworks."
                      />
                      <CourseCard
                        title="Hotel Management "
                        description="Study of international and domestic human rights frameworks."
                      />
                      <CourseCard
                        title="Business Studies "
                        description="Study of international and domestic human rights frameworks."
                      />
                      <CourseCard
                        title="Travel and Tourism "
                        description="Study of international and domestic human rights frameworks."
                      />
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
