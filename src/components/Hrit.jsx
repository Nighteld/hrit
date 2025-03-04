import { Link } from "react-router";

export default function HRIT() {
  const schools = [
    {
      name: "HOTEL MANAGEMENT",
      image: "/banner/mariot-bartenter-1.jpg",
      colSpan: "col-span-2",
    },
    { name: "SCIENCE", image: "/banner/mariot-counsil-1.jpg" },
    { name: "FINE ARTS", image: "/banner/mariot-counsil-1.jpg" },
    {
      name: "LAW",
      image: "/banner/mariot-counsil-1.jpg",
      colSpan: "col-span-2",
    },
  ];
  return (
    <div className="mt-10 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card Section */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {schools.map((school, index) => (
              <figure className="snip" key={index}>
                <img
                  className="snip__image"
                  src={school.image}
                  alt={school.name}
                />
                <figcaption className="snip__figcaption">
                  <Link to="hotel-management">
                  <h3 className="snip__title underline"> {school.name}</h3>
                  </Link>
                  <p className="snip__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className=" p-10">
          <h1>
            <span className="bg-text-next">Our</span> Mission
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The mission of the college is to produce and prepare complete
            manpower to excel in any type of tests and exams of their life.
            Including social, moral, and realistic values, our priceless strive
            is to let them grow up as responsible citizens of society and the
            globe.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            We are known for our extraordinary faculties, distinguished
            researchers, and expert scholars. Our courses are designed to
            maximize productivity and enhance competency through knowledge and
            practical skills.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            We promote abilities through a balanced, coherent, and comprehensive
            curriculum, valuing students as individuals and members of the
            college. Our goal is to nurture intellectual growth and inspire them
            to explore their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}
