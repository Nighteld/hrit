import { fetchEventLists } from "@/action/eventAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight, Clock, Folder } from "lucide-react";
import { useParams } from "react-router";
export default function Notice() {
  const {id} = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["agentList"],
    queryFn: () =>
      fetchEventLists({
        eventCategory: "", //send empty to fetch all
        slug: id, //send empty to fetch all
      }),
    retry: false,
  });
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <Card>
            <CardHeader className="space-y-4">
              <h1 className="font-bold text-3xl m-0">
                Hrit Inter College Legal Quiz Contest 2080 organized by Hrit
                Legal Club
              </h1>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <Clock size={15} />
                  <p className="text-gray-500 text-sm ">JANUARY 10, 2024</p>
                </div>

                <div className="flex items-center gap-2">
                  <Folder size={15} />
                  <p className="text-gray-500 text-sm ">NOTICE</p>
                </div>
              </div>
              <CardDescription>
                {" "}
                <div className="w-full h-auto">
                  <img src="/banner/girl.jpg" alt="blog-image" />
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="blog-description leading-relaxed ">
                Hrit Academy is thrilled to extend invitation for Hrit Inter
                College Legal Quiz Contest 2080 organized by Hrit Legal Club
                taking place on Magh 12, 2080. This event stands as an
                exceptional opportunity to foster legal knowledge and
                perspectives. Share You may also like... Grade XII Marketing are
                going for Market visit September 10, 2019 Students of Grade XII
                visiting at Gokern Forest Resort September 10, 2019 Transcript,
                Provisional and Migration February 14, 2021 Leave a Reply
                Comment Name * Email * Website Follow: Previous story 𝐑𝐞𝐬𝐮𝐥𝐭
                𝐃𝐢𝐬𝐭𝐫𝐢𝐛𝐮𝐭𝐢𝐨𝐧 𝐏𝐫𝐨𝐠𝐫𝐚𝐦 𝟐𝟎𝟖𝟎! Congratulations Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam, excepturi. Fugiat,
                dolorum. Harum eaque quae minima voluptatem. Eum quis ad, libero
                rerum, totam natus perspiciatis, iusto itaque temporibus omnis
                illo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laboriosam nulla obcaecati temporibus possimus maiores
                veniam fuga provident dolore odit impedit iste qui, aut placeat
                a dolorum earum? Dolores, neque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dignissimos provident aut, odit
                velit minus assumenda facilis, unde autem perspiciatis veritatis
                iusto, impedit sit laboriosam tempore ex? Omnis perferendis quae
                aliquam.
              </div>
            </CardContent>
            {/* <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
          </Card>
        </div>
        <div className="col-span-4">
          <div className="grid md:grid-cols-1 space-y-4">
            <div>
              <Card>
                <CardHeader className="space-y-4">
                  <p className="font-semibold text-lg bg-text">
                    Hrit Inter College Legal Quiz Contest 2080 organized by Hrit
                    Legal Club
                  </p>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                      <Clock size={15} />
                      <p className="text-gray-500 text-sm ">JANUARY 10, 2024</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Folder size={15} />
                      <p className="text-gray-500 text-sm ">NOTICE</p>
                    </div>
                  </div>
                  <CardDescription>
                    {" "}
                    <div className="w-full h-auto">
                      <img src="/banner/girl.jpg" alt="blog-image" />
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="blog-description leading-relaxed ">
                    Hrit Academy is thrilled to extend invitation for Hrit Inter
                    College Legal Quiz Contest 2080 organized by Hrit Legal Club
                    taking place on Magh 12, 2080.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="group default-button text-white"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader className="space-y-4">
                  <p className="font-semibold text-lg bg-text">
                    Hrit Inter College Legal Quiz Contest 2080 organized by Hrit
                    Legal Club
                  </p>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                      <Clock size={15} />
                      <p className="text-gray-500 text-sm ">JANUARY 10, 2024</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Folder size={15} />
                      <p className="text-gray-500 text-sm ">NOTICE</p>
                    </div>
                  </div>
                  <CardDescription>
                    {" "}
                    <div className="w-full h-auto">
                      <img src="/banner/girl.jpg" alt="blog-image" />
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="blog-description leading-relaxed ">
                    Hrit Academy is thrilled to extend invitation for Hrit Inter
                    College Legal Quiz Contest 2080 organized by Hrit Legal Club
                    taking place on Magh 12, 2080.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="group default-button text-white"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
