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

export default function BusinessStudies() {
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

          {/* <SelectedSnapDisplay
                 selectedSnap={selectedSnap}
                 snapCount={snapCount}
               /> */}
        </div>
      </section>
      <div className="section container">
        <div className="grid md:grid-cols-4 gap-2">
          <div className="">
            <BreadCrumbs menuLists={admission} />
          </div>
          <div className="col-span-3">
            {" "}
            <h1>
              <span className="bg-text-next">Business</span> Studies
            </h1>
            <div className="space-y-4 leading-relaxed">
              <p>
                Business Studies at Hrit Prepare students to mater in business
                activities with capital confidence and competence by letting
                them know what business is and how it functions.
              </p>
              <p>
                It familiarizes them with core skills and value of business
                environment and involves them into the capability of
                understanding individual’s organizations, their needs and
                problems. We go specialized with further training in areas such
                as marketing, accounting, information technologies and most
                important entrepreneurship.
              </p>
              <p>
                “Business Studies demonstrate how variety of areas of study can
                be combined with productive activity” which we accomplish
                through capable entrepreneur, bankers, business administrator
                and renowned character accountants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
