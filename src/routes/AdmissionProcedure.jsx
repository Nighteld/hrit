import BreadCrumbs from "@/components/BreadCrumbs";
import { admission } from "@/layouts/NavBarDemo";
import { CheckCircle } from "lucide-react";

const AdmissionProcedure = () => {
  return (
    <div className="selection container">
      <div className="grid md:grid-cols-4 gap-2">
        <div className="">
          <BreadCrumbs menuLists={admission} />
        </div>
        <div className="col-span-3">
          <h1 className="mb-4 text-2xl font-bold">
            <span className="bg-text-next">Admission</span> Procedure
          </h1>
          <p className="leading-relaxed">
            We enroll new students once in year at the beginning of academic
            year on the basis of their performance in SEE examination, written
            test during entrance examination, previous academic performance and
            through personal competence shown at the time of admission. Doing
            so, we make plan for each individual individually. Later admission
            procedures at Hrit ensure your academic future and educational
            career and success. We provide scholars equal opportunities since we
            believe that each of them is unique and with equal potential. Most
            importantly, we see the guardian’s, parent’s and students
            commitments towards their academic career. Economic conditions of
            pupils cannot be obstacles to student’s right to study.
          </p>
          <div className="">
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <h3 className="text-lg font-medium text-gray-900 my-1 first-letter">
                  Eligibility
                </h3>
              </div>

              <p className="leading-relaxed">
                Students who have passed the SEE and Equivalent examination with
                at last second division and above are eligible for humanities
                and management stream. Students are required to appear entrance
                exam and only those who get through entrance test will be
                eligible for enrollment.
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
                Students can obtain form the office desk Immediately after SLC
                results. For the purpose one can visit website.
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
                An admission procedure starts right after the SLC result. So we
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
