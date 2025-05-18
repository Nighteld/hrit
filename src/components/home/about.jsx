import useEmblaCarousel from "embla-carousel-react";

import "../../../src/css/embla-full.css";
import "../../../src/css/base.css";
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
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";
import { Link } from "react-router";
export default function AboutHritHome() {
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
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h1>Welcome to HRIT College</h1>

          <div className="p-6 bg-light border-l-4 border-primary rounded-r-lg mb-5">
            <blockquote className="text-gray-700 italic">
              “Empowering You, Transforming You”
            </blockquote>
          </div>
          <div className="space-y-2 leading-relaxed">
            <p className="">
              HRIT Academy is a well-known institution that is dedicated to
              providing quality education in a friendly environment affiliated
              with the National Examination Board (NEB), offering a wide range
              of educational programs for students at the +2 level.
            </p>
            <p>
              {" "}
              Our modern facilities, experienced faculty, and commitment to
              quality education make us a top choice for aspiring students.
            </p>
            <p>
              We have diverse programs to cater to the multifaceted needs of our
              students, including the +2 level in Law, Science, and Management.
            </p>
            <p>
              {" "}
              Our goal at HRIT College is to equip students with the skills,
              knowledge, and confidence to excel in the classroom and in the
              workplace.
            </p>
            <Link to="/about-us" >
              <Button variant="outline" className="text-white bg-color mt-5">
                About us
                <ChevronsRight />
              </Button>
            </Link>
          </div>
          
        </div>
        <div className="">
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
        </div>
      </div>
    </div>
  );
}
