import { useId, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faqs } from "../../data/faqs";
import { SectionHeading } from "../../components/ui";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const id = useId();

  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          const buttonId = `${id}-q${index}`;
          const panelId = `${id}-a${index}`;
          return (
            <div
              key={faq.question}
              className={`rounded-2xl bg-white ring-1 transition-shadow ${
                open ? "shadow-md ring-brand-200" : "ring-slate-200"
              }`}
            >
              <h3 className="font-sans text-base">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-slate-900"
                >
                  {faq.question}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`shrink-0 text-brand-700 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!open}
                className="px-6 pb-6 leading-relaxed text-slate-600"
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
