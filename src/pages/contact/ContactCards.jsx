import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { site, whatsappLink } from "../../config/site";

const contacts = [
  {
    title: "WhatsApp",
    content: site.phone.display,
    subtext: "Fastest way to order",
    icon: faWhatsapp,
    href: whatsappLink("Hello Olambola, I'd like to make an enquiry."),
    external: true,
  },
  {
    title: "Phone",
    content: site.phone.display,
    subtext: `${site.hours.days}, ${site.hours.time}`,
    icon: faPhone,
    href: site.phone.href,
  },
  {
    title: "Email",
    content: site.email,
    subtext: "We'll respond within 24 hours",
    icon: faEnvelope,
    href: `mailto:${site.email}`,
  },
  {
    title: "Location",
    content: site.location,
    subtext: "Delivering across Lagos",
    icon: faLocationDot,
  },
];

export default function ContactCards() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {contacts.map((c) => {
        const body = (
          <>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-xl text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
              <FontAwesomeIcon icon={c.icon} />
            </span>
            <span className="mt-5 block text-sm font-bold tracking-[0.12em] text-slate-500 uppercase">
              {c.title}
            </span>
            <span className="mt-1 block font-display text-lg font-bold wrap-break-word text-slate-900">
              {c.content}
            </span>
            <span className="mt-1 block text-sm text-slate-500">
              {c.subtext}
            </span>
          </>
        );
        const cardClass =
          "group block h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200";

        return (
          <li key={c.title}>
            {c.href ? (
              <a
                href={c.href}
                {...(c.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className={`${cardClass} transition-shadow hover:shadow-lg`}
              >
                {body}
              </a>
            ) : (
              <div className={cardClass}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
