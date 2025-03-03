import BreadCrumbs from "@/components/BreadCrumbs";
import { components } from "@/layouts/NavBarDemo";

export default function OurDirector() {
  return (
    <div className="section container">
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <BreadCrumbs menuLists={components} />
        </div>
        <div className="col-span-3">
          <h1 className="mb-6 text-2xl font-bold">
            <span className="bg-text-next">Director</span> Message
          </h1>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 flex justify-center">
              <img
                src="/teachers/director-blur.png"
                alt="teacher"
                height={300}
                width={300}
                className="rounded-lg"
              />
            </div>
            <div className="col-span-8 space-y-6 text-justify">
              <p>
                As an academic director of Hrit Academy, I must promise my
                commitment and excellence towards the greatness of this
                institution. As an ethical and professional legal individual, I
                believe my success is synonymous with the success of Hrit
                Academy. After my extensive experience of 32 years in different
                colleges and institutions and through my exceptional
                participation as an artistic and creative writer, I come with
                the fact that the education system of +2 must be enhanced,
                redefined, and redecorated. +2 education is fundamental to
                establishing the foundation in any stream.
              </p>
            </div>
            <div className="col-span-12 space-y-4 text-justify">
              <p>
                Our prime concern is to nurture the students with human values
                and professional ethics which can help them grow as good human
                beings not only for themselves but for society and the nation
                as well. Besides the curriculum, as an academic director, we
                are looking for all possible ways to make them creative,
                adventurous, and imaginative to spread their wings by airing
                their thoughts. We promote our students to be capable enough to
                make a difference in this age of globalization. With the creed
                ‘A world-class education with the world in your class,’ we
                blend our education with the latest global trends and
                pedagogy.
              </p>
              <p>
                I am quite happy to work as an academic director in a pioneer
                legal institution in Nepal to uplift Legal Education and
                equally help the Government of Nepal by producing and preparing
                competent manpower in the legal field. We have an excellent,
                experienced, dynamic, and energetic faculty team. After the
                incredible success of Law and Management streams, we are ready
                to set a new landmark by introducing Science and Fine Arts
                streams from this year.
              </p>
            </div>
            <div className="col-span-12 text-center mt-6">
              <p className="font-semibold text-lg">Rewati Raj Tripathee</p>
              <p className="text-sm">Ph.D. Scholar in Criminal Law, T.U.</p>
              <p className="text-sm">Academic Director, Hrit Academy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
