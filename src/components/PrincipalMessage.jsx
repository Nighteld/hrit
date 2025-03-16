import { ArrowRight } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/3">
            <img
              src="https://hritacademy.edu.np/wp-content/uploads/2018/04/PRO_5535F-222x300.jpg?height=400&width=300"
              alt="Principal"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-2/3 lg:pl-12">
            <h2 className="text-3xl font-bold text-[#005B7F] mb-6">
              Principal&apos;s <span>Message</span>{" "}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Listening to our students and implementing their feedback is
              priority of ours. I feel delighted to inform you that HRIT ACADEMY
              is committed to advance learning with diverse range of
              opportunities for students. We believe in providing quality
              education that prepares students for their future careers and
              personal growth.
            </p>
            {/* <button className="mt-6 text-[#005B7F] hover:outline-2 outline-offset-2 font-semibold cursor-pointer inline-flex items-center justify-center gap-1">
              Read More
              <ArrowRight size={20} strokeWidth={2} />
            </button> */}
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 mt-6 text-sm font-medium  focus:outline-none bg-white rounded-full border border-gray-200 text-[#005B7F] hover:bg-[#005B7F] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 inline-flex items-center justify-center gap-1"
            >
              Read More
              <span className="">
              <ArrowRight size={15} strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
