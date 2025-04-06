import BreadCrumbs from "@/components/BreadCrumbs";
import { admission } from "@/layouts/NavBarDemo";
import { CheckCircle } from "lucide-react";

const AdmissionProcedure = () => {
  return (
    <div className="selection container mx-auto py-16">
      <div className="grid md:grid-cols-4 gap-2">
        <div className="">
          <BreadCrumbs menuLists={admission} />
        </div>
        <div className="col-span-3">
          <h1 className="mb-4 text-2xl font-bold">
            <span className="bg-text-next">Admission</span> Procedure
          </h1>
          <div className="space-y-2 leading-relaxed">
            <p>
              Welcome to HRIT Academy, where your educational path to success
              begins! Our college is dedicated to providing world-class
              education that promotes intellectual growth, critical thinking,
              and professional success. If you are interested in shaping your
              future and become a part of an energetic academic community, we
              invite you to apply to HRIT Academy. We welcome students from
              diverse backgrounds who have passion for learning and commitment
              to excellence.
            </p>
            <p>
              At Hrit Academy, we admit new students annually at the beginning
              of the academic year based on multiple criteria: their performance
              in the SEE examination, results from our entrance test, previous
              academic achievements, and their demonstrated personal
              competencies during the admission process. This individualized
              approach allows us to create tailored plans for each student from
              day one, ensuring their academic future and success. We prioritize
              equal opportunities for all scholars, recognizing each student’s
              unique potential and providing necessary support regardless of
              economic circumstances. We value the commitment of guardians,
              parents, and students to their academic journeys, ensuring that
              financial considerations do not hinder any student’s right to
              education.
            </p>
          </div>

          <div className="">
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <h3 className="text-lg font-medium text-gray-900 my-1 first-letter">
                  eligibility
                </h3>
              </div>

              <p className="leading-relaxed">
                For admission to any of our program at Hrit Academy, students
                must meet the entry requirements set by the National Examination
                Board (NEB) as mentioned below: This includes having completed
                SEE (Grade 10) or equivalent exam with the required minimum
                marks as per NEB guidelines. Additionally, students are required
                to appear an entrance exam.
              </p>
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-5">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <h3 className="text-lg font-medium text-gray-900 my-1">
                  <span className="bg-text-next">How </span>to Apply ?
                </h3>
              </div>

              <p className="leading-relaxed">
                Students can obtain enrollment or enquiry forms from the
                front-office desk immediately after the SEE results or also can
                get us through our website.
              </p>
            </div>
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <h3 className="text-lg font-medium text-gray-900 my-1">
                  <span className="bg-text-next">When</span> to Apply ?
                </h3>
              </div>

              <p className="leading-relaxed">
                Admissions procedure starts right after the SEE result. So we
                encourage the aspiring students to apply at the earliest.
              </p>
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-5">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <h3 className="text-lg font-medium text-gray-900 my-1">
                  <span className="bg-text-next"> Required</span> Stuffs
                </h3>
              </div>

              <ul className="leading-relaxed">
                <li>Two Passport size color Photographs</li>
                <li>Copies of marksheet and certificates</li>
                <li>
                  A receipt of application procession fee set by the college
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedure;
