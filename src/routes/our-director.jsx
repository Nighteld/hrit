import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";

export default function OurDirector() {
  return (
    <div className="section container">
      <div className="grid md:grid-cols-4 gap-2">
        <div className="">
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1>
            <span className="bg-text-next">Director</span> Message
          </h1>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4">
              <img
                src="/teachers/director-blur.png"
                alt="teacher"
                height={300}
                width={300}
              />
            </div>
            <div className="col-span-8 space-y-4 m-auto text-center">
              <p>
                As an academic director of Hrit Academy, I must promise my
                commitment and excellence towards the greatness of this
                institution. As an ethical and professional legal individual, I
                believe my success is synonymous to success of Hrit Academy.
                After my extensive experience of 32 years in different colleges
                and institutions and through my exceptional participation as an
                artistic and creative writer, I come with the fact that, the
                education system of +2 must be enhanced, redefined and
                redecorated. +2 education is fundamental to establish the
                foundation in any stream.
              </p>
              {/* <p className="section-text">
                Our prime concern is to nurture the students with human values
                and professional ethics which can help them to grow as good
                human being not only for them but for the society and nation at
                the same time. Beside the curriculum, as an academic director,
                we are looking for all possible ways to make them creative,
                adventurous and imaginative to spread their wings by airing
                their thoughts. We promote our students capable enough to make
                difference in this age of globalization. With the creed ‘A
                world-class education with the world in your class’, we blend
                our education with latest global trend and pedagogy.
              </p> */}
            </div>
            <div className="col-span-12">
              <p>
              Our prime concern is to nurture the students with human values and
              professional ethics which can help them to grow as good human
              being not only for them but for the society and nation at the same
              time. Beside the curriculum, as an academic director, we are
              looking for all possible ways to make them creative, adventurous
              and imaginative to spread their wings by airing their thoughts. We
              promote our students capable enough to make difference in this age
              of globalization. With the creed ‘A world-class education with the
              world in your class’, we blend our education with latest global
              trend and pedagogy.
              </p> 
              <p className="section-text">I am quite happy to work as an academic
              director in a pioneer legal institution in Nepal to uplift Legal
              Education and equally helps Government of Nepal by producing and
              preparing competent manpower in the legal field. We have excellent
              team experience, dynamic and energetic faculties. After the
              incredible success of Law and Management streams, we are ready to
              set a new landmark by introducing Science stream and Fine Arts
              from this year.
              </p>
            </div>
            <div className="col-span-12">
              <p className="font-semibold">
              Rewati Raj Tripathee


              </p>
              <p className="">
              Ph.D. Scholar in Criminal Law, T.U.


              </p>
              <p>
              Academic Director, Hrit Academy


              </p>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
