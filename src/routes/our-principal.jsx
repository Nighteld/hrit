import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";

export default function OurPrincipal() {
  return (
    <div className="section container">
      <div className="grid md:grid-cols-4 gap-2">
        <div className="">
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1>
            <span className="bg-text-next">Principal</span> Message
          </h1>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4">
              <img
                src="/teachers/principal-blur.png"
                className="rounded-lg"
                alt="teacher"
                height={300}
                width={300}
              />
            </div>
            <div className="col-span-8 space-y-6 text-justify">
              <p>
                I feel delighted to inform you that HRIT ACADEMY is committed to
                advance learning with diverse range of courses to inspire and
                fulfill pupil’s ambition; we want all our learners to achieve
                their potential during their valuable time with us. Student’s
                success is central to everything we do at our college. A candle
                does not lose anything by lighting another candle
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
            <div className="col-span-12 space-y-4 text-justify">
              <p>
                Therefore, we at HRIT encourages students to be cooperative with
                positive intent to act as a one team with integrity and take an
                imaginative and practical approaches to all that they do.
              </p>
              <p className="">
                Our prime aim is to prepare individual for the next phase of
                their lives, the world of work, entrepreneurship, advanced
                learning and career progression. At the same time HRIT is
                renowned for friendly, tolerant and progressive atmosphere where
                students are brought together by shared intellectual curiosity
                and academic ambition. Studying at HRIT is sure to be memorable
                experience as we have dedicated workforce, experienced teacher,
                honest advisors and divine commitment.
              </p>
              <p>
              At HRIT, we have two
                things in common: intellectual ability and progressive
                potential. We also have the capacity and enthusiasm for hard
                works and intellectual challenges. Prioritizing education to
                everyone, we are equally committed to attracting the students of
                exceptional talents regardless of their social, cultural and
                financial backgrounds. Thus HRIT has well-deserved reputation
                for academic excellence, openness, infirmity and strong welfare
                and students supportive system. I hope that you will choose to
                study with us and in doing so become part of exciting
                institution.
              </p>
            </div>
            <div className="col-span-12 text-end mt-6">
              <p className="font-semibold">Anand Kumar Yadav</p>
              {/* <p className="">Ph.D. Scholar in Criminal Law, T.U.</p>
              <p>Academic Director, Hrit Academy</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
