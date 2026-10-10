import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChartLine,
  faLeaf,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Seo from "../components/Seo";
import {
  ButtonLink,
  CtaBand,
  PageHeader,
  SectionHeading,
  WhatsAppButton,
} from "../components/ui";
import { trainingPrograms } from "../data/training";
import { site, absoluteUrl } from "../config/site";

const reasons = [
  {
    icon: faGraduationCap,
    title: "Expert Knowledge",
    text: "Decades of combined experience in aquaculture and fish farming operations.",
  },
  {
    icon: faChartLine,
    title: "Proven Methods",
    text: "Practical, step-by-step methods and support systems that help new farms get started the right way.",
  },
  {
    icon: faLeaf,
    title: "Sustainability First",
    text: "Learn sustainable practices that protect the environment while maximising profitability.",
  },
];

const steps = [
  {
    title: "Assessment",
    text: "We understand your goals, location, resources and experience level to create a personalised learning path.",
  },
  {
    title: "Customised Training",
    text: "Receive tailored content and guidance designed for your farm setup, climate and market.",
  },
  {
    title: "Implementation",
    text: "Step-by-step implementation support with real-time problem solving and expert guidance.",
  },
  {
    title: "Long-term Support",
    text: "Ongoing support to keep your farm on track and help you scale your operations over time.",
  },
];

const enquiry = (program) =>
  `Hello Olambola, I'm interested in the ${program}. Could you share more details?`;

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Olambola fish farming training programs",
  url: absoluteUrl("/training"),
  itemListElement: trainingPrograms.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: p.title,
      description: p.description,
      url: absoluteUrl(`/training#${p.id}`),
      provider: {
        "@type": "Organization",
        name: site.name,
        sameAs: site.url,
      },
      ...(p.priceValue && {
        offers: {
          "@type": "Offer",
          category: "Paid",
          price: p.priceValue,
          priceCurrency: "USD",
        },
      }),
    },
  })),
};

export default function Training() {
  return (
    <>
      <Seo
        title="Fish Farming Training Programs"
        description="Start or grow your fish farm with Olambola International: self-paced video training, one-on-one mentorship and on-site farm consultations."
        path="/training"
        jsonLd={courseSchema}
      />

      <PageHeader
        eyebrow="Training & partnership"
        title="Fish Farming Training"
        subtitle="Learn from industry experts and start your fish farming journey with Olambola International's practical training programs."
      >
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/training#programs" variant="light" size="lg">
            Explore programs
          </ButtonLink>
          <WhatsAppButton
            variant="ghostLight"
            size="lg"
            message="Hello Olambola, I'd like to talk to someone about your fish farming training."
          >
            Talk to an expert
          </WhatsAppButton>
        </div>
      </PageHeader>

      {/* Why partner */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Why train with us"
            title="Why Partner With Olambola?"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">
                  <FontAwesomeIcon icon={r.icon} />
                </span>
                <h3 className="mt-6 text-xl font-bold">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="scroll-mt-20 bg-brand-50 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Programs"
            title="Our Training Programs"
            subtitle="Choose the level of support that fits your goals. Not sure which one? Message us and we'll help you decide."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {trainingPrograms.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className="flex scroll-mt-24 flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand-100"
              >
                <div className="bg-brand-700 p-8 text-white">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    <FontAwesomeIcon icon={p.icon} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-100">
                    {p.duration}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="font-display text-2xl font-bold text-brand-700">
                    {p.price}
                  </p>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                  <h4 className="mt-7 text-sm font-bold tracking-[0.12em] text-slate-900 uppercase">
                    What's included
                  </h4>
                  <ul className="mt-4 flex-1 space-y-3">
                    {p.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-slate-700">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="mt-1 text-brand-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    variant="primary"
                    message={enquiry(p.title)}
                    className="mt-8 w-full"
                  >
                    {p.cta}
                  </WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeading
            eyebrow="The process"
            title="How Our Training Works"
          />
          <ol className="relative space-y-10 before:absolute before:top-2 before:bottom-2 before:left-6 before:w-0.5 before:bg-brand-100">
            {steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-6">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-700 font-display text-lg font-bold text-white ring-8 ring-white">
                  {i + 1}
                </span>
                <div className="pt-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Ready to Start Your Fish Farming Journey?"
        text="Choose a program above, or contact us to discuss your specific needs and goals."
      >
        <ButtonLink to="/training#programs" variant="light" size="lg">
          Explore programs
        </ButtonLink>
        <ButtonLink to="/contact" variant="ghostLight" size="lg">
          Contact us
        </ButtonLink>
      </CtaBand>
    </>
  );
}
