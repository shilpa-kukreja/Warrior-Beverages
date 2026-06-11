export const products = [
  {
    id: 1,
    name: "Water Bottle 1L Round",
    slug: "water-bottle-1l-round",
    volume: "1L",
    material: "Tritan™ Copolyester (BPA-free)",
    color: "Clear / Customizable",
    temperature: "-20°C to 100°C",
    dimensions: "Ø 7.5cm × 26cm",
    weight: "180g",
    features: [
      "Leak-proof screw cap",
      "Wide mouth for easy cleaning",
      "Suitable for hot/cold beverages",
      "Fits most car cup holders",
    ],
    description: "Our classic 1L round bottle combines durability with elegance. Made from premium Tritan™, it's shatter-resistant, dishwasher safe, and perfect for daily hydration. The transparent body lets you see your water level, while the ergonomic design ensures comfortable grip.",
    image: "/productimage/1L-Round-Bottle.png",
    gallery: [
      "/productimage/1L-Round-Bottle.png",
      "/productimage/250ML-Round-Bottle.png",
      "/productimage/Product-500ML-Bottles.png",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Water Bottle 250ML",
    slug: "water-bottle-250ml",
    volume: "250ML",
    material: "Stainless Steel 304",
    color: "Matte Black / Rose Gold",
    temperature: "-10°C to 95°C",
    dimensions: "Ø 5.5cm × 15cm",
    weight: "120g",
    features: [
      "Vacuum insulated (keeps cold 12h / hot 6h)",
      "Sweat-proof exterior",
      "Perfect for kids or travel size",
    ],
    description: "Compact and stylish, the 250ml bottle is ideal for short trips, kids' lunchboxes, or as a promotional giveaway. Despite its small size, it offers double-wall insulation to keep drinks at the right temperature.",
    image: "/productimage/250ML-Round-Bottle.png",
    gallery: [],
    inStock: true,
  },
  {
    id: 3,
    name: "Water Bottle 500ML",
    slug: "water-bottle-500ml",
    volume: "500ML",
    material: "Aluminum with BPA-free liner",
    color: "Sleek Silver / Customizable",
    temperature: "0°C to 80°C",
    dimensions: "Ø 6cm × 20cm",
    weight: "150g",
    features: [
      "Lightweight and durable",
      "Eco-friendly aluminum body",
      "Custom branding options",
    ],    
    description: "Our 500ml aluminum bottle is the perfect balance of size and portability. The BPA-free liner ensures your water tastes pure, while the customizable exterior allows you to showcase your brand in style.",
    image: "/productimage/Product-500ML-Bottles.png",
    gallery: [],
    inStock: true,
  },
];

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

export function getRelatedProducts(currentId, limit = 3) {
  return products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);
}