import { useSEO } from "../hooks/useSEO";
import SEOHelmet from "../components/SEOHelmet";
import Carousel from "../components/Carousel";
import WhyChooseOlambola from "../components/WhyChooseOlambola";

export default function Home() {
  const seoConfig = {
    title: "Premium Fish & Seafood Delivery",
    description: "Discover premium quality fresh and frozen fish, seafood, and sustainable fishing products from Olambola Foods. Fast delivery, premium quality guaranteed.",
    keywords: "frozen fish, seafood delivery, premium fish, fresh frozen fish, sustainable seafood, buy fish online",
    url: "/",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Olambola Foods",
      "description": "Premium quality fish and seafood supplier",
      "url": "https://olambola.com",
      "image": "https://olambola.com/logo.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    }
  };

  useSEO(seoConfig);

  return (
    <>
      <SEOHelmet config={seoConfig} />
      <div className="w-full">
        <Carousel />
        <WhyChooseOlambola />
      </div>
    </>
  );
}
