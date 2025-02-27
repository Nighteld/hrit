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
            <BreadCrumbs menuLists={components} />
          </div>
          <div className="col-span-3">
            {" "}
            <h1>
              <span className="bg-text-next">About</span> Hrit
            </h1>
            <p>
              Collaboration and supports are central to college ethos. We, here
              at HRIT are heading forward to create, integrate and impart the
              quality and value based education.
            </p>
            <p className="section-text">
              It is to develop highly potential, professional and disciplined
              pupils to compete currents updates in their field. We desire to
              train our students with current technology and motivate them to
              take up research problems and innovation associated with
              professional personality development programs to meet the
              challenges in this competitive world in efficient manner. The
              college equally encourages high standards of professional conducts
              and ethics by providing quality education on par with global
              standards. Thus imparting quality based value education is our
              foresight and vision.
            </p>
            <p>
              {" "}
              The college located at the historical place with Academic Black at
              Bashundhara Chauki, Kantimarg, attaches utmost importance towards
              the maintenance of discipline. Any sorts of misbehaving are ruled
              out. It is just because we feel discipline; dedication and
              devoting are key to success are turn individual into ideal being.
              So the students are expected to be well disciplined, cooperative
              and well behaved with decency and decorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
