export default function OurServices() {
  const services = [
    {
      icon: "fas fa-fish",
      title: "Fresh Fish and Live Stock Farming",
      description:
        "Sustainable aquaculture practices delivering fresh, premium-quality fish and livestock products directly to your table.",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Frozen Food Training",
      description:
        "Comprehensive training programs designed to equip you with industry expertise and best practices in food preservation.",
    },
    {
      icon: "fas fa-leaf",
      title: "Fresh Farm Produce and Live Fish Supply",
      description:
        "Direct access to freshly harvested farm produce and live fish supply, ensuring peak freshness and quality.",
    },
    {
      icon: "fas fa-snowflake",
      title: "Premium Frozen Foods",
      description:
        "Expertly frozen chicken, goat meat, shrimps, and diverse protein options preserved at peak quality and nutrition.",
    },
  ];

  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1E40AF] via-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to delivering excellence across every aspect of our
            operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#1E40AF]/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Card Content */}
              <div className="p-8 h-full flex flex-col transition-all duration-500 group-hover:bg-[#1E40AF]/5">
                {/* Icon Container */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="bg-[#1E40AF]/10 p-6 rounded-2xl text-[#1E40AF] text-4xl group-hover:bg-[#1E40AF] group-hover:text-white shadow-lg transform group-hover:scale-110 transition-all duration-500">
                    <i className={service.icon}></i>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-center text-[#1E40AF] transition-all duration-500 group-hover:text-[#1E40AF]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-center text-gray-700 transition-all duration-500 group-hover:text-gray-900 flex-grow">
                  {service.description}
                </p>

                {/* Bottom Accent Bar */}
                <div className="mt-6 h-1 bg-[#1E40AF]/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-center"></div>
              </div>

              {/* Border Accent on Hover */}
              <div className="absolute inset-0 border-2 border-[#1E40AF]/0 group-hover:border-[#1E40AF]/50 rounded-2xl pointer-events-none transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-6">
            Ready to experience excellence in aquaculture and food services?
          </p>
          <a
            href="https://wa.me/2349162964829"
            className="inline-block bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get in Touch With Us
          </a>
        </div>
      </div>
    </section>
  );
}
