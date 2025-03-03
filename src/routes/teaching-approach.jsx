import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";
import "../../src/css/base.css";
import "../../src/css/embla-full.css";

export default function TeachingApproach() {
  const projects = [
    {
      title: "Student Publication",
      description: `Students can foster their intrapersonal talents, intellect, and knowledge only if they are allowed to reflect their competence
                into performance. And publication can be one touch stone.
                Students at Hrit publish their terminal, half yearly, yearly
                magazine, journals, leaflet and pamphlets. To make publication
                more comfortable, we have Hrit Students Council, Hrit Club and
                Hrit Publisher Group.`,
    },
    {
      title: "Research Work ",
      description: `Advancing curriculum is not enough in enhancing intellectual
              environment and thus research work can be source of entertainment,
              interactive learning, extension of class room study, social
              interaction, and most importantly learning becomes fun for
              students. Research work truly requires planning and coordination
              for all teachers, parents, administration and finally for the
              students. It is often taken as a free day out of the class room
              and generates happiness in students. It adds additional
              information.`,
    },
    {
      title: "Presentation ",
      description: ` Coherence and confidants are two inseparable essential particulars
              of presentation. Developing presentation skill is essential for
              career since it helps self-esteem, area of expertise, and
              temperament to rise up. In Hrit, we frequently allow students to
              present their activities, in front of class, in programs, while
              handling mass, and immediately after their field visit of
              respective subjects. Presentation is a part of interactive
              learning. It manipulates or participates students directly`,
    },
    {
      title: "Counselling ",
      description: `Counselling is an integral part of overall learning and it is
              specific process to motivate, and clarify the goals, potential and
              proper choices of pupils. Especially, pupils face challenges,
              dilemma and lack of identity during adolescences and thus
              counselling is unavoidable. We, here, in Hrit open students to
              express their worries, anxieties and personal problems which
              hinder them in learning process. And accordingly, through
              individual and group counselling, they are persuaded to perform
              best. Each type of students is under our surveillance. We know
              that individual during +2 education has plenty of problems, though
              they are unaware of them. Teaching in class room is not enough for
              overall progress of students. They need empathy, love, care and
              support, which we frequently provide through counselling.`,
    },
    {
      title: "Evaluation  ",
      description: `Evaluating students is always a tough job for academicians. Thus,
              planning for evaluating students is an integral part of teaching
              learning activities. We usually do evaluation through techniques
              like tests, term papers, final exam, quizzes and finally what they
              achieve in black and white papers, in another word, on the basis
              of their concrete progress. Hrit examines students on the basis of
              capacity they inherit, performance, discipline, determination,
              problem handling capacity and positive attitude. Gradual
              development is major measure of evaluation and thus unique
              students uniquely and tremendously foster their competency in
              Hrit.`,
    },
   
  ];

  return (
    <div className="section container">
      <div className="grid md:grid-cols-4 gap-2">
        <div className="">
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1>
            <span className="bg-text-next">Teaching</span> Approach
          </h1>
          <div className="">
            <p>
              Current problems of students can only be solved through developing
              new approaches in teaching learning activities. Refining
              understanding through discussion and explanation can be an
              approach to learning. Additionally, giving assignment cannot
              significantly guarantee that goal will be easily achieved.
              Therefore, here we blend education with modern technologies and
              foster students to develop their own voice and perspectives.
              Projector base learning, group work, presentation, field visit,
              research work, open book test, guest lecture, meditation, proper
              counselling, and student’s publications are few of all approaches
              which we practice.
            </p>
          </div>
        </div>
        <div className="col-span-4">
          <div className="section-text">
            <h2 className="m-0">
              <span className="bg-text-next">Group</span> Work
            </h2>
            ‘More hands make for lighter work’, ‘Two heads are better than one’,
            ‘The more the merrier’ are some of the potential of group work. It
            allows students to be more productive, creative and motivated. We
            embolden students to gear complex task and elaborate stronger
            communication skill through group work. Establishment of shared
            identity can be another benefit.
            <ol type="1" className="ml-10 my-5">
              <li>1.Increase productivity</li>
              <li>2.Skill development</li>
              <li>3.Knowing more about yourself</li>
            </ol>
          </div>

          <div className="">
            <h2 className="m-0">
              <span className="bg-text-next">Field </span> Visits
            </h2>
            <p>
              HRIT as a law college is dedicated to advancing human dignity,
              social welfare, and justice through knowledge of law. Students are
              exposed to an enriching intellectual environment with frequent
              visit to Supreme Court, District courts, Court justice, Bar
              Association, legal institutions and through guest lectures from
              the exceptional faculty professionals. Our goal is for our
              graduates to possess the core competencies essential to embark on
              the practice of law.
            </p>
            <p className="section-text">
              In case of Hotel Management, students are equally provided
              enormous chance to visit reputed hotel inside country. The guest
              lecture from veteran professor, experts, professionals and package
              hotel training are part of our endeavours. in class of eleven, at
              least three reputed hotel visit is compulsory, while in class
              twelve the horizon of their academic talents extended through
              different extra activities like wine testing class, approaching
              cocktail, arranging carnivals, celebrating Hotel Management Day
              and so forth.
            </p>
          </div>

          <div className="section-text">
            <h2 className="m-0">
              <span className="bg-text-next">Student </span> Publication
            </h2>
            <p>
              Students can foster their intrapersonal talents, intellect, and
              knowledge only if they are allowed to reflect their competence
              into performance. And publication can be one touch stone. Students
              at Hrit publish their terminal, half yearly, yearly magazine,
              journals, leaflet and pamphlets. To make publication more
              comfortable, we have Hrit Students Council, Hrit Club and Hrit
              Publisher Group.
            </p>
          </div>

          <div className="section-text">
            <h2 className="m-0">
              <span className="bg-text-next">Research </span> Work
            </h2>
            <p>
              Advancing curriculum is not enough in enhancing intellectual
              environment and thus research work can be source of entertainment,
              interactive learning, extension of class room study, social
              interaction, and most importantly learning becomes fun for
              students. Research work truly requires planning and coordination
              for all teachers, parents, administration and finally for the
              students. It is often taken as a free day out of the class room
              and generates happiness in students. It adds additional
              information.
            </p>
          </div>

          <div className="section-text">
            <h2 className="m-0 first-letter">
              <span className="">Presentation </span>
            </h2>
            <p>
              Coherence and confidants are two inseparable essential particulars
              of presentation. Developing presentation skill is essential for
              career since it helps self-esteem, area of expertise, and
              temperament to rise up. In Hrit, we frequently allow students to
              present their activities, in front of class, in programs, while
              handling mass, and immediately after their field visit of
              respective subjects. Presentation is a part of interactive
              learning. It manipulates or participates students directly
            </p>
          </div>

          <div className="section-text">
            <h2 className="m-0 first-letter">
              <span className="">Counselling</span>
            </h2>
            <p>
              Counselling is an integral part of overall learning and it is
              specific process to motivate, and clarify the goals, potential and
              proper choices of pupils. Especially, pupils face challenges,
              dilemma and lack of identity during adolescences and thus
              counselling is unavoidable. We, here, in Hrit open students to
              express their worries, anxieties and personal problems which
              hinder them in learning process. And accordingly, through
              individual and group counselling, they are persuaded to perform
              best. Each type of students is under our surveillance. We know
              that individual during +2 education has plenty of problems, though
              they are unaware of them. Teaching in class room is not enough for
              overall progress of students. They need empathy, love, care and
              support, which we frequently provide through counselling.
            </p>
          </div>

          <div className="section-text">
            <h2 className="m-0 first-letter">
              <span className="">Evaluation</span>
            </h2>
            <p>
              Evaluating students is always a tough job for academicians. Thus,
              planning for evaluating students is an integral part of teaching
              learning activities. We usually do evaluation through techniques
              like tests, term papers, final exam, quizzes and finally what they
              achieve in black and white papers, in another word, on the basis
              of their concrete progress. Hrit examines students on the basis of
              capacity they inherit, performance, discipline, determination,
              problem handling capacity and positive attitude. Gradual
              development is major measure of evaluation and thus unique
              students uniquely and tremendously foster their competency in
              Hrit.
            </p>
          </div>
        </div>

        {/* <div className="col-span-4">
          
        <HoverEffect items={projects} className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2")} />

        </div> */}
      </div>
    </div>
  );
}
