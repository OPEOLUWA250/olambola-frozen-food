import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faFileInvoiceDollar,
  faTruckFast,
  faFish,
  faGraduationCap,
  faSeedling,
  faSnowflake,
  faCrown,
  faLeaf,
  faHandshake,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { gallery } from "../../data/products";
import { trainingPrograms } from "../../data/training";
import { ButtonLink, SectionHeading, WhatsAppButton } from "../ui";

const steps = [
  {
    icon: faComments,
    title: "Message us",
    text: "Send us a WhatsApp message with the product and number of cartons you need.",
  },
  {
    icon: faFileInvoiceDollar,
    title: "Get a quote",
    text: "We confirm availability, price and the delivery cost for your location.",
  },
  {
    icon: faTruckFast,
    title: "Receive your order",
    text: "We deliver your order to you anywhere in Lagos.",
  },
];

export function HowToOrder() {
  return (
    <section className="bg-brand-50 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="How it works" title="Ordering is simple" />

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-100"
            >
              <span className="absolute top-6 right-7 font-display text-5xl font-extrabold text-brand-100">
                {i + 1}
              </span>
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-700 text-xl text-white">
                <FontAwesomeIcon icon={step.icon} />
              </span>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <WhatsAppButton
            size="lg"
            message="Hello Olambola, I'd like to place an order."
          >
            Start your order
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

export function StoryPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="order-2 md:order-1">
          <SectionHeading
            eyebrow="About Olambola"
            title="Our Story"
            align="left"
          />
          <div className="-mt-4 space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Olambola International was founded on a simple belief: everyone
              deserves access to premium quality fish and seafood. What started
              as a passion for connecting people with the finest aquatic
              products has grown into a trusted brand known for excellence and
              integrity.
            </p>
            <p>
              We work with trusted suppliers and processors around the world to
              bring you products that are not only delicious but also handled
              with care at every step.
            </p>
          </div>
          <ButtonLink to="/about" className="mt-8">
            Learn more about us
            <FontAwesomeIcon icon={faArrowRight} />
          </ButtonLink>
        </div>

        <div className="order-1 md:order-2">
          <img
            src="/images/cartons-loaded-on-truck.webp"
            alt="A truck loaded with frozen fish cartons"
            width="812"
            height="1080"
            loading="lazy"
            className="aspect-4/5 w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: faSnowflake,
    title: "Premium Frozen Foods",
    description:
      "Expertly frozen fish, chicken, goat meat, shrimps and other protein options preserved at peak quality and nutrition.",
  },
  {
    icon: faFish,
    title: "Fresh Fish & Livestock Farming",
    description:
      "Aquaculture practices delivering fresh, premium-quality fish and livestock products directly to your table.",
  },
  {
    icon: faSeedling,
    title: "Farm Produce & Live Fish Supply",
    description:
      "Direct access to freshly harvested farm produce and live fish supply, ensuring peak freshness and quality.",
  },
  {
    icon: faGraduationCap,
    title: "Frozen Food & Fish Farming Training",
    description:
      "Training programs designed to equip you with industry expertise and best practices in food preservation and aquaculture.",
  },
];

export function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Our Services"
          subtitle="We're committed to delivering excellence across every part of our operations."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">
                <FontAwesomeIcon icon={s.icon} />
              </span>
              <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: faCrown,
    title: "Premium Quality",
    description:
      "Hand-selected products from trusted suppliers. Every carton meets our strict quality standards.",
  },
  {
    icon: faLeaf,
    title: "Responsible Sourcing",
    description:
      "We work with established processors and keep stock properly frozen until it reaches you.",
  },
  {
    icon: faHandshake,
    title: "Expert Service",
    description:
      "Our team is here to help. Get personal recommendations for your home, shop or business.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 size-[32rem] rounded-full bg-brand-700/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Why Olambola"
          title="Why Choose Olambola?"
          subtitle="We're committed to excellence in every part of our business."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-white text-xl text-brand-700">
                <FontAwesomeIcon icon={r.icon} />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-100">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="From our cold room"
          subtitle="A look at the stock we handle and the deliveries we receive."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.map((photo) => (
            <figure
              key={photo.src}
              className="group aspect-3/4 overflow-hidden rounded-2xl bg-slate-100 shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrainingPreview() {
  return (
    <section className="bg-brand-50 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Training"
          title="Start Your Fish Farming Journey"
          subtitle="Learn from industry experts with practical training programs designed to help you succeed in aquaculture."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {trainingPrograms.map((p) => (
            <Link
              key={p.id}
              to={`/training#${p.id}`}
              className="group flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-100 transition-shadow hover:shadow-xl"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-700 text-xl text-white">
                <FontAwesomeIcon icon={p.icon} />
              </span>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {p.duration}
              </p>
              <p className="mt-4 flex-1 leading-relaxed text-slate-600">
                {p.description}
              </p>
              <p className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="font-display text-lg font-bold text-brand-700">
                  {p.price}
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-brand-700 transition-transform group-hover:translate-x-1"
                />
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink to="/training" size="lg">
            Explore all training programs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
