import useEmblaCarousel from "embla-carousel-react";
import "../../src/css/base.css";
import "../../src/css/embla.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const EmblaCarousel = () => {
  const OPTIONS = { dragFree: true };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // const name = {
  //   0: "Sandeep Gurung",
  //   1: "Joseph Thompson",
  //   2: "James K. Levine",
  //   3: "John Doe",
  //   4: "Jane Smith",
  //   5: "Michael Johnson",
  // };
  // const subject = {
  //   0: "Science Teacher",
  //   1: "Math Teacher",
  //   2: "Management Teacher",
  //   3: "Law Teacher",
  //   4: "Business Teacher",
  //   5: "Arts Teacher",
  // };
  const teachers = [
    {
      name: "Sandeep Gurung",
      subject: "Science Teacher",
      image: "/banner/teacher0.jpg",
    },
    {
      name: "Nishesh Dangol",
      subject: "Math Teacher",
      image: "/banner/teacher1.jpg",
    },
    {
      name: "Savin Dhakal",
      subject: "Management Teacher",
      image: "/banner/teacher2.jpg",
    },
    {
      name: "Biraj Regmi",
      subject: "Law Teacher",
      image: "/banner/teacher3.jpg",
    },
    {
      name: "Sundar Sahukhala",
      subject: "Business Teacher",
      image: "/banner/teacher4.jpg",
    },
    {
      name: "Srijana Chitrakar",
      subject: "Arts Teacher",
      image: "/banner/teacher5.jpg",
    },
  ];
  return (
    <div className="mb-5">
      <div className="container">
        <h1>
          <span className="bg-text-next">Our</span> Teachers
        </h1>
      </div>

      <section className="embla">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container">
            {teachers.map((item, index) => (
              <div className="embla__slide relative" key={index}>
                <div className="embla__slide__number">
                  <img
                    // src={`/banner/teacher${index}.jpg`}
                    // src={`/banner/teacher${item.image}.jpg`}
                    src={item.image}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute left-10 bottom-5 text-white ">
                <p className="font-semibold text-2xl"> {item.name}</p>
                 <p>{item.subject}</p> 

                </div>
                {/* <div className="absolute left-10 bottom-2 text-white text-xl font-semibold">
                  {item.subject}
                </div> */}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center text-center justify-center embla__controls">
          <div className="embla__buttons">
            <PrevButton
            className="embla__button text-white"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
            className="embla__button"
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
