import BreadCrumbs from "@/components/BreadCrumbs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { components } from "@/layouts/NavBarDemo";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CircleCheck,
  LightbulbIcon,
  TargetIcon,
} from "lucide-react";
const projects = [
  {
    title: "Our Mission",
    description: `  To foster an environment of innovation, academic excellence, and
              personal growth, ensuring that our students emerge as responsible
              leaders and global citizens. Our focus is on developing
              individuals who are prepared to excel in any test or challenge,
              whether academic, social, moral, or realistic`,
  },
  {
    title: "Our Vision ",
    description: `To be a center of excellence in education, empowering students
                with knowledge, skills, and values that will transform them as
                leaders in their chosen fields. We seek to develop highly
                qualified leaders who will re-engineer organizations through the
                convergence of human resources expertise and state-of-the-art
                technology solutions.`,
  },
];
function CourseCard({ title, description }) {
  3333;
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          {title === "Mission" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={40}
              height={40}
              x={0}
              y={0}
              viewBox="0 0 511.335 511.335"
              style={{ enableBackground: "new 0 0 40 40" }}
              xmlSpace="preserve"
              className=""
            >
              <g>
                <circle
                  cx="264.466"
                  cy="264.466"
                  r="246.869"
                  fill="#ff6c6c"
                  transform="rotate(-45 264.438 264.534)"
                  opacity={1}
                  data-original="#ff6c6c"
                  className=""
                />
                <path
                  fill="#e63950"
                  d="M264.465 17.598v493.737c136.124 0 246.869-110.745 246.869-246.869S400.589 17.598 264.465 17.598z"
                  opacity={1}
                  data-original="#e63950"
                  className=""
                />
                <ellipse
                  cx="264.466"
                  cy="264.466"
                  fill="#f0f7ff"
                  rx="164.058"
                  ry="164.059"
                  transform="rotate(-9.5 264.93 264.869)"
                  opacity={1}
                  data-original="#f0f7ff"
                  className=""
                />
                <path
                  fill="#dfe7f4"
                  d="M264.465 100.407v328.117c90.462 0 164.059-73.597 164.059-164.059 0-90.461-73.597-164.058-164.059-164.058z"
                  opacity={1}
                  data-original="#dfe7f4"
                  className=""
                />
                <circle
                  cx="264.466"
                  cy="264.466"
                  r="81.248"
                  fill="#ff6c6c"
                  transform="rotate(-63 264.552 264.487)"
                  opacity={1}
                  data-original="#ff6c6c"
                  className=""
                />
                <path
                  fill="#e63950"
                  d="M264.465 183.218v162.496c44.801 0 81.249-36.447 81.249-81.248s-36.448-81.248-81.249-81.248z"
                  opacity={1}
                  data-original="#e63950"
                  className=""
                />
                <path
                  fill="#29376d"
                  d="M182.857 76.933 110.318 4.394a14.997 14.997 0 0 0-24.662 5.368L70.809 49.597l4.241 25.454-25.454-4.241L9.762 85.656a15.002 15.002 0 0 0-5.368 24.662l72.539 72.539a14.996 14.996 0 0 0 13.282 4.154l71.711-13a15.004 15.004 0 0 0 12.084-12.084l13-71.711a15.003 15.003 0 0 0-4.153-13.283z"
                  opacity={1}
                  data-original="#29376d"
                  className=""
                />
                <path
                  fill="#47568c"
                  d="M275.072 253.859 70.809 49.597 65.05 65.051 49.596 70.81l204.263 204.263a14.953 14.953 0 0 0 10.606 4.393c3.839 0 7.678-1.465 10.606-4.393 5.859-5.858 5.859-15.356.001-21.214z"
                  opacity={1}
                  data-original="#47568c"
                />
              </g>
            </svg>
          )}
          {title === "Vision" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={50}
              height={45}
              x={0}
              y={0}
              viewBox="0 0 68 68"
              style={{ enableBackground: "new 0 0 50 40" }}
              xmlSpace="preserve"
              className=""
            >
              <g>
                <path
                  fill="#ffd542"
                  d="M52.76 27.636a18.458 18.458 0 0 1-6.155 15.64c-1.924 1.702-3.09 4.098-3.09 6.667v.239H25.197v-.237c0-2.579-1.182-4.976-3.11-6.687a18.44 18.44 0 0 1-6.22-13.83c0-10.614 8.943-19.14 19.695-18.454 8.97.572 16.354 7.713 17.197 16.661z"
                  opacity={1}
                  data-original="#ffd542"
                  className=""
                />
                <path
                  fill="#f2c538"
                  d="M51.76 23.173c-3.015-5.207-8.519-8.834-14.797-9.236-10.758-.68-19.697 7.848-19.697 18.462 0 2.22.393 4.364 1.12 6.336a18.297 18.297 0 0 1-2.517-9.303c0-10.614 8.939-19.142 19.697-18.462 7.417.479 13.753 5.436 16.193 12.203z"
                  opacity={1}
                  data-original="#f2c538"
                  className=""
                />
                <path
                  fill="#2dcef6"
                  d="M42.097 50.182v9.57a2.54 2.54 0 0 1-2.543 2.544H29.155a2.54 2.54 0 0 1-2.543-2.543v-9.571z"
                  opacity={1}
                  data-original="#2dcef6"
                />
                <path
                  fill="#0e4a77"
                  d="M29.868 62.295a4.568 4.568 0 0 0 8.973 0z"
                  opacity={1}
                  data-original="#0e4a77"
                />
                <g fill="#003">
                  <path
                    d="M53.755 27.541c-.885-9.41-8.68-16.962-18.129-17.565a19.705 19.705 0 0 0-5.17.35 1 1 0 0 0 .398 1.96 17.686 17.686 0 0 1 4.646-.314c8.477.54 15.47 7.315 16.265 15.757.532 5.659-1.59 11.052-5.824 14.798-1.979 1.75-3.19 4.142-3.396 6.655h-4.788v-8.78a1 1 0 1 0-2 0v8.78h-2.805v-15.57h2.804v3.364a1 1 0 1 0 2 0v-3.364h1.525a3.464 3.464 0 0 0 2.448-5.917c-1.312-1.29-3.556-1.31-4.901.012a3.472 3.472 0 0 0-1.004 2.448v1.457h-2.936v-1.457c0-.92-.356-1.79-1.015-2.46-1.32-1.299-3.569-1.3-4.9.011a3.465 3.465 0 0 0 2.46 5.905h1.519v15.57h-4.785c-.207-2.509-1.426-4.906-3.415-6.671a17.504 17.504 0 0 1-5.884-13.082 17.512 17.512 0 0 1 10.436-16.012 1 1 0 0 0-.808-1.83 19.514 19.514 0 0 0-11.628 17.842c0 5.567 2.39 10.88 6.555 14.578 1.764 1.564 2.775 3.729 2.775 5.94v.236a1 1 0 0 0 1 1h.415v2.32h-1.11a1 1 0 1 0 0 2h1.11v2.118h-1.11a1 1 0 1 0 0 2h1.11v.133a3.544 3.544 0 0 0 3.504 3.538A5.568 5.568 0 0 0 34.355 67a5.57 5.57 0 0 0 5.238-3.709 3.545 3.545 0 0 0 3.504-3.538v-.133h1.11a1 1 0 1 0 0-2h-1.11V55.5h1.11a1 1 0 1 0 0-2h-1.11v-2.32h.417a1 1 0 0 0 1-1v-.238c0-2.214 1.003-4.37 2.753-5.918 4.717-4.174 7.082-10.182 6.488-16.484zm-15.931 2.614c0-.503.233-.846.418-1.034.568-.558 1.536-.539 2.073-.012.196.2.43.543.43 1.046 0 .803-.657 1.457-1.464 1.457h-1.457zm-6.936 1.457h-1.456a1.462 1.462 0 0 1-1.465-1.457c0-.503.235-.846.42-1.035a1.481 1.481 0 0 1 2.071-.011c.197.2.43.543.43 1.046zM34.355 65c-1.27 0-2.41-.672-3.044-1.705h6.087A3.574 3.574 0 0 1 34.355 65zm5.2-3.705h-10.4c-.85 0-1.542-.692-1.542-1.542v-.133h13.484c0 1.07-.734 1.675-1.543 1.675zm1.542-3.675H27.613V55.5h13.484zm0-4.118H27.613v-2.32h13.484zM10.172 16.745l3.5 2.02a1.001 1.001 0 0 0 1-1.732l-3.5-2.02a.999.999 0 1 0-1 1.732zM12.254 29.498a1 1 0 0 0-1-1h-4.04a1 1 0 1 0 0 2h4.04a1 1 0 0 0 1-1zM14.028 40.135l-3.5 2.02a1 1 0 1 0 1 1.733l3.5-2.02a1 1 0 1 0-1-1.733zM21.631 9.813c.278.481.892.64 1.366.367a.991.991 0 0 0 .394-1.286c-.027-.397-1.934-3.57-2.143-3.932a1 1 0 0 0-1.367-.366.991.991 0 0 0-.393 1.286c.027.397 1.934 3.569 2.143 3.931zM34 7.044a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0V6.044a1 1 0 0 0 1 1zM45.003 10.184a1.001 1.001 0 0 0 1.367-.367c.212-.368 2.118-3.534 2.142-3.938a.992.992 0 0 0-.392-1.287 1 1 0 0 0-1.367.367c-.212.368-2.118 3.534-2.142 3.938a.991.991 0 0 0 .392 1.287zM54.329 18.77l3.5-2.021a1 1 0 1 0-1-1.732l-3.5 2.02a1 1 0 1 0 1 1.733zM60.787 28.502h-4.041a1 1 0 1 0 0 2h4.04a1 1 0 1 0 0-2zM57.472 42.159l-3.499-2.02a1 1 0 1 0-1 1.732l3.5 2.02a1.001 1.001 0 0 0 1-1.732z"
                    fill="#000033"
                    opacity={1}
                    data-original="#000033"
                    className=""
                  />
                </g>
              </g>
            </svg>
          )}

          <CardTitle className="font-bold text-2xl text-primary">
            <span className="bg-text-next mr-2">Our</span>
            {title}
          </CardTitle>
        </div>
        {/* <h5 className="m-0">
              <span className="bg-text-next">Our</span> {title}
            </h5> */}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default function OurMission() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="section container mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-2">
          <div>
            <BreadCrumbs menuLists={components} />
          </div>
          <div className="col-span-3">
            {/* <div className="grid md:grid-cols-2 gap-6">
            <CourseCard
              title="Mission"
              description="To foster an environment of innovation, academic excellence, and
              personal growth, ensuring that our students emerge as responsible
              leaders and global citizens. Our focus is on developing
              individuals who are prepared to excel in any test or challenge,
              whether academic, social, moral, or realistic"
            />
            <CourseCard
              title="Vision"
              description="To be a center of excellence in education, empowering students
                with knowledge, skills, and values that will transform them as
                leaders in their chosen fields. We seek to develop highly
                qualified leaders who will re-engineer organizations through the
                convergence of human resources expertise and state-of-the-art
                technology solutions."
            />
          </div> */}
            <div className="py-4 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                {/* <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Purpose & Direction</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </div> */}

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Mission Card */}
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
                    <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg transition-all duration-300 group-hover:translate-y-[-4px]">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-pink-50 rounded-bl-full -z-10"></div>
                      <CardHeader className="pb-4">
                        <div className="flex items-center mb-3">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white mr-4">
                            <TargetIcon className="w-6 h-6" />
                          </div>
                          <CardTitle className="text-2xl font-bold text-primary">
                            <span className="bg-clip-text text-transparent bg-text-next">
                              Our
                            </span>{" "}
                            Mission
                          </CardTitle>
                        </div>
                        <CardDescription className="text-slate-500 font-medium">
                          Driving excellence through purposeful education
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-slate-700 leading-relaxed">
                            To foster an environment of innovation, academic
                            excellence, and personal growth, ensuring that our
                            students emerge as responsible leaders and global
                            citizens.
                          </p>
                          {/* <ul className="list-item-tick">
                            <li>asdsad</li>
                            <li>zxczxc</li>
                          </ul> */}
                          <ul className="space-y-2 list-item-before">
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">
                                Developing individuals prepared to excel in any
                                challenge
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">
                                Nurturing academic, social, and moral growth
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">
                                Creating responsible global citizens
                              </span>
                            </li>
                          </ul>
                          {/* <div className="pt-4">
                    <button className="inline-flex items-center text-pink-600 font-medium hover:text-pink-800 transition-colors">
                      Learn more about our mission
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </button>
                  </div> */}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Vision Card */}
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
                    <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg transition-all duration-300 group-hover:translate-y-[-4px]">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-50 rounded-bl-full -z-10"></div>
                      <CardHeader className="pb-4">
                        <div className="flex items-center mb-3">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white mr-4">
                            <LightbulbIcon className="w-6 h-6" />
                          </div>
                          <CardTitle className="text-2xl font-bold text-primary">
                            <span className="bg-clip-text text-transparent bg-text-next">
                              Our
                            </span>{" "}
                            Vision
                          </CardTitle>
                        </div>
                        <CardDescription className="text-slate-500 font-medium">
                          Shaping tomorrow's leaders through innovation
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-slate-700 leading-relaxed">
                            To be a center of excellence in education,
                            empowering students with knowledge, skills, and
                            values that will transform them as leaders in their
                            chosen fields.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">
                                Developing highly qualified leaders
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">
                                Re-engineering organizations through human
                                expertise
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">
                                Implementing state-of-the-art technology
                                solutions
                              </span>
                            </li>
                          </ul>
                          <div className="pt-4">
                            {/* <button className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors">
                      Discover our vision
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </button> */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                    <div className="mt-5">
                <h3 className="text-lg font-semibold ">   Choose Your Path to Success</h3>   
                      <p className="leading-relaxed">
                        HRIT offers a range of +2 programs in different streams. All
                        the programs are designed to meet the career and academic
                        aspirations of students with proper overall development. At
                        HRIT, we offer a variety of programs to help students pursue
                        their academic and career aspiration and all the programs
                        are designed to provide a strong foundation in their chosen
                        streams.
                      </p>
                    </div>
              </div>
            </div>
            {/* <h1>
            <span className="bg-text-next">Our</span> Mission
          </h1>
          <div className="space-y-4 leading-relaxed">
            <p>
              To foster an environment of innovation, academic excellence, and
              personal growth, ensuring that our students emerge as responsible
              leaders and global citizens. Our focus is on developing
              individuals who are prepared to excel in any test or challenge,
              whether academic, social, moral, or realistic
            </p>
       
          </div>

          <div className="">
            <h1>
              <span className="bg-text-next">Our</span> Vision
            </h1>
            <div className="space-y-4 leading-relaxed">
              <p>
                To be a center of excellence in education, empowering students
                with knowledge, skills, and values that will transform them as
                leaders in their chosen fields. We seek to develop highly
                qualified leaders who will re-engineer organizations through the
                convergence of human resources expertise and state-of-the-art
                technology solutions.
              </p>
        
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
