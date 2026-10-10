import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAfrica,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";
import { products } from "../../data/products";
import { orderMessage } from "../../config/site";
import { SectionHeading, WhatsAppButton } from "../ui";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="What we stock"
          title="Quality frozen fish, sourced worldwide"
          subtitle="Sold by the carton. Stock changes with each shipment, so message us for today's availability and prices."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.origin && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-800 shadow-sm">
                    <FontAwesomeIcon icon={faEarthAfrica} />
                    Product of {p.origin}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-slate-600">
                  {p.description}
                </p>
                <WhatsAppButton
                  message={orderMessage(p.name)}
                  className="mt-6 w-full"
                />
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-3xl bg-brand-700 p-8 text-white shadow-sm">
            <div>
              <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                <FontAwesomeIcon icon={faDrumstickBite} />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-white">
                Chicken, goat meat &amp; shrimps
              </h3>
              <p className="mt-3 leading-relaxed text-brand-100">
                We also supply other frozen proteins. Tell us what you need and
                we'll let you know what's available.
              </p>
            </div>
            <WhatsAppButton
              variant="light"
              message="Hello Olambola, do you have frozen chicken, goat meat or shrimps available?"
              className="mt-8 w-full"
            >
              Ask about availability
            </WhatsAppButton>
          </article>
        </div>
      </div>
    </section>
  );
}
