/**
 * Single source of truth for business details.
 * Update contact info here and it changes everywhere on the site.
 */
export const site = {
  name: "Olambola International",
  url: "https://olambolainternational.com",
  tagline: "Premium frozen fish, by the carton",
  description:
    "Olambola International supplies quality imported frozen fish — jack mackerel, sardines, red pomfret and more — by the carton across Lagos. Order easily on WhatsApp.",
  phone: {
    display: "+234 916 296 4829",
    href: "tel:+2349162964829",
  },
  whatsappNumber: "2349162964829",
  email: "info@olambola.com",
  hours: {
    days: "Monday – Friday",
    time: "9:00 AM – 6:00 PM (WAT)",
  },
  location: "Lagos, Nigeria",
  socials: {
    tiktok: "https://www.tiktok.com/@olambola",
    facebook: "https://www.facebook.com/olambola",
  },
  // Add a photo at public/images/ceo.jpg and set `photo: "/images/ceo.jpg"`
  ceo: {
    name: "",
    photo: "",
  },
};

export const absoluteUrl = (path = "/") =>
  `${site.url}${path === "/" ? "" : path}`;

export const whatsappLink = (message) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const orderMessage = (product) =>
  `Hello Olambola, I'd like to order ${product}. Is it available, and what's the price?`;
