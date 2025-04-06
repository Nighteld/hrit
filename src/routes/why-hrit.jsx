import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";

export default function WhyUs() {
  return (
    <div className="section container mx-auto py-16">
      <div className="grid md:grid-cols-4 gap-2">
        <div>
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1>
            <span className="bg-text-next">Why</span> HRIT
          </h1>
          {/* <h1 className="text-4xl font-bold">
            <span className="text-amber-500">Why </span>
            <span className="text-primary">HRIT</span>
          </h1> */}
          <h2 className="text-2xl font-semibold text-primary border-l-4 border-amber-500 pl-3">
            &quot;First Law School of Nepal with Topper&apos;s Best <br />
            rChoice&quot;
          </h2>
          <h3>Academic Excellence</h3>
          {/* <h3 className="text-xl font-semibold text-primary mb-4 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-amber-500/70">
              Academic Excellence
            </h3> */}
          <ul className="space-y-2 list-item-before">
            <li>
              Our Students have outstanding academic excellence in Nepal’s Top
              10 Universities.
            </li>
            <li>
              We are proud of our faculty with both academic backgrounds and
              industry experience. They balance both old-school lectures, case
              studies, and outside-the-box pedagogy to teach students.
            </li>
            <li>
              High success rate in government services with future
              lawyers/attorneys, various hospitality and medical sectors,
              engineering, banking, business, and freelancing.
            </li>
          </ul>
          <h3>State of the Art Facilities</h3>

          <ul className="space-y-2 list-item-before">
            <li>
              We provide modern classrooms: Equipped with smart boards and
              multimedia tools to enhance learning.
            </li>
            <li>
              Fully Equipped Laboratories: Modern labs for science students to
              carry out hands-on experiments.
            </li>
            <li>
              Specialized labs for pre-engineering, pre-medical, and technology
              courses.
            </li>
            <li>
              Library: A well-equipped library with academic texts, journals,
              and research articles for all subjects.
            </li>
            <li>Quiet study area with digital library access.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
