import useEmblaCarousel from "embla-carousel-react";
import "../../src/css/embla.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  useSelectedSnapDisplay
} from "./EmblaCarouselSelectedSnapDisplay";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);
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
      <div className="container">
      <h2 className="bg-text ml-5">Meet Our Teachers</h2>
      </div>

      <section className="embla">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide relative" key={index}>
                <div className="embla__slide__number">  
                  <img
                    src={`/banner/teacher${index}.jpg`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute left-10 bottom-10 text-white text-2xl">
                  {name[index]}
                </div>
                <div className="absolute left-10 bottom-2 text-white text-xl font-semibold">
                  {subject[index]}
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
};

export default EmblaCarousel;
