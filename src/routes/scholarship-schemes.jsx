import BreadCrumbs from "@/components/BreadCrumbs";
import { admission } from "@/layouts/NavBarDemo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react";
export default function ScholarShipSchemes() {
    const scholarships = [
        { percentage: "100%", description: "Scholarship in both Annual and Tuition Fee", criteria: "4 GPA in SEE", highlight: "text-red-500" },
        { percentage: "100%", description: "Scholarship in Admission Fee", criteria: "A+ in SEE", highlight: "text-gray-700" },
        { percentage: "50%", description: "Scholarship in Admission Fee", criteria: "A in SEE", highlight: "text-orange-500" },
        { percentage: "100%", description: "Scholarship in Annual and Tuition fee for Grade XII", criteria: "College Topper in Board Exam of Grade XI", highlight: "text-blue-500" },
        { percentage: "50%", description: "Scholarship in Admission Fee", criteria: "National & International Medalist", highlight: "text-orange-500" },
        { percentage: "25%", description: "Scholarship in Admission Fee", criteria: "Terminal Toppers Faculties Wise", highlight: "text-green-500" },
      ];
      
  return (
    <div className="selection container">
      <div className="grid md:grid-cols-4 gap-2">
        <div className="">
          <BreadCrumbs menuLists={admission} />
        </div>
        <div className="col-span-3">
          <h1 className="mb-4 text-2xl font-bold">
            <span className="bg-text-next">Scholarship </span> Schemes
          </h1>
          <p className="leading-relaxed">
            Prioritizing education to everyone, we are committed to attract the
            students of exceptional talents. Beside this we have equal concern
            on those who are economically down and out. Being part of society we
            are executed to perform social responsibilities. Thus, scholarship
            at Hrit equally quests to honest, capable, economically down and
            out, ethnic group, orphan, and girls from remote areas. We equally
            open scholarship schemes for players of games like Volleyball,
            Chess, Basket Ball, and Table Tennis and so on. Each year, we
            provide such scholarship for holistic development of child.
          </p>
          <div className="">
      <h2 className=" font-bold text-center mb-6">  <span className="bg-text-next">Scholarship </span>Criteria</h2>
      <div className="grid gap-4">
        {scholarships.map((scholarship, index) => (
          <Card key={index} className="shadow-lg border border-gray-200">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <Badge className={`${scholarship.highlight} font-bold text-lg`}>{scholarship.percentage}</Badge>
                <p className="text-gray-700 font-semibold mt-2">{scholarship.percentage}  {scholarship.description}</p>
              </div>
              <p className="text-sm font-medium text-gray-600">{scholarship.criteria}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
          <div className="mt-4">
            <h3 className="first-letter">Note:</h3>
            <ol className="space-y-4 leading-relaxed list-disc p-6">
              <li className="leading-relaxed">
                In case of repetition of scholarship to a single candidate under
                different criteria, single scholarship will be valid for the
                highest value.
              </li>
              <li>
                Scholarship subjected to discontinuation in the next session if
                the recipient student is unable to maintain 2.4 GPA in Terminal
                Examination and above 2.4 GPA in Board Examination. Scholarship
                will be cancelled in case of failure of discipline.
              </li>
              <li>Student must have NEB recommendation letter.</li>
              <li>
                The college management reserves the right to fix the quota as
                per situation.
              </li>
              <li>
                To get scholarship in grade XII for the Title of College Topper,
                student must obtain at least 3.60 GPA in Board Examination of
                Grade XI.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
