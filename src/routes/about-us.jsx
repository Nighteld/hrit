import useEmblaCarousel from "embla-carousel-react";
// import "../../src/css/embla.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";
import { useSelectedSnapDisplay } from "@/components/EmblaCarouselSelectedSnapDisplay";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const name = {
    0: "Sandeep Gurung",
    1: "Joseph Thompson",
    2: "James K. Levine",
    3: "John Doe",
    4: "Jane Smith",
    5: "Michael Johnson",
  };
  const subject = {
    0: "Science Teacher",
    1: "Math Teacher",
    2: "Management Teacher",
    3: "Law Teacher",
    4: "Business Teacher",
    5: "Arts Teacher",
  };
  return (
    <div>
      <section className="embla">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((index) => (
              <div className="embla__slide relative" key={index}>
                <div className="embla__slide__number">
                  <img
                    src={`/banner/teacher${index}.jpg`}
                    className="w-full h-full"
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

        <div className="flex items-center text-center justify-center embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
          {/* 
               <SelectedSnapDisplay
                 selectedSnap={selectedSnap}
                 snapCount={snapCount}
               /> */}
        </div>
      </section>
    </div>
  );
}
