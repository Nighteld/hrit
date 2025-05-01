import useEmblaCarousel from "embla-carousel-react";

import BreadCrumbs from "@/components/BreadCrumbs";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";
import { admission } from "@/layouts/NavBarDemo";
import Autoplay from "embla-carousel-autoplay";
import "../../src/css/base.css";
import "../../src/css/embla-full.css";



export default function HotelManagement() {
  const OPTIONS = { dragFree: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);

  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="">
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

          {/* <SelectedSnapDisplay
                 selectedSnap={selectedSnap}
                 snapCount={snapCount}
               /> */}
        </div>
      </section>
      <div className="section container mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-2">
          <div className="">
            <BreadCrumbs menuLists={admission} />
          </div>
          <div className="col-span-3">
            {" "}
            <h1>
              <span className="bg-text-next">Hotel</span> Management
            </h1>
            <div className="space-y-4 leading-relaxed">
              <p>
                Hotel Management program at Hrit Shapes Students with Skills and
                knowledge to be the competent entrepreneur, teacher,
                housekeeper, cook and many more as a flexible career seeker.
               
              </p>
              <p> More than this, with the desire to provide quality education of
                international acceptance, HRIT is providing facilities like
                training at leading hotels, lectures by veteran cooks and
                academician tie ups with various leading restaurants, hotels and
                organization in Kathmandu and outside.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
