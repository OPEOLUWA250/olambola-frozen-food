import { useSEO } from "../hooks/useSEO";
import SEOHelmet from "../components/SEOHelmet";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/Carousel";
import OurServices from "../components/OurServices";
import WhyChooseOlambola from "../components/WhyChooseOlambola";

export default function Home({ onNavigate }) {
  const seoConfig = {
    title: "Premium Fish & Seafood Delivery",
    description:
      "Discover premium quality fresh and frozen fish, seafood, and sustainable fishing products from Olambola Foods. Fast delivery, premium quality guaranteed.",
    keywords:
      "frozen fish, seafood delivery, premium fish, fresh frozen fish, sustainable seafood, buy fish online",
    url: "/",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Olambola International",
      description: "Premium quality fish and seafood supplier",
      url: "https://olambola.com",
      image: "https://olambola.com/logo.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
    },
  };

  useSEO(seoConfig);

  return (
    <>
      <SEOHelmet config={seoConfig} />
      <div className="w-full">
        <HeroSection />
        <Carousel />

        {/* Our Story Preview Section */}
        <section className="px-4 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-4">
                    Our Story
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1E40AF] via-blue-400 to-cyan-400 rounded-full mx-auto md:mx-0"></div>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed mb-6 text-left">
                  Olambola Foods was founded on a simple belief: everyone
                  deserves access to premium quality fish and seafood. What
                  started as a passion for connecting people with the finest
                  aquatic products has grown into a trusted brand known for
                  excellence and integrity.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed mb-8 text-left">
                  We work directly with sustainable fisheries and trusted
                  suppliers around the world to bring you products that are not
                  only delicious but also responsibly sourced.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button
                    onClick={() => onNavigate && onNavigate("about")}
                    className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Learn More About Us
                  </button>
                </div>
              </div>

              {/* Story Image */}
              <div className="flex items-center justify-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1E40AF]/20 hover:shadow-3xl transition-all duration-300">
                  <img
                    src="/hero-images/hero-3.jpeg"
                    alt="Our Story - Olambola Foods"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurServices />

        <WhyChooseOlambola />

        {/* Training Programs Preview Section */}
        <section className="px-4 py-20 bg-white/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-4">
                Start Your Fish Farming Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E40AF] via-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Learn from industry experts with proven training programs
                designed to help you succeed in aquaculture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Program 1 */}
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#3B82F6] p-8 text-white">
                  <div className="text-5xl mb-4">
                    <i className="fas fa-video"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Video Training</h3>
                  <p className="text-white/90 text-sm">
                    Self-paced • 8-12 weeks
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-2xl font-bold text-[#1E40AF] mb-4">
                    From $299
                  </p>
                  <p className="text-gray-800 text-sm">
                    Comprehensive online training covering everything you need
                    to start your fish farm.
                  </p>
                </div>
              </div>

              {/* Program 2 */}
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#4F46E5] p-8 text-white">
                  <div className="text-5xl mb-4">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    One-on-One Mentorship
                  </h3>
                  <p className="text-white/90 text-sm">
                    3 months • Flexible schedule
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-2xl font-bold text-[#1E40AF] mb-4">
                    From $1,500
                  </p>
                  <p className="text-gray-800 text-sm">
                    Personal guidance from Olambola experts tailored to your
                    specific situation and goals.
                  </p>
                </div>
              </div>

              {/* Program 3 */}
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#10B981] p-8 text-white">
                  <div className="text-5xl mb-4">
                    <i className="fas fa-building"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Farm Site Visit</h3>
                  <p className="text-white/90 text-sm">2-3 days on-site</p>
                </div>
                <div className="p-8">
                  <p className="text-2xl font-bold text-[#1E40AF] mb-4">
                    Contact us
                  </p>
                  <p className="text-gray-800 text-sm">
                    Olambola team visits your location for comprehensive farm
                    assessment and optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => onNavigate && onNavigate("partner")}
                className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-bold px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore All Training Programs
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
