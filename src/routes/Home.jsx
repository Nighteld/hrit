import HRIT, { schools } from "@/components/Hrit";
import { ChevronRight, ChevronsDown, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import EmblaCarousel from "@/components/EmblaCarousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Minus, Plus } from "lucide-react";
import OurMission from "@/components/our-mission";
import { Link } from "react-router";
import Experience from "@/components/Experience";
import Stats from "@/components/stats";
import CenteredDialog from "@/components/dialog";
import CountUp, { useCountUp } from "react-countup";
import TestimonialCarousel from "@/components/testimonials-carousel";
export default function Home() {
  const videoRef = useRef();
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };



  return (
    <>
      <div className="relative w-full">
        <div className="video-container">
          <video
            ref={videoRef}
            playsInline
            autoPlay
            muted={isMuted}
            loop
             preload="auto"
            id="video-background"
          >
            <source src="/Hrit-view.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute  bottom-5 left-5 ">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMute}
            className="bg-white/60 rounded-full cursor-pointer"
          >
            {isMuted ? <VolumeX /> : <Volume2 />}
          </Button>
        </div>
        <div className="absolute bottom-5 right-5  ">
          {/* <Button className="default-button group" variant="">
            Apply Now
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button> */}
          {/* <Button className="ml-5 default-button group" variant="">
           News & Events
            <ChevronsDown className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button> */}
        </div>
      </div>
      <CenteredDialog/>
      <Stats/>
    
      {/* <HRIT /> */}

      <OurMission />
      <Experience/>
      <TestimonialCarousel/>
      {/* <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1>
                <span className="bg-text-next">Experience</span> HRIT
              </h1>
              <div
                className="space-y-4 leading-relaxed text-base"
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <p className=" text-gray-800 ">
                  At HRIT, we are committed to innovation and excellence. We
                  have proudly introduced Special Law in +2 education, bringing
                  legal studies into the spotlight.
                </p>
                <p className=" text-gray-700">
                  We believe that advancing legal professionalism, serving the
                  public, and upholding justice is a challenging yet rewarding
                  journey.
                </p>
                <p className=" text-gray-700">
                  {" "}
                  With a passion for education, we strive to nurture future
                  leaders, skilled professionals, and ethical advocates. Through
                  research, scholarship, and public service, we empower our
                  students with a deep understanding of law and legal
                  institutions, shaping a brighter future for justice and
                  society.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="/courses/teamWork.jpg"
                alt="mission-college-image"
                loading="lazy"
                // className="h-auto max-w-full"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {schools.map((school, index) => (
            <figure className="snip" key={index}>
              <img
                className="snip__image object-cover"
                src={school.image}
                alt={school.name}
              />
              <figcaption className="snip__figcaption">
                <Link to={school.link}>
                  <h3 className="snip__title underline"> {school.name}</h3>
                </Link>
                <p className="snip__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div> */}
      {/* <EmblaCarousel /> */}

      {/* <Events /> */}

    </>
  );
}
