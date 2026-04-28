import { useSEO } from "../hooks/useSEO";
import SEOHelmet from "../components/SEOHelmet";

export default function PartnerWithUs() {
  const seoConfig = {
    title: "Partner With Us - Fish Farming Training",
    description:
      "Learn how to start your own fish farm. Olambola International offers personalized training programs from video courses to one-on-one mentorship and in-person farm consultations.",
    keywords:
      "fish farming training, aquaculture training, fish farm startup, farm consultation, mentorship program",
    url: "/partner",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Olambola International",
      description: "Fish farming and aquaculture training programs",
      url: "https://olambolainternational.com/partner",
      offers: [
        {
          "@type": "EducationalOffer",
          name: "Video Training Course",
          description:
            "Comprehensive online video training for starting a fish farm",
        },
        {
          "@type": "EducationalOffer",
          name: "One-on-One Mentorship",
          description:
            "Personalized mentorship from experienced aquaculture experts",
        },
        {
          "@type": "EducationalOffer",
          name: "Farm Site Visit & Consultation",
          description: "On-site consultation and assessment by Olambola team",
        },
      ],
    },
  };

  useSEO(seoConfig);

  const trainingPrograms = [
    {
      id: 1,
      title: "Video Training Course",
      icon: "fas fa-video",
      price: "Starting from $299",
      duration: "Self-paced • 8-12 weeks",
      description:
        "Comprehensive online video training covering everything you need to start your fish farm.",
      includes: [
        "Farm setup and design",
        "Water quality management",
        "Fish species selection",
        "Feeding and nutrition",
        "Disease prevention",
        "Business planning",
        "Harvesting and processing",
        "Lifetime access to course materials",
      ],
      color: "#3B82F6",
      cta: "Start Learning",
    },
    {
      id: 2,
      title: "One-on-One Mentorship",
      icon: "fas fa-handshake",
      price: "Starting from $1,500",
      duration: "3 months • Flexible schedule",
      description:
        "Personal guidance from Olambola experts tailored to your specific situation and goals.",
      includes: [
        "Weekly video consultation calls",
        "Personalized farm planning",
        "Species recommendations",
        "Financial projections",
        "Regulatory compliance guidance",
        "Market analysis for your region",
        "Equipment and supplier recommendations",
        "Problem-solving support",
      ],
      color: "#4F46E5",
      cta: "Request Mentor",
    },
    {
      id: 3,
      title: "Farm Site Visit & Consultation",
      icon: "fas fa-building",
      price: "Contact for pricing",
      duration: "2-3 days on-site",
      description:
        "Olambola team visits your location for comprehensive farm assessment and optimization.",
      includes: [
        "Full site assessment",
        "Water quality testing",
        "Infrastructure evaluation",
        "Customized farm design",
        "Equipment recommendations",
        "Staff training (on-site)",
        "Emergency response planning",
        "1-year ongoing support",
      ],
      color: "#10B981",
      cta: "Schedule Visit",
    },
  ];

  return (
    <>
      <SEOHelmet config={seoConfig} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-32 pb-16">
        {/* Hero Section */}
        <section className="px-4 py-16 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1E40AF] mb-4">
            Partner With Us
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Learn from industry experts and start your successful fish farming
            journey with Olambola International's proven training programs.
          </p>
        </section>

        {/* Why Partner Section */}
        <section className="px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E40AF] mb-12 text-center">
              Why Partner With Olambola?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
                <div className="text-5xl text-[#1E40AF] mb-4">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1E40AF] mb-4">
                  Expert Knowledge
                </h3>
                <p className="text-gray-800 text-lg">
                  Decades of combined experience in sustainable aquaculture and
                  fish farming operations.
                </p>
              </div>

              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
                <div className="text-5xl text-[#1E40AF] mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1E40AF] mb-4">
                  Proven Success
                </h3>
                <p className="text-gray-800 text-lg">
                  Hundreds of successful farm startups guided by our methodology
                  and support systems.
                </p>
              </div>

              <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/50 transition-all duration-300">
                <div className="text-5xl text-[#1E40AF] mb-4">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1E40AF] mb-4">
                  Sustainability First
                </h3>
                <p className="text-gray-800 text-lg">
                  Learn sustainable practices that protect the environment while
                  maximizing profitability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section className="px-4 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E40AF] mb-12 text-center">
              Our Training Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trainingPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Header with solid color */}
                  <div
                    className="p-8 text-white"
                    style={{ backgroundColor: program.color }}
                  >
                    <div className="text-5xl mb-4">
                      <i className={program.icon}></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-white/90 text-sm">{program.duration}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-2xl font-bold text-[#1E40AF] mb-4">
                      {program.price}
                    </p>
                    <p className="text-gray-800 mb-6">{program.description}</p>

                    <h4 className="font-bold text-gray-900 mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3 mb-8 flex-1">
                      {program.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-check text-[#1E40AF] mr-3 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105`}
                    >
                      {program.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E40AF] mb-12 text-center">
              How Our Training Works
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E40AF] text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1E40AF] mb-2">
                    Assessment
                  </h3>
                  <p className="text-gray-800 text-lg">
                    We understand your goals, location, resources, and
                    experience level to create a personalized learning path.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E40AF] text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1E40AF] mb-2">
                    Customized Training
                  </h3>
                  <p className="text-gray-800 text-lg">
                    Receive tailored content and guidance specifically designed
                    for your farm setup, climate, and market.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E40AF] text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1E40AF] mb-2">
                    Implementation
                  </h3>
                  <p className="text-gray-800 text-lg">
                    Step-by-step implementation support with real-time problem
                    solving and expert guidance.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E40AF] text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1E40AF] mb-2">
                    Long-term Support
                  </h3>
                  <p className="text-gray-800 text-lg">
                    Ongoing support to ensure your farm's success and help you
                    scale your operations over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4">
          <div className="max-w-4xl mx-auto bg-[#1E40AF] rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Fish Farming Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Choose a program below or contact us to discuss your specific
              needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1E40AF] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                Explore Programs
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
