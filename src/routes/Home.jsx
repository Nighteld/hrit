import { useRef, useState } from "react";
import Hero from "../components/Hero";
import PrincipalMessage from "../components/PrincipalMessage";
import Events from "../components/Events";
import { Button } from "../components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import HRIT from "@/components/Hrit";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import EmblaCarousel from "@/components/EmblaCarousel";

export default function Home() {
  const videoRef = useRef();
  const [isMuted, setIsMuted] = useState(true);
  const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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
          <Button className="default-button" variant="">
            Apply Now
          </Button>
        </div>
      </div>

      <HRIT />

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* <Hero /> */}
      {/* <PrincipalMessage /> */}
      <Events />
      {/* <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer> */}



    </>
  );
}
