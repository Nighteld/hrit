import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";
import { CircleCheck } from "lucide-react";

export default function OurMission() {
  return (
    <div className="section container mx-auto py-16">
      <div className="grid md:grid-cols-4 gap-2">
        <div>
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1>
            <span className="bg-text-next">Our</span> Mission
          </h1>
          <div className="space-y-4 leading-relaxed">
            <p>
              To foster an environment of innovation, academic excellence, and
              personal growth, ensuring that our students emerge as responsible
              leaders and global citizens. Our focus is on developing
              individuals who are prepared to excel in any test or challenge,
              whether academic, social, moral, or realistic
            </p>
            {/* <p className="">

          </p> */}
          </div>

          <div className="">
            <h1>
              <span className="bg-text-next">Our</span> Vision
            </h1>
            <div className="space-y-4 leading-relaxed">
              <p>
                To be a center of excellence in education, empowering students
                with knowledge, skills, and values that will transform them as
                leaders in their chosen fields. We seek to develop highly
                qualified leaders who will re-engineer organizations through the
                convergence of human resources expertise and state-of-the-art
                technology solutions.
              </p>
              {/* <p className="">

          </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
