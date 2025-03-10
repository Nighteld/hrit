import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";
import { CircleCheck } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="section container">
      <div className="grid md:grid-cols-4 gap-2">
        <div>
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1>
            <span className="bg-text-next">Why</span> HRIT
          </h1>
          <ul className="list-style-wrapper  text-base">
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Internship will be provided to referred
              academic fields after completion of academic years.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Scholars for rural, government schools
              students, female, and students of outside valley and for
              academically sound.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> For professional education with the
              blend of the information technology and managerial skill.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Various extracurricular activities based
              on field work.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Career counseling by experts,
              scholarship available at the top colleges.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Earthquake Resistance Building.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Modern teaching pedagogy with reliable
              networking system and unlimited adventure at internet access.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Opportunities for innovation.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Excellent result with highly digitalized
              classroom along with best faculties.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Well-stocked library with numerous
              textbooks, reference materials, newspapers, and journals.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Classes like Salsa-Zumba dance, music,
              and Jyotish will be on high priority.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="w-6 h-6 flex-shrink-0" /> Tai-chi, Meditation, Global Entrance
              through games.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
