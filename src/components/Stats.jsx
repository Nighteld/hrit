const Stats = () => {
    return (
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h4 className="text-white text-3xl md:text-4xl font-bold mb-4 ">Why Choose HRIT Academy</h4>
            <p className="text-white/90">
              We take pride in our achievements and our commitment to academic excellence
            </p>
          </div>
          
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
              <div className="text-4xl md:text-5xl font-bold text-school-secondary mb-2">95%</div>
              <div className="text-xl font-semibold mb-2">Pass Rate</div>
              <p className="text-white/80">Our students consistently achieve excellent results in their exams</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
              <div className="text-4xl md:text-5xl font-bold text-school-secondary mb-2">25+</div>
              <div className="text-xl font-semibold mb-2">Experienced Faculty</div>
              <p className="text-white/80">Dedicated teachers with extensive experience in their fields</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
              <div className="text-4xl md:text-5xl font-bold text-school-secondary mb-2">12</div>
              <div className="text-xl font-semibold mb-2">Programs Offered</div>
              <p className="text-white/80">Diverse range of academic programs to meet every student's needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
              <div className="text-4xl md:text-5xl font-bold text-school-secondary mb-2">1000+</div>
              <div className="text-xl font-semibold mb-2">Alumni Network</div>
              <p className="text-white/80">Successful graduates making an impact across various industries</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Stats;
  