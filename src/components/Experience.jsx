import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="section-title">EXPERIENCE HRIT</h1>

          <p className="text-gray-700 mt-4">
            At HRIT, we are committed to innovation and excellence. We have proudly introduced Special Law in +2 education, bringing legal studies into the spotlight.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-primary mb-4">Building Future Leaders</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe that advancing legal professionalism, serving the public, and upholding justice is a challenging yet rewarding journey.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With a passion for education, we strive to nurture future leaders, skilled professionals, and ethical advocates. Through research, scholarship, and practical experiences, our students gain a deep understanding of law and legal institutions, shaping a brighter future for justice and society.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-school-secondary">
                <h4 className="font-medium text-gray-900 mb-1">Legal Excellence</h4>
                <p className="text-sm text-gray-700">Specialized curriculum focused on legal principles and applications</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-school-secondary">
                <h4 className="font-medium text-gray-900 mb-1">Ethical Advocacy</h4>
                <p className="text-sm text-gray-700">Training students to uphold justice with integrity and ethics</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-school-secondary">
                <h4 className="font-medium text-gray-900 mb-1">Research Focus</h4>
                <p className="text-sm text-gray-700">Engaging students in research to develop critical thinking</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-school-secondary">
                <h4 className="font-medium text-gray-900 mb-1">Practical Learning</h4>
                <p className="text-sm text-gray-700">Hands-on experiences to apply theoretical knowledge</p>
              </div>
            </div>
            
            <Link to="/programs">
              <Button className="bg-school-primary text-white hover:bg-school-dark">
                Explore Our Programs
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Students discussing in a group"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
