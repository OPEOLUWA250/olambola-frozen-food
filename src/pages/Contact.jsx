import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTruckFast,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";
import Seo from "../components/Seo";
import { PageHeader, WhatsAppButton } from "../components/ui";
import ContactCards from "./contact/ContactCards";
import ContactForm from "./contact/ContactForm";
import FAQ from "./contact/FAQ";
import { faqs } from "../data/faqs";
import { site, absoluteUrl } from "../config/site";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    url: absoluteUrl("/contact"),
    about: { "@id": `${site.url}/#business` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact ${site.name} to order frozen fish in Lagos, ask about bulk pricing or training. WhatsApp or call ${site.phone.display}.`}
        path="/contact"
        jsonLd={schemas}
      />

      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Have questions about our products or services? We're here to help. Reach out and we'll respond as soon as possible."
      />

      <section className="relative z-10 -mt-12 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <ContactCards />
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-3xl bg-brand-700 p-8 text-white">
              <h2 className="text-2xl font-bold text-white">Prefer to chat?</h2>
              <p className="mt-3 leading-relaxed text-brand-100">
                Message us directly on WhatsApp for stock, prices and delivery
                quotes.
              </p>
              <WhatsAppButton variant="light" className="mt-6 w-full">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>

            <ul className="space-y-5 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
              <li className="flex gap-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mt-1 text-lg text-brand-700"
                />
                <span>
                  <span className="block font-semibold text-slate-900">
                    Opening hours
                  </span>
                  <span className="text-slate-600">
                    {site.hours.days}, {site.hours.time}
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className="mt-1 text-lg text-brand-700"
                />
                <span>
                  <span className="block font-semibold text-slate-900">
                    Delivery
                  </span>
                  <span className="text-slate-600">
                    Across Lagos. Cost depends on your location.
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <FontAwesomeIcon
                  icon={faBoxesStacked}
                  className="mt-1 text-lg text-brand-700"
                />
                <span>
                  <span className="block font-semibold text-slate-900">
                    Bulk orders
                  </span>
                  <span className="text-slate-600">
                    Special pricing for bulk and wholesale buyers.
                  </span>
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-brand-50 px-4 py-24 md:px-6">
        <FAQ />
      </section>
    </>
  );
}
