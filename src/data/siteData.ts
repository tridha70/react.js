export type ServiceItem = {
  id: string;
  title: string;
  category: "wellness" | "stay" | "spa";
  duration: string;
  price: string;
  description: string;
  highlights: string[];
};

export const services: ServiceItem[] = [
  {
    id: "wellness-retreat",
    title: "Wellness Retreat",
    category: "wellness",
    duration: "3 Days / 2 Nights",
    price: "$540",
    description:
      "A restorative escape with guided yoga, mindful nutrition, and reset therapies designed to refresh your body and mind.",
    highlights: ["Daily sunrise yoga", "Meditation coaching", "Healthy gourmet meals"],
  },
  {
    id: "signature-spa",
    title: "Signature Spa Therapy",
    category: "spa",
    duration: "90 Minutes",
    price: "$180",
    description:
      "A luxurious spa ritual with aromatherapy, exfoliation, and targeted body therapy for deep relaxation.",
    highlights: ["Essential oil therapy", "Hot stone massage", "Steam room access"],
  },
  {
    id: "executive-stay",
    title: "Executive Stay",
    category: "stay",
    duration: "2 Nights",
    price: "$410",
    description:
      "A premium room package for guests who need comfort, productivity, and elevated hospitality in one place.",
    highlights: ["City view suite", "Complimentary breakfast", "High-speed Wi-Fi"],
  },
];

export const testimonials = [
  { name: "Mira L.", quote: "The spa rituals and calm atmosphere were exactly what I needed." },
  { name: "David K.", quote: "Beautiful property, thoughtful staff, and seamless booking experience." },
  { name: "Sana R.", quote: "This felt like a luxury reset for work stress and personal wellness." },
];
