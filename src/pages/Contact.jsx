import { useSEO } from "../hooks/useSEO";
import SEOHelmet from "../components/SEOHelmet";
import ContactForm from "./contact/ContactForm";
import ContactCards from "./contact/ContactCards";
import FAQ from "./contact/FAQ";

export default function Contact() {
  const seoConfig = {
    title: "Contact Us - Get in Touch",
    description:
      "Contact Olambola Foods with questions about our premium fish and seafood products. We're here to help with fast, friendly customer service.",
    keywords:
      "contact olambola, fish delivery support, seafood customer service, order help, product inquiries",
    url: "/contact",
    type: "ContactPage",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Olambola Foods",
      url: "https://olambola.com/contact",
      description:
        "Get in touch with Olambola Foods for inquiries about our premium fish and seafood products",
      potentialAction: {
        "@type": "CommunicateAction",
        target: "https://olambola.com/contact",
      },
    },
  };

  useSEO(seoConfig);

  return (
    <>
      <SEOHelmet config={seoConfig} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-32">
        {/* Hero Section */}
        <section className="px-4 py-12 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1E40AF] mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help.
            Reach out to us and we'll respond as soon as possible.
          </p>
        </section>

        {/* Contact Information Cards */}
        <section className="px-4 mb-16">
          <ContactCards />
        </section>

        {/* Contact Form */}
        <section className="px-4 mb-16">
          <ContactForm />
        </section>

        {/* FAQ Section */}
        <section className="px-4 mb-16">
          <FAQ />
        </section>
      </div>
    </>
  );
}
