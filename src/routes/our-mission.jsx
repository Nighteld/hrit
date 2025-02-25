import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";
import { CircleCheck } from "lucide-react";

export default function OurMission() {
  return (
    <div className="section container">
      <div className="grid md:grid-cols-4 gap-2">
        <div>
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1>
            <span className="bg-text-next">Our</span> Mission
          </h1>
          <p>
            The mission of the college is to produce and prepare complete
            manpower to excel in any types of tests and exams of their life.
            Including social, moral and realistic values, our priceless strive
            is to let them grow up as responsible citizens of society and globe.
            We are known for our extraordinary faculties, distinguished
            researchers, scholars and experts.
          </p>
          <p className="section-text">
            Our courses are designed to maximize productivity and enhance
            competency through the acquisition of subject knowledge and
            practical skills. We promote abilities through balance, coherent and
            comprehensive curriculum appropriate to student’s needs and value
            students as individual and member of the college. We want to feed
            them with intectuality, facilitate for overall personality and
            inspire them to explore their potential.
          </p>

          <div className="">
          <h1>
            <span className="bg-text-next">Our</span> Values
          </h1>
          <ul className="list-style-wrapper">
            <li className="flex gap-2">
              {" "}
              <CircleCheck />
              Professionalism, transparency and accountability
            </li>
            <li className="flex gap-2">
              {" "}
              <CircleCheck />
              Respect towards equality and diversity
            </li>
            <li className="flex gap-2">
              {" "}
              <CircleCheck />
              Commitment towards excellence
            </li>
            <li className="flex gap-2">
              {" "}
              <CircleCheck />
              Responsiveness to our stakeholders
            </li>
            <li className="flex gap-2">
              {" "}
              <CircleCheck />
              Up gradation of services to match with market requirements
            </li>
          </ul>
        </div>
        </div>
       
      </div>
    </div>
  );
}
