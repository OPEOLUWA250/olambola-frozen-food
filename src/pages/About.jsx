import { useSEO } from "../hooks/useSEO";
import SEOHelmet from "../components/SEOHelmet";

export default function About() {
  const seoConfig = {
    title: "About Us - Olambola Foods Story",
    description:
      "Learn about Olambola Foods: premium quality fish and seafood supplier since 2020. Sustainable fishing practices, expert team, and commitment to excellence.",
    keywords:
      "about olambola, sustainable fishing, premium seafood supplier, fish sourcing, ocean conservation, quality assurance, aquaculture",
    url: "/about",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Olambola International",
      description:
        "Premium quality fish and seafood supplier committed to sustainability and excellence",
      url: "https://olambolainternational.com/about",
      foundingDate: "2020",
      foundingLocation: "USA",
      image: "https://olambolainternational.com/olambola-logo.png",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      knowsAbout: [
        "Sustainable Fishing",
        "Premium Seafood",
        "Fish Supply",
        "Aquaculture",
      ],
      sameAs: [
        "https://www.facebook.com/olambola",
        "https://www.instagram.com/olambola",
      ],
      contact: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        telephone: "+234-916-296-4829",
      },
    },
  };

  useSEO(seoConfig);

  return (
    <>
      <SEOHelmet config={seoConfig} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-32 pb-16">
        {/* Hero Section */}
        <section className="px-4 py-16 text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-4">
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
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#1E40AF] mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E40AF] via-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-6 md:p-8 shadow-lg">
              <p className="text-gray-800 text-lg leading-relaxed mb-5 text-left">
                Olambola Foods was founded on a simple belief: everyone deserves
                access to premium quality fish and seafood. What started as a
                passion for connecting people with the finest aquatic products
                has grown into a trusted brand known for excellence and
                integrity.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed mb-5 text-left">
                We work directly with sustainable fisheries and trusted
                suppliers around the world to bring you products that are not
                only delicious but also responsibly sourced. Every catch, every
                product, every interaction reflects our commitment to quality.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed text-left">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E40AF] mb-4">
                Our Mission & Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E40AF] via-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Mission */}
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-6 md:p-7 shadow-lg">
                <div className="flex items-center justify-start mb-4">
                  <i className="fas fa-bullseye text-3xl text-[#1E40AF] mr-3"></i>
                  <h3 className="text-2xl font-bold text-[#1E40AF] text-left">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed text-left">
                  To provide the highest quality fresh and frozen fish and
                  seafood products while championing sustainable fishing
                  practices and building lasting relationships with our
                  customers and partners.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-6 md:p-7 shadow-lg">
                <div className="flex items-center justify-start mb-4">
                  <i className="fas fa-heart text-3xl text-[#1E40AF] mr-3"></i>
                  <h3 className="text-2xl font-bold text-[#1E40AF]">
                    Our Values
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#1E40AF] mr-3 mt-1"></i>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Quality First
                      </p>
                      <p className="text-gray-700">
                        Excellence in every product
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#1E40AF] mr-3 mt-1"></i>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Sustainability
                      </p>
                      <p className="text-gray-700">Protecting our oceans</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#1E40AF] mr-3 mt-1"></i>
                    <div>
                      <p className="font-semibold text-gray-900">Integrity</p>
                      <p className="text-gray-700">
                        Honest and transparent dealings
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E40AF] mb-4">
                Why We Stand Out
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E40AF] via-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Global Reach */}
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-6 md:p-7 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
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
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-6 md:p-7 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
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
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-6 md:p-7 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
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

        {/* Meet Our CEO Section */}
        <section className="px-4 mb-20 pt-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1E40AF] mb-4">
                Meet Our CEO
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E40AF] via-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8 items-center">
                {/* CEO Image */}
                <div className="flex items-center justify-center">
                  <img
                    src="/kisumeo-gen.jpg"
                    alt="CEO Portrait"
                    className="w-full h-auto rounded-2xl shadow-lg object-cover max-h-80 md:max-h-96"
                  />
                </div>

                {/* CEO Info */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#1E40AF] mb-3 text-center">
                    Chief Executive Officer
                  </h3>
                  <p className="text-gray-700 mb-5 leading-relaxed text-left">
                    With over two decades of experience in sustainable
                    aquaculture and international seafood trade, our CEO brings
                    a wealth of knowledge and passion to Olambola Foods. Their
                    vision has transformed the company into a leading provider
                    of premium fish and seafood products.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check text-[#1E40AF] mr-3 mt-1 flex-shrink-0"></i>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">
                          Industry Pioneer
                        </p>
                        <p className="text-gray-700 text-sm">
                          Leading innovation in sustainable fishing practices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check text-[#1E40AF] mr-3 mt-1 flex-shrink-0"></i>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">
                          Global Network
                        </p>
                        <p className="text-gray-700 text-sm">
                          Connected with suppliers and partners worldwide
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check text-[#1E40AF] mr-3 mt-1 flex-shrink-0"></i>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">
                          Quality Focused
                        </p>
                        <p className="text-gray-700 text-sm">
                          Committed to excellence in every product and service
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
