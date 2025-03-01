import EmblaCarousel from "@/components/EmblaCarousel";
import HRIT from "@/components/Hrit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChevronRight, GraduationCap, Users, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import Events from "../components/Events";
import { Button } from "../components/ui/button";


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
      <section className="py-16 md:py-24 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                HRIT as a law college is dedicated to advancing human dignity, social welfare, and justice through
                knowledge of law. Students are exposed to an enriching intellectual environment with frequent visit to
                Supreme Court, District courts, Court justice, Bar Association, legal institutions and through guest
                lectures from the exceptional faculty professionals.
              </p>
              <p>
                Our goal is for our graduates to possess the core competencies essential to embark on the practice of
                law. These core competencies are accomplished through:
              </p>
            </div>
            <div className="mt-8">
              <Button variant="outline" className="group">
                About Our College
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>Legal Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                Developing critical thinking and analytical skills to interpret laws and legal principles.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <CardTitle>Legal Research and Writing</CardTitle>
              </CardHeader>
              <CardContent>Mastering the art of legal research and crafting persuasive legal documents.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Client Service</CardTitle>
              </CardHeader>
              <CardContent>Understanding client needs and providing effective legal representation.</CardContent>
            </Card>
          </div>
        </div>
      </section>
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
