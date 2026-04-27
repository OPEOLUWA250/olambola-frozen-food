export default function ContactCards() {
  const contacts = [
    {
      title: "Phone",
      content: "+2349162964829",
      subtext: "Mon-Fri, 9AM-6PM EST",
      icon: "fas fa-phone",
    },
    {
      title: "Email",
      content: "info@olambola.com",
      subtext: "We'll respond within 24 hours",
      icon: "fas fa-envelope",
    },
    {
      title: "Location",
      content: "Lagos, Nigeria",
      subtext: "West Africa",
      icon: "fas fa-map-marker-alt",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-2xl p-6 text-center hover:bg-white/50 transition-all duration-300 shadow-lg"
        >
          <div className="text-5xl mb-4 text-[#1E40AF]">
            <i className={contact.icon}></i>
          </div>
          <h3 className="text-2xl font-bold text-[#1E40AF] mb-2">
            {contact.title}
          </h3>
          <p className="text-gray-800 font-semibold text-lg mb-2">
            {contact.content}
          </p>
          <p className="text-gray-600 text-sm">{contact.subtext}</p>
        </div>
      ))}
    </div>
  );
}
