import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { whatsappLink } from "../config/site";
import { buttonClass } from "../lib/buttonClass";

/** Internal link styled as a button. */
export function ButtonLink({ to, variant, size, className = "", children }) {
  return (
    <Link to={to} className={buttonClass(variant, size, className)}>
      {children}
    </Link>
  );
}

/** Opens WhatsApp in a new tab, optionally with a pre-filled message. */
export function WhatsAppButton({
  message,
  variant = "whatsapp",
  size = "md",
  className = "",
  children = "Order on WhatsApp",
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass(variant, size, className)}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
      <span>{children}</span>
    </a>
  );
}

/** Small uppercase label shown above section titles. */
export function Eyebrow({ children, tone = "brand", className = "" }) {
  const tones = {
    brand: "bg-brand-50 text-brand-700 ring-brand-100",
    dark: "bg-white/10 text-brand-100 ring-white/15",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] uppercase ring-1 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Section title with a solid accent line underneath. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}) {
  const centered = align === "center";
  const dark = tone === "dark";
  return (
    <div
      className={`mb-12 md:mb-14 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <Eyebrow tone={dark ? "dark" : "brand"} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${dark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      <div
        aria-hidden="true"
        className={`mt-5 h-1 w-16 rounded-full ${centered ? "mx-auto" : ""} ${dark ? "bg-white" : "bg-brand-700"}`}
      />
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${dark ? "text-brand-100" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Intro banner at the top of inner pages. */
export function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <section className="bg-brand-950 pt-36 pb-20 text-center md:pt-44 md:pb-24">
      <div className="mx-auto max-w-3xl px-4">
        {eyebrow && (
          <Eyebrow tone="dark" className="mb-5">
            {eyebrow}
          </Eyebrow>
        )}
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-1 w-16 rounded-full bg-white"
        />
        {subtitle && (
          <p className="mt-6 text-lg leading-relaxed text-brand-100 md:text-xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/** Closing call-to-action band used at the bottom of pages. */
export function CtaBand({ title, text, children }) {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-brand-700 px-6 py-14 text-center shadow-xl md:px-12">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
          {text && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
              {text}
            </p>
          )}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
