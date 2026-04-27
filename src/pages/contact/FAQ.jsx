import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I order from Olambola Foods?",
      answer:
        "You can place orders through our website by clicking the 'Order Now' button, or contact us directly via WhatsApp at +234 916 296 4829 for personalized assistance.",
    },
    {
      question: "Do you offer bulk orders?",
      answer:
        "Yes! We offer special pricing for bulk orders. Please contact us directly to discuss your bulk requirements and get a custom quote.",
    },
    {
      question: "What are your delivery options?",
      answer:
        "We offer fast and reliable delivery throughout Lagos. Delivery times and costs vary based on location. Contact us for specific delivery details.",
    },
    {
      question: "Are your products sustainably sourced?",
      answer:
        "We prioritize quality and freshness in all our frozen food products. We work with trusted suppliers to ensure the best standards for our customers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-[#1E40AF] mb-12 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-800 text-left">
                {faq.question}
              </h3>
              <span
                className={`text-2xl text-[#1E40AF] transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-5 border-t-2 border-[#1E40AF]/20 bg-white/20">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
