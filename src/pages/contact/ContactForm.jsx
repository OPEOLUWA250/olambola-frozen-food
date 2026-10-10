import { useId, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { whatsappLink } from "../../config/site";
import { buttonClass } from "../../lib/buttonClass";

const topics = [
  "Place an order",
  "Bulk / wholesale enquiry",
  "Training programs",
  "Partnership",
  "Something else",
];

const emptyForm = {
  fullName: "",
  phone: "",
  email: "",
  topic: topics[0],
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 focus:outline-none";

function Field({ id, label, required, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        {label}
        {required ? (
          <span className="text-red-600" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-slate-500"> (optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const id = useId();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "Hello! I'm contacting you from the website.",
      "",
      `Name: ${form.fullName}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Topic: ${form.topic}`,
      "",
      form.message,
    ].filter((line) => line !== "" && line !== undefined && line !== false);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
    setForm(emptyForm);
    setSent(true);
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-10">
      <h2 className="text-2xl font-bold md:text-3xl">Send us a message</h2>
      <p className="mt-3 text-slate-600">
        Fill in the form and tap send. WhatsApp will open with your message
        ready to go, so we can reply to you quickly.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id={`${id}-name`} label="Full name" required>
          <input
            id={`${id}-name`}
            type="text"
            name="fullName"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange}
            required
            placeholder="e.g. Adaeze Okafor"
            className={inputClass}
          />
        </Field>

        <Field id={`${id}-phone`} label="Phone number">
          <input
            id={`${id}-phone`}
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 0803 123 4567"
            className={inputClass}
          />
        </Field>

        <Field id={`${id}-email`} label="Email address">
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </Field>

        <Field id={`${id}-topic`} label="What's it about?" required>
          <select
            id={`${id}-topic`}
            name="topic"
            value={form.topic}
            onChange={handleChange}
            className={inputClass}
          >
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field id={`${id}-message`} label="Message" required>
            <textarea
              id={`${id}-message`}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tell us what you need, e.g. product, number of cartons and delivery area."
              className={`${inputClass} resize-y`}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className={buttonClass("whatsapp", "lg", "w-full")}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            Send via WhatsApp
          </button>
          <p role="status" className="mt-4 text-center text-sm text-slate-500">
            {sent
              ? "WhatsApp should now be open with your message. Just tap send there."
              : "We'll respond to your message as soon as possible."}
          </p>
        </div>
      </form>
    </div>
  );
}
