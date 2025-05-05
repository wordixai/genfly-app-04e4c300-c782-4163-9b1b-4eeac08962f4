export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee shop interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-100 p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-amber-800 font-bold text-xl">Est. 2010</p>
                <p className="text-amber-700">13 years of coffee excellence</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
            
            <p className="text-amber-700 mb-6">
              Brew Haven was born from a simple passion: creating the perfect cup of coffee in a space that feels like home. Founded in 2010 by coffee enthusiasts Jane and Michael Thompson, our shop has grown from a small corner café to a beloved community gathering place.
            </p>
            
            <p className="text-amber-700 mb-6">
              We source our beans directly from sustainable farms across the globe, ensuring fair compensation for farmers and the highest quality for our customers. Each batch is roasted in-house to bring out the unique character of every origin.
            </p>
            
            <p className="text-amber-700">
              Beyond coffee, we're committed to creating a warm, welcoming environment where connections are made, ideas are born, and community thrives. Whether you're stopping by for your morning brew, meeting friends, or settling in for an afternoon of work, we're honored to be part of your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}