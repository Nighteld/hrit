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
import { components } from "@/layouts/NavBarDemo";
import { Link, NavLink } from "react-router";

// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import {
//   useSelectedSnapDisplay
// } from "./EmblaCarouselSelectedSnapDisplay";

export default function AboutUs() {
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
            <BreadCrumbs menuLists={components} />
          </div>
          <div className="col-span-3">
            {" "}
            <h1>
              <span className="bg-text-next">About</span> Hrit
            </h1>

            <div className="p-6 bg-light border-l-4 border-primary rounded-r-lg mb-5">
                <blockquote className="text-gray-700 italic">
                “Empowering You, Transforming You”
                </blockquote>
              </div>
            <div className="space-y-2 leading-relaxed">
            <p>
              HRIT Academy, situated at Basundhara Chauki, Kantimarg, Kathmandu,
              Nepal, is a prestigious institution of learning with the mission
              of fostering academic success and all-around growth.
              <br />
              Established with the vision of creating highly qualified,
              professional, and disciplined students, HRIT Academy gives top
              priority to the integration of latest technology, research, and
              innovation in its teaching-learning process.
            </p>
            <p className="">
              HRIT Academy is a well-known institution that is dedicated to
              providing quality education in a friendly environment affiliated
              with the National Examination Board (NEB), offering a wide range
              of educational programs for students at the +2 level.
            </p>
            <p>
              {" "}
              Our modern facilities, experienced faculty, and commitment to
              quality education make us a top choice for aspiring students. We
              have diverse programs to cater to the multifaceted needs of our
              students, including the +2 level in Law, Science, and Management.
            </p>
            <p>
              {" "}
              Our goal at HRIT College is to equip students with the skills,
              knowledge, and confidence to excel in the classroom and in the
              workplace.
            </p>
            </div>
            {/* <p>
              {" "}
              The college located at the historical place with Academic Black at
              Bashundhara Chauki, Kantimarg, attaches utmost importance towards
              the maintenance of discipline. Any sorts of misbehaving are ruled
              out. It is just because we feel discipline; dedication and
              devoting are key to success are turn individual into ideal being.
              So the students are expected to be well disciplined, cooperative
              and well behaved with decency and decorum.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
