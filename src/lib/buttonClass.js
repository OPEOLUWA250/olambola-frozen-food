const base =
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary: "bg-brand-700 text-white shadow-sm hover:bg-brand-800",
  whatsapp: "bg-whatsapp text-white shadow-sm hover:bg-whatsapp-dark",
  outline:
    "border-2 border-brand-700 bg-white text-brand-700 hover:bg-brand-50",
  light: "bg-white text-brand-800 shadow-sm hover:bg-brand-50",
  ghostLight: "border-2 border-white/70 text-white hover:bg-white/10",
};

const sizes = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export const buttonClass = (variant = "primary", size = "md", extra = "") =>
  `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
