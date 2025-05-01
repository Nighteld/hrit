import { Check } from "lucide-react";

export default function bOurMission() {
  return (
    // <div className="container">
    //   <h1>
    //     <span className="bg-text-next">Our</span> Mission
    //   </h1>
    //   <div className="grid md:grid-cols-2 gap-8">
    //     <div>
    //       <img
    //         src="/courses/management.jpg"
    //         alt="mission-college-image"
    //         className="rounded-lg shadow-xl w-full h-auto object-cover"
    //         loading="lazy"
    //       />
    //     </div>
    //     <div className="space-y-4 leading-relaxed text-base">
    //       <p className=" text-gray-800 ">
    //         The mission of the college is to produce and prepare complete
    //         manpower to excel in any type of tests and exams of their life.
    //         Including social, moral, and realistic values, our priceless strive
    //         is to let them grow up as responsible citizens of society and the
    //         globe.
    //       </p>
    //       <p className=" text-gray-700">
    //         We are known for our extraordinary faculties, distinguished
    //         researchers, and expert scholars. Our courses are designed to
    //         maximize productivity and enhance competency through knowledge and
    //         practical skills.
    //       </p>
    //       <p className=" text-gray-700">
    //         We promote abilities through a balanced, coherent, and comprehensive
    //         curriculum, valuing students as individuals and members of the
    //         college. Our goal is to nurture intellectual growth and inspire them
    //         to explore their full potential.
    //       </p>
    //     </div>
    //   </div>
    // </div>
     <section className="py-16 bg-gray-50">
     <div className="container mx-auto px-4">
       <div className="flex flex-col md:flex-row items-center gap-12">
         <div className="md:w-1/2">
           <img
            //  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            src="/courses/management.jpg"

             alt="Students in a laboratory"
             className="rounded-lg shadow-xl w-full h-auto object-cover"
           />
         </div>
         <div className="md:w-1/2">
           <h1 className="section-title">Our Mission</h1>
           <p className="text-gray-700 mb-6 leading-relaxed">
             The mission of HRIT Academy is to produce and prepare complete manpower to excel in any type of tests and exams of their life, including social, moral, and realistic values. Our priceless strive is to let them grow up as responsible citizens of society and the globe.
           </p>
           
           <div className="space-y-4 mb-8">
             <div className="flex items-start">
               <div className="flex-shrink-0 bg-primary rounded-full p-1 mr-3">
                 <Check className="w-4 h-4 text-white" />
               </div>
               <p className="text-gray-700">Exceptional faculty composed of distinguished researchers and expert scholars</p>
             </div>
             <div className="flex items-start">
               <div className="flex-shrink-0 bg-primary rounded-full p-1 mr-3">
                 <Check className="w-4 h-4 text-white" />
               </div>
               <p className="text-gray-700">Courses designed to maximize productivity and enhance competency through knowledge</p>
             </div>
             <div className="flex items-start">
               <div className="flex-shrink-0 bg-primary rounded-full p-1 mr-3">
                 <Check className="w-4 h-4 text-white" />
               </div>
               <p className="text-gray-700">A balanced, coherent, and comprehensive curriculum that promotes intellectual growth</p>
             </div>
             <div className="flex items-start">
               <div className="flex-shrink-0 bg-primary rounded-full p-1 mr-3">
                 <Check className="w-4 h-4 text-white" />
               </div>
               <p className="text-gray-700">Focus on developing practical skills alongside theoretical knowledge</p>
             </div>
           </div>
           
           <div className="p-6 bg-light border-l-4 border-primary rounded-r-lg">
             <blockquote className="text-gray-700 italic">
               "We promote abilities through a balanced, coherent, and comprehensive curriculum, valuing students as individuals and members of the college. Our goal is to nurture intellectual growth and inspire them to explore their full potential."
             </blockquote>
           </div>
         </div>
       </div>
     </div>
   </section>
  );
}
