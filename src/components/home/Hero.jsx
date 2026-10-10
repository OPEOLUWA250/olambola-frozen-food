import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faTruckFast,
  faBoxesStacked,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonLink, Eyebrow, WhatsAppButton } from "../ui";

const highlights = [
  { icon: faTruckFast, label: "Delivery across Lagos" },
  { icon: faBoxesStacked, label: "Bulk & wholesale pricing" },
  { icon: faWarehouse, label: "Cold-room storage" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-50 pt-32 pb-20 md:pt-40 lg:pb-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <Eyebrow>
            <FontAwesomeIcon icon={faSnowflake} />
            Frozen fish supplier · Lagos
          </Eyebrow>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Premium frozen fish,{" "}
            <span className="text-brand-700">by the carton.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl lg:mx-0">
            Olambola International supplies quality imported frozen fish — jack
            mackerel, sardines, red pomfret and more — to homes, retailers and
            businesses across Lagos.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <WhatsAppButton
              size="lg"
              message="Hello Olambola, I'd like to place an order. What do you have in stock today?"
            />
            <ButtonLink to="/#products" variant="outline" size="lg">
              See what we stock
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[15px] font-medium text-slate-700 lg:justify-start">
            {highlights.map((h) => (
              <li key={h.label} className="flex items-center gap-2">
                <FontAwesomeIcon icon={h.icon} className="text-brand-600" />
                {h.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="grid h-[26rem] grid-cols-2 grid-rows-2 gap-4 sm:h-[32rem]">
            <img
              src="/images/frozen-fish-unboxed.webp"
              alt="A carton of whole frozen fish opened for inspection"
              width="607"
              height="1080"
              fetchPriority="high"
              className="row-span-2 size-full rounded-3xl object-cover shadow-xl"
            />
            <img
              src="/images/camanchaca-jack-mackerel.webp"
              alt="Cartons of Camanchaca frozen jack mackerel"
              width="607"
              height="1080"
              className="size-full rounded-3xl object-cover shadow-xl"
            />
            <img
              src="/images/reefer-container-delivery.webp"
              alt="Refrigerated container of fish cartons being offloaded"
              width="607"
              height="1080"
              className="size-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-slate-100 lg:left-8 lg:translate-x-0">
            <span className="flex size-11 items-center justify-center rounded-full bg-brand-700 text-lg text-white">
              <FontAwesomeIcon icon={faSnowflake} />
            </span>
            <span className="text-left">
              <span className="block font-display text-sm font-bold text-slate-900">
                Correct ice fish
              </span>
              <span className="block text-sm text-slate-500">
                Order by the carton, no wahala
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
