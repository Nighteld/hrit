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

// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import {
//   useSelectedSnapDisplay
// } from "./EmblaCarouselSelectedSnapDisplay";

export default function FineArts() {
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
            <h1>
              <span className="bg-text-next">Fine</span> Arts
            </h1>
            <div className="space-y-4">
              <p>
                Fine Art is art developed primary for aesthetic and intellectual
                purpose and judged for its beauty and meaningfulness.
                Historically, there were major five fine arts like painting,
                sculpture, architecture, music and poetry.
              </p>
              <p>
                {" "}
                During renaissance, it was believed as highest art which allowed
                the full expression and display of artistic imagination
                unrestricted. It has much relation with purity and beauty than
                quality. Education and engagement in the fine arts are an
                essential part of the school curriculum and an important
                component in the educational program of every student.
              </p>
              <p>
                {" "}
                The arts are what make us most human, most complete as people.
                The study includes both theoretical as well as practical
                learning practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
