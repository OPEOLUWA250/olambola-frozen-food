export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-32 pb-16">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1E40AF] mb-4">
          About Olambola Foods
        </h1>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
          Bringing premium quality fish and seafood from the world's finest
          waters to your table since day one.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1E40AF] mb-8">Our Story</h2>
          <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Olambola Foods was founded on a simple belief: everyone deserves
              access to premium quality fish and seafood. What started as a
              passion for connecting people with the finest aquatic products has
              grown into a trusted brand known for excellence and integrity.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              We work directly with sustainable fisheries and trusted suppliers
              around the world to bring you products that are not only delicious
              but also responsibly sourced. Every catch, every product, every
              interaction reflects our commitment to quality.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Today, Olambola Foods continues to set the standard for premium
              fish and seafood, serving customers who value quality,
              sustainability, and exceptional taste.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1E40AF] mb-12 text-center">
            Our Mission & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-bullseye text-3xl text-[#1E40AF] mr-3"></i>
                <h3 className="text-2xl font-bold text-[#1E40AF]">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                To provide the highest quality fresh and frozen fish and seafood
                products while championing sustainable fishing practices and
                building lasting relationships with our customers and partners.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-heart text-3xl text-[#1E40AF] mr-3"></i>
                <h3 className="text-2xl font-bold text-[#1E40AF]">
                  Our Values
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#1E40AF] mr-3 mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Quality First</p>
                    <p className="text-gray-700">Excellence in every product</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#1E40AF] mr-3 mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Sustainability
                    </p>
                    <p className="text-gray-700">Protecting our oceans</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#1E40AF] mr-3 mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Integrity</p>
                    <p className="text-gray-700">
                      Honest and transparent dealings
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#1E40AF] mr-3 mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Service</p>
                    <p className="text-gray-700">
                      Customer satisfaction always
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out Section */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1E40AF] mb-12 text-center">
            Why We Stand Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Global Reach */}
            <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
              <div className="text-5xl text-[#1E40AF] mb-4">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1E40AF] mb-4">
                Global Reach
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Access to premium fish and seafood from the world's finest and
                most sustainable fisheries.
              </p>
            </div>

            {/* Expert Knowledge */}
            <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
              <div className="text-5xl text-[#1E40AF] mb-4">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1E40AF] mb-4">
                Expert Knowledge
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Our team brings decades of experience in seafood sourcing and
                quality assurance.
              </p>
            </div>

            {/* Ocean Health */}
            <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
              <div className="text-5xl text-[#1E40AF] mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1E40AF] mb-4">
                Ocean Health Commitment
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                We actively support sustainable fishing practices and ocean
                conservation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
