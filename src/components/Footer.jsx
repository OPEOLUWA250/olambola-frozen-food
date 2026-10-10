import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faFacebookF,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { site, whatsappLink } from "../config/site";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/#products" },
  { label: "About Us", to: "/about" },
  { label: "Training", to: "/training" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "TikTok", href: site.socials.tiktok, icon: faTiktok },
  { label: "Facebook", href: site.socials.facebook, icon: faFacebookF },
  { label: "WhatsApp", href: whatsappLink(), icon: faWhatsapp },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-[1.4fr_1fr_1.3fr]">
        <div>
          <img
            src="/brand/logo-white.png"
            alt="Olambola International"
            width="640"
            height="150"
            loading="lazy"
            className="h-11 w-auto"
          />
          <p className="mt-5 max-w-sm leading-relaxed text-brand-200">
            Quality imported frozen fish, by the carton, for homes, retailers
            and businesses across Lagos.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${s.label}`}
                  className="flex size-11 items-center justify-center rounded-full bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.14em] text-white uppercase">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.14em] text-white uppercase">
            Get in touch
          </h2>
          <ul className="mt-5 space-y-4">
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faPhone} className="mt-1 text-brand-300" />
              <a href={site.phone.href} className="hover:text-white">
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mt-1 text-brand-300"
              />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faClock} className="mt-1 text-brand-300" />
              <span>
                {site.hours.days}
                <br />
                {site.hours.time}
              </span>
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-brand-300"
              />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-brand-300 md:px-6">
          &copy;{" "}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
