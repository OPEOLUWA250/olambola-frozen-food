import {
  faVideo,
  faHandshake,
  faTractor,
} from "@fortawesome/free-solid-svg-icons";

export const trainingPrograms = [
  {
    id: "video",
    title: "Video Training Course",
    icon: faVideo,
    price: "From $299",
    priceValue: "299",
    duration: "Self-paced · 8–12 weeks",
    description:
      "Comprehensive online video training covering everything you need to start your fish farm.",
    includes: [
      "Farm setup and design",
      "Water quality management",
      "Fish species selection",
      "Feeding and nutrition",
      "Disease prevention",
      "Business planning",
      "Harvesting and processing",
      "Lifetime access to course materials",
    ],
    cta: "Start Learning",
  },
  {
    id: "mentorship",
    title: "One-on-One Mentorship",
    icon: faHandshake,
    price: "From $1,500",
    priceValue: "1500",
    duration: "3 months · Flexible schedule",
    description:
      "Personal guidance from Olambola experts tailored to your specific situation and goals.",
    includes: [
      "Weekly video consultation calls",
      "Personalised farm planning",
      "Species recommendations",
      "Financial projections",
      "Regulatory compliance guidance",
      "Market analysis for your region",
      "Equipment and supplier recommendations",
      "Problem-solving support",
    ],
    cta: "Request a Mentor",
    featured: true,
  },
  {
    id: "site-visit",
    title: "Farm Site Visit & Consultation",
    icon: faTractor,
    price: "Contact for pricing",
    duration: "2–3 days on-site",
    description:
      "The Olambola team visits your location for a comprehensive farm assessment and optimisation.",
    includes: [
      "Full site assessment",
      "Water quality testing",
      "Infrastructure evaluation",
      "Customised farm design",
      "Equipment recommendations",
      "Staff training (on-site)",
      "Emergency response planning",
      "1-year ongoing support",
    ],
    cta: "Schedule a Visit",
  },
];
