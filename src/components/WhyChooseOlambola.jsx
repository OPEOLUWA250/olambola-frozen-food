export default function WhyChooseOlambola() {
  const reasons = [
    {
      icon: "fas fa-crown",
      title: "Premium Quality",
      description:
        "Hand-selected products from trusted suppliers. Every catch meets our strict quality standards.",
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainable Sourcing",
      description:
        "Responsibly sourced from sustainable fisheries. We care about our oceans and their future.",
    },
    {
      icon: "fas fa-handshake",
      title: "Expert Service",
      description:
        "Our team of experts is here to help. Get personalized recommendations for your needs.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-4">
            Why Choose Olambola?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1E40AF] via-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to excellence in every aspect of our business
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-2xl p-8 hover:bg-white/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-full flex items-center justify-center">
                  <i className={`${reason.icon} text-2xl text-[#1E40AF]`}></i>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
