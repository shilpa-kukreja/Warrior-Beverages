export const products = [
 {
  id: 1,
  name: "Neysa Premium Water 1L",
  slug: "neysa-premium-water-1l",
  price: 30,
  volume: "1L",
  material: "Premium Food-Grade Bottle Material",
  color: "Clear / Customizable",
  temperature: "Suitable for chilled storage",
  dimensions: "Standard 1L Bottle Size",
  weight: "Approx. 180g",
  features: [
    "Ideal for all-day hydration",
    "Perfect for offices and families",
    "Convenient for travel and outdoor use",
    "Advanced purification standards",
    "Consistent freshness in every bottle"
  ],
  description:
    "Designed for extended hydration throughout the day, the 1L Neysa Premium Water bottle is the ideal choice for offices, homes, travel, events, and active lifestyles. With dependable quality and refreshing taste, it helps keep you hydrated during long workdays and busy schedules.",
  image: "/productimage/1000ml.png",
  gallery: [
    "/productimage/1000ml.png",
  
  ],
  inStock: true
},
 
  {
  id: 2,
  name: "Neysa Premium Water 500ML",
  slug: "neysa-premium-water-500ml",
  price: 20,
  volume: "500ML",
  material: "Premium Food-Grade Bottle Material",
  color: "Clear",
  temperature: "Best served chilled",
  dimensions: "Standard 500ML Bottle Size",
  weight: "Approx. 150g",
  features: [
    "Convenient everyday hydration",
    "Easy to carry while travelling",
    "Suitable for work, fitness, and leisure",
    "Premium packaging with secure sealing",
    "Clean and refreshing drinking experience"
  ],
  description:
    "The perfect balance between portability and hydration, the 500ML bottle is ideal for daily use, office environments, travel, fitness activities, and outdoor routines. Designed for modern lifestyles, it offers refreshing hydration whenever and wherever you need it.",
  image: "/productimage/250ml.png",
  gallery: [
    "/productimage/250ml.png",
    
  ],
  inStock: true,
},

{
  id: 3,
  name: "Neysa Premium Water 250ML",
  slug: "neysa-premium-water-250ml",
  price: 10,
  volume: "250ML",
  material: "Premium Food-Grade Bottle Material",
  color: "Clear",
  temperature: "Best served chilled",
  dimensions: "Standard 250ML Bottle Size",
  weight: "Approx. 120g",
  features: [
    "Convenient single-serve pack",
    "Easy to carry and distribute",
    "Ideal for events and hospitality",
    "Hygienically packed for freshness",
    "Consistent quality and refreshing taste"
  ],
  description:
    "Perfectly sized for convenience, the 250ML bottle is designed for events, meetings, hospitality services, travel, and on-the-go refreshment. Compact yet dependable, it delivers the same trusted purity and refreshing taste that defines every bottle of Neysa Premium Water.",
  image: "/productimage/500ml.png",
  gallery: [
    "/productimage/500ml.png",
    
  ],
  inStock: true,
},
];

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

export function getRelatedProducts(currentId, limit = 3) {
  return products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);
}