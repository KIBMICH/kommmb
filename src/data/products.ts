import type { Product } from '../types';

// Import furniture images
import furn1 from '../assets/images/furniture/furn1.jpeg';
import furn2 from '../assets/images/furniture/furn2.jpeg';
import furn3 from '../assets/images/furniture/furn3.jpeg';
import furn5 from '../assets/images/furniture/furn5.jpeg';
import furn6 from '../assets/images/furniture/furn6.jpeg';
import furn7 from '../assets/images/furniture/furn7.jpeg';

// Import toy images
import toy1 from '../assets/images/toy/toy1.jpeg';
import toy2 from '../assets/images/toy/toy2.jpeg';
import toy3 from '../assets/images/toy/toy3.jpeg';
import toy4 from '../assets/images/toy/toy4.jpeg';
import toy5 from '../assets/images/toy/toy5.jpeg';
import toy6 from '../assets/images/toy/toy6.jpeg';
import toy7 from '../assets/images/toy/toy7.jpeg';
import toy8 from '../assets/images/toy/toy8.jpeg';

export const products: Product[] = [
  {
    id: '1',
    sku: 'TP-001',
    title: 'Organic Cotton Throw Pillow',
    price: 44850, // ₦44,850
    group: 'soft-furniture',
    subcategory: 'throw-pillows',
    shortDescriptor: 'Recycled cotton blend',
    materials: ['Recycled cotton', 'Organic cotton', 'Recycled polyester fill'],
    dimensions: '18" x 18"',
    impactKG: 0.8,
    images: [furn1],
    tags: ['recycled', 'handmade', 'organic'],
    description: 'Beautiful throw pillow made from 80% recycled cotton and organic materials. Perfect for adding comfort and style to any living space.',
    careInstructions: 'Machine wash cold, tumble dry low',
    colors: ['Natural', 'Sage Green', 'Terracotta'],
    sizes: ['18x18', '20x20']
  },
  {
    id: '2',
    sku: 'BP-001',
    title: 'Eco-Comfort Bedroom Pillow',
    price: 74850, // ₦74,850
    group: 'soft-furniture',
    subcategory: 'bedroom-pillows',
    shortDescriptor: 'Sustainable memory foam',
    materials: ['Organic cotton cover', 'Recycled memory foam', 'Bamboo fiber'],
    dimensions: '20" x 26"',
    impactKG: 1.2,
    images: [furn2],
    tags: ['recycled', 'hypoallergenic'],
    description: 'Premium sleeping pillow with recycled memory foam core and organic cotton cover for ultimate comfort.',
    careInstructions: 'Spot clean only, removable cover machine washable',
    sizes: ['Standard', 'Queen', 'King']
  },
  {
    id: '3',
    sku: 'FR-001',
    title: 'Ergonomic Foot Rest',
    price: 59850, // ₦59,850
    group: 'soft-furniture',
    subcategory: 'foot-rests',
    shortDescriptor: 'Recycled foam core',
    materials: ['Recycled denim cover', 'Recycled foam', 'Natural rubber base'],
    dimensions: '16" x 12" x 6"',
    impactKG: 1.5,
    images: [furn3],
    tags: ['recycled', 'ergonomic'],
    description: 'Comfortable foot rest designed to improve posture and reduce leg fatigue, made entirely from recycled materials.',
    careInstructions: 'Spot clean with damp cloth',
    colors: ['Denim Blue', 'Charcoal']
  },
  {
    id: '7',
    sku: 'TP-002',
    title: 'Luxury Velvet Throw Pillow',
    price: 52850, // ₦52,850
    group: 'soft-furniture',
    subcategory: 'throw-pillows',
    shortDescriptor: 'Recycled velvet fabric',
    materials: ['Recycled velvet', 'Organic cotton backing', 'Recycled fill'],
    dimensions: '20" x 20"',
    impactKG: 0.9,
    images: [furn5],
    tags: ['recycled', 'luxury', 'handmade'],
    description: 'Luxurious velvet throw pillow crafted from recycled materials. Adds elegance and comfort to any space.',
    careInstructions: 'Dry clean only',
    colors: ['Emerald', 'Navy', 'Burgundy'],
    sizes: ['20x20']
  },
  {
    id: '8',
    sku: 'BP-002',
    title: 'Premium Bedroom Pillow Set',
    price: 89850, // ₦89,850
    group: 'soft-furniture',
    subcategory: 'bedroom-pillows',
    shortDescriptor: 'Set of 2 organic pillows',
    materials: ['100% Organic cotton', 'Natural latex fill', 'Bamboo fiber'],
    dimensions: '20" x 26" (Set of 2)',
    impactKG: 2.0,
    images: [furn6],
    tags: ['organic', 'hypoallergenic', 'premium'],
    description: 'Premium pillow set with natural latex filling and organic cotton covers. Perfect for a restful sleep.',
    careInstructions: 'Spot clean, removable covers machine washable',
    sizes: ['Standard', 'Queen']
  },
  {
    id: '9',
    sku: 'FR-002',
    title: 'Designer Foot Rest',
    price: 67850, // ₦67,850
    group: 'soft-furniture',
    subcategory: 'foot-rests',
    shortDescriptor: 'Modern ergonomic design',
    materials: ['Recycled fabric', 'Memory foam', 'Wooden base'],
    dimensions: '18" x 14" x 7"',
    impactKG: 1.8,
    images: [furn7],
    tags: ['recycled', 'ergonomic', 'modern'],
    description: 'Modern designer foot rest with memory foam comfort and sustainable materials.',
    careInstructions: 'Wipe clean with damp cloth',
    colors: ['Gray', 'Beige']
  },
  {
    id: '4',
    sku: 'PT-001',
    title: 'Soft Plush Fish Toy',
    price: 29850, // ₦29,850
    group: 'toys-educational',
    subcategory: 'play-toys',
    shortDescriptor: 'Safe for all ages',
    materials: ['Recycled cotton', 'Hypoallergenic fill', 'Non-toxic dyes'],
    dimensions: '12" x 6"',
    ageRange: '0-3 years',
    impactKG: 0.3,
    images: [toy1],
    tags: ['recycled', 'handmade', 'safe'],
    description: 'Adorable soft fish toy perfect for imaginative play. Made with child-safe materials and recycled textiles.',
    careInstructions: 'Machine wash gentle, air dry',
    colors: ['Blue', 'Orange', 'Rainbow']
  },
  {
    id: '5',
    sku: 'PT-002',
    title: 'Eco Bird Plush',
    price: 34350, // ₦34,350
    group: 'toys-educational',
    subcategory: 'play-toys',
    shortDescriptor: 'Handcrafted with love',
    materials: ['Organic cotton', 'Recycled polyester fill', 'Natural dyes'],
    dimensions: '10" x 8"',
    ageRange: '0-5 years',
    impactKG: 0.4,
    images: [toy2],
    tags: ['organic', 'handmade', 'safe'],
    description: 'Charming bird plush toy handcrafted from organic and recycled materials. Perfect companion for little ones.',
    careInstructions: 'Hand wash recommended, air dry',
    colors: ['Yellow', 'Red', 'Blue']
  },
  {
    id: '6',
    sku: 'EM-001',
    title: 'Counting & Sorting Learning Kit',
    price: 52350, // ₦52,350
    group: 'toys-educational',
    subcategory: 'educational-materials',
    shortDescriptor: 'Develops math skills',
    materials: ['Recycled wood', 'Non-toxic paint', 'Organic cotton bag'],
    dimensions: '10" x 8" x 3"',
    ageRange: '3-6 years',
    impactKG: 0.6,
    images: [toy3],
    tags: ['educational', 'recycled', 'montessori'],
    description: 'Complete learning kit with counting beads, sorting shapes, and activity cards. Supports early math development.',
    careInstructions: 'Wipe clean with damp cloth',
    colors: ['Natural Wood']
  },
  {
    id: '10',
    sku: 'PT-003',
    title: 'Colorful Animal Plush Set',
    price: 42850, // ₦42,850
    group: 'toys-educational',
    subcategory: 'play-toys',
    shortDescriptor: 'Set of 3 animals',
    materials: ['Recycled cotton', 'Organic fill', 'Natural dyes'],
    dimensions: 'Various sizes',
    ageRange: '1-5 years',
    impactKG: 0.5,
    images: [toy4],
    tags: ['recycled', 'handmade', 'safe'],
    description: 'Delightful set of three animal plush toys. Each one is handcrafted with care using sustainable materials.',
    careInstructions: 'Machine wash gentle, air dry',
    colors: ['Multi-color']
  },
  {
    id: '11',
    sku: 'PT-004',
    title: 'Soft Cuddle Bunny',
    price: 31850, // ₦31,850
    group: 'toys-educational',
    subcategory: 'play-toys',
    shortDescriptor: 'Ultra-soft and cuddly',
    materials: ['Organic cotton', 'Recycled fill', 'Non-toxic dyes'],
    dimensions: '14" x 8"',
    ageRange: '0-4 years',
    impactKG: 0.4,
    images: [toy5],
    tags: ['organic', 'soft', 'safe'],
    description: 'Ultra-soft bunny plush perfect for cuddling. Made with the softest organic materials.',
    careInstructions: 'Hand wash, air dry',
    colors: ['White', 'Pink', 'Gray']
  },
  {
    id: '12',
    sku: 'PT-005',
    title: 'Rainbow Elephant Toy',
    price: 36850, // ₦36,850
    group: 'toys-educational',
    subcategory: 'play-toys',
    shortDescriptor: 'Colorful and fun',
    materials: ['Recycled cotton', 'Hypoallergenic fill', 'Natural dyes'],
    dimensions: '11" x 9"',
    ageRange: '1-5 years',
    impactKG: 0.4,
    images: [toy6],
    tags: ['recycled', 'colorful', 'safe'],
    description: 'Vibrant rainbow elephant toy that sparks imagination and joy. Made from recycled materials.',
    careInstructions: 'Machine wash gentle, air dry',
    colors: ['Rainbow']
  },
  {
    id: '13',
    sku: 'EM-002',
    title: 'Alphabet Learning Blocks',
    price: 48350, // ₦48,350
    group: 'toys-educational',
    subcategory: 'educational-materials',
    shortDescriptor: 'Learn letters and words',
    materials: ['Recycled wood', 'Non-toxic paint', 'Organic cotton bag'],
    dimensions: '12" x 10" x 4"',
    ageRange: '2-6 years',
    impactKG: 0.7,
    images: [toy7],
    tags: ['educational', 'recycled', 'learning'],
    description: 'Colorful alphabet blocks for early learning. Helps children learn letters, spelling, and word formation.',
    careInstructions: 'Wipe clean with damp cloth',
    colors: ['Multi-color']
  },
  {
    id: '14',
    sku: 'PT-006',
    title: 'Friendly Monster Plush',
    price: 33850, // ₦33,850
    group: 'toys-educational',
    subcategory: 'play-toys',
    shortDescriptor: 'Cute and friendly',
    materials: ['Recycled cotton', 'Organic fill', 'Non-toxic dyes'],
    dimensions: '13" x 10"',
    ageRange: '2-6 years',
    impactKG: 0.4,
    images: [toy8],
    tags: ['recycled', 'fun', 'safe'],
    description: 'Adorable friendly monster plush that makes a perfect playmate. Soft, safe, and sustainable.',
    careInstructions: 'Machine wash gentle, air dry',
    colors: ['Green', 'Blue', 'Purple']
  }
];
