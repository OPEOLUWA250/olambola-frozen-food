import Seo from "../components/Seo";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import {
  HowToOrder,
  StoryPreview,
  Services,
  WhyChoose,
  Gallery,
  TrainingPreview,
} from "../components/home/sections";
import { CtaBand, WhatsAppButton } from "../components/ui";
import { site } from "../config/site";

export default function Home() {
  return (
    <>
      <Seo
        title="Premium Frozen Fish Supplier in Lagos"
        description="Buy quality imported frozen fish by the carton in Lagos: jack mackerel, sardines, red pomfret and more. Bulk pricing, delivery across Lagos, and easy ordering on WhatsApp."
        path="/"
      />
      <Hero />
      <Products />
      <HowToOrder />
      <StoryPreview />
      <Services />
      <WhyChoose />
      <Gallery />
      <TrainingPreview />
      <CtaBand
        title="Ready to order?"
        text="Message us on WhatsApp for today's stock and prices, or give us a call."
      >
        <WhatsAppButton
          variant="light"
          size="lg"
          message="Hello Olambola, I'd like to place an order. What do you have in stock today?"
        />
        <a
          href={site.phone.href}
          className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
        >
          Call {site.phone.display}
        </a>
      </CtaBand>
    </>
  );
}
