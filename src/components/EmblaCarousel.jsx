import useEmblaCarousel from "embla-carousel-react";
import "../../src/css/embla.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const EmblaCarousel = () => {
  const OPTIONS = { dragFree: true }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

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
    <div className="container">
      <div className="">
      <h1>
            <span className="bg-text-next">Our</span> Teacher
          </h1>
      </div>

      <section className="embla">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((_,index) => (
              <div className="embla__slide relative" key={index}>
                <div className="embla__slide__number">  
                  <img
                    src={`/banner/teacher${index}.jpg`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute left-10 bottom-10 text-white text-2xl">
                  {name[index]}
                </div>
                <div className="absolute left-10 bottom-2 text-white text-xl font-semibold">
                  {subject[index]}
                </div>
               
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
};

export default EmblaCarousel;
