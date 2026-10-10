import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faHeart,
  faCheck,
  faGlobe,
  faBrain,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Seo from "../components/Seo";
import {
  ButtonLink,
  CtaBand,
  PageHeader,
  SectionHeading,
  WhatsAppButton,
} from "../components/ui";
import { site, absoluteUrl } from "../config/site";

const values = [
  { title: "Quality First", text: "Excellence in every product" },
  { title: "Care", text: "Products handled properly at every step" },
  { title: "Integrity", text: "Honest and transparent dealings" },
  { title: "Service", text: "Customer satisfaction always" },
];

const standouts = [
  {
    icon: faGlobe,
    title: "Global Reach",
    text: "Access to premium frozen fish from established processors around the world, including Chile and Japan.",
  },
  {
    icon: faBrain,
    title: "Expert Knowledge",
    text: "Our team brings deep experience in seafood sourcing, aquaculture and quality assurance.",
  },
  {
    icon: faLeaf,
    title: "Ocean Health Commitment",
    text: "We support responsible fishing and fish-farming practices that protect our waters for the future.",
  },
];

const ceoHighlights = [
  {
    title: "Industry Pioneer",
    text: "Leading innovation in aquaculture and fish supply",
  },
  {
    title: "Global Network",
    text: "Connected with suppliers and partners worldwide",
  },
  {
    title: "Quality Focused",
    text: "Committed to excellence in every product and service",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Olambola International, a Lagos-based supplier of quality imported frozen fish, and our mission, values and leadership."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${site.name}`,
          url: absoluteUrl("/about"),
          about: { "@id": `${site.url}/#business` },
        }}
      />

      <PageHeader
        eyebrow="About us"
        title="About Olambola International"
        subtitle="Bringing premium quality frozen fish from the world's finest waters to homes and businesses across Lagos."
      />

      {/* Story */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
          <img
            src="/images/frozen-fish-open-carton.webp"
            alt="Close-up of whole frozen fish in a lined carton"
            width="900"
            height="670"
            loading="lazy"
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-2xl"
          />
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Our Story"
              align="left"
            />
            <div className="-mt-4 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                Olambola International was founded on a simple belief: everyone
                deserves access to premium quality fish and seafood. What
                started as a passion for connecting people with the finest
                aquatic products has grown into a trusted brand known for
                excellence and integrity.
              </p>
              <p>
                We work with trusted suppliers and processors around the world
                to bring you products that are not only delicious but also
                responsibly sourced. Every carton, every product and every
                interaction reflects our commitment to quality.
              </p>
              <p>
                Today, Olambola International continues to set the standard for
                premium frozen fish, serving customers who value quality,
                reliability and exceptional taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & values */}
      <section className="bg-brand-50 py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="What drives us"
            title="Our Mission & Values"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-100 md:p-10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-700 text-xl text-white">
                <FontAwesomeIcon icon={faBullseye} />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                To provide the highest quality frozen fish and seafood products,
                champion responsible fishing and fish-farming practices, and
                build lasting relationships with our customers and partners.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-100 md:p-10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-700 text-xl text-white">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Our Values</h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {values.map((v) => (
                  <li key={v.title} className="flex gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1.5 text-brand-600"
                    />
                    <span>
                      <span className="block font-semibold text-slate-900">
                        {v.title}
                      </span>
                      <span className="text-slate-600">{v.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why we stand out */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading eyebrow="Our difference" title="Why We Stand Out" />
          <div className="grid gap-6 md:grid-cols-3">
            {standouts.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">
                  <FontAwesomeIcon icon={s.icon} />
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionHeading eyebrow="Leadership" title="Meet Our CEO" />
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[2fr_3fr] md:p-10">
            {site.ceo.photo ? (
              <img
                src={site.ceo.photo}
                alt={site.ceo.name || "Olambola International CEO"}
                loading="lazy"
                className="aspect-4/5 w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="flex aspect-4/5 w-full items-center justify-center rounded-2xl bg-brand-50">
                <img
                  src="/brand/mark.png"
                  alt=""
                  width="195"
                  height="192"
                  loading="lazy"
                  className="w-2/5"
                />
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold md:text-3xl">
                {site.ceo.name || "Chief Executive Officer"}
              </h3>
              {site.ceo.name && (
                <p className="mt-1 font-medium text-brand-700">
                  Chief Executive Officer
                </p>
              )}
              <p className="mt-5 leading-relaxed text-slate-600">
                With over two decades of experience in aquaculture and
                international seafood trade, our CEO brings a wealth of
                knowledge and passion to Olambola International. Their vision
                has grown the company into a trusted provider of premium frozen
                fish and seafood products.
              </p>
              <ul className="mt-6 space-y-4">
                {ceoHighlights.map((h) => (
                  <li key={h.title} className="flex gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1.5 text-brand-600"
                    />
                    <span>
                      <span className="block font-semibold text-slate-900">
                        {h.title}
                      </span>
                      <span className="text-slate-600">{h.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's work together"
        text="Whether you're stocking a shop, feeding a family or starting a fish farm, we'd love to hear from you."
      >
        <WhatsAppButton variant="light" size="lg">
          Chat on WhatsApp
        </WhatsAppButton>
        <ButtonLink to="/contact" variant="ghostLight" size="lg">
          Contact us
        </ButtonLink>
      </CtaBand>
    </>
  );
}
