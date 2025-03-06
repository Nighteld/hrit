import EmblaCarousel from "@/components/EmblaCarousel";
import HRIT from "@/components/Hrit";
import { ChevronRight, ChevronsDown, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import Events from "../components/Events";
import { Button } from "../components/ui/button";

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
            id="video-background"
          >
            <source src="/Hrti-Aerial-View.mp4" type="video/mp4" />
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
          <Button className="default-button group" variant="">
            Apply Now
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button>
          {/* <Button className="ml-5 default-button group" variant="">
           News & Events
            <ChevronsDown className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button> */}
        </div>
      </div>

      <HRIT />
      <div className="container">
        <h1>
          <span className="bg-text-next">Experience</span> HRIT
        </h1>
        <div className="leading-relaxed space-y-4 text-base">
          <p>
            At HRIT, we are committed to innovation and excellence. We have
            proudly introduced Special Law in +2 education, bringing legal
            studies into the spotlight. We believe that advancing legal
            professionalism, serving the public, and upholding justice is a
            challenging yet rewarding journey.
          </p>
          <p>
            {" "}
            With a passion for education, we strive to nurture future leaders,
            skilled professionals, and ethical advocates. Through research,
            scholarship, and public service, we empower our students with a deep
            understanding of law and legal institutions, shaping a brighter
            future for justice and society.
          </p>
        </div>
      </div>
      {/* <EmblaCarousel  /> */}

      {/* <Events /> */}
    </>
  );
}
