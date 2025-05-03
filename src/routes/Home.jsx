import CenteredDialog from "@/components/dialog";
import TestimonialCarousel from "@/components/home/testimonials-carousel";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import Stats from "@/components/home/Stats";
import AboutHritHome from "@/components/home/about";
import OurProgram from "@/components/home/our-program";
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
        <div className="absolute bottom-5 left-5 ">
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
      <AboutHritHome/>
      <OurProgram/>
    

      <TestimonialCarousel/>
      

    </>
  );
}
