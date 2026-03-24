import type { Product } from '../types';

// Import pillow images - throw pillows
import throw1 from '../assets/images/pillow/throwpillows/throw1.jpeg';
import throw2 from '../assets/images/pillow/throwpillows/throw2.jpeg';
import throw3 from '../assets/images/pillow/throwpillows/throw3.jpeg';
import throw4 from '../assets/images/pillow/throwpillows/throw4.jpeg';
import throw5 from '../assets/images/pillow/throwpillows/throw5.jpeg';

// Import pillow images - bedroom pillows
import bed1 from '../assets/images/pillow/bedroompillow/bed1.jpeg';
import bed2 from '../assets/images/pillow/bedroompillow/bed2.jpeg';
import bed3 from '../assets/images/pillow/bedroompillow/bed3.jpeg';

// Import pillow images - neck pillows
import neck1 from '../assets/images/pillow/neckpillow/neck1.jpeg';
import neck2 from '../assets/images/pillow/neckpillow/neck2.jpeg';
import neck3 from '../assets/images/pillow/neckpillow/neck3.jpeg';

// Import pillow images - nursing pillows
import nurse1 from '../assets/images/pillow/nursingpillow/nurse1.jpeg';
import nurse2 from '../assets/images/pillow/nursingpillow/nurse2.jpeg';
import nurse3 from '../assets/images/pillow/nursingpillow/nurse3.jpeg';

// Import pillow images - customized pillows
import cus1 from '../assets/images/pillow/customizedpillow/cus1.jpeg';
import cus2 from '../assets/images/pillow/customizedpillow/cus2.jpeg';
import cus3 from '../assets/images/pillow/customizedpillow/cus3.jpeg';

// Import toy images
import toy1 from '../assets/images/toy/toy1.jpeg';
import toy2 from '../assets/images/toy/toy2.jpeg';
import toy3 from '../assets/images/toy/toy3.jpeg';
import toy4 from '../assets/images/toy/toy4.jpeg';
import toy5 from '../assets/images/toy/toy5.jpeg';
import toy6 from '../assets/images/toy/toy6.jpeg';
import toy7 from '../assets/images/toy/toy7.jpeg';
import toy8 from '../assets/images/toy/toy8.jpeg';

// Import rug images
import rug1 from '../assets/images/rugs/rug1.jpeg';
import rug2 from '../assets/images/rugs/rug2.jpeg';
import rug3 from '../assets/images/rugs/rug3.jpeg';

// Import mat images
import mat1 from '../assets/images/rugs/mat1.jpeg';
import mat2 from '../assets/images/rugs/mat2.jpeg';
import mat3 from '../assets/images/rugs/mat3.jpeg';

// Import oven glove images
import glove1 from '../assets/images/ovengloves/glove1.jpeg';
import glove2 from '../assets/images/ovengloves/glove2.jpeg';
import glove3 from '../assets/images/ovengloves/glove3.jpeg';

// Import footrest images
import foot1 from '../assets/images/footrest/foot1.jpeg';
import foot2 from '../assets/images/footrest/foot2.jpeg';
import foot3 from '../assets/images/footrest/foot3.jpeg';

// Import bedboard images
import bedboard1 from '../assets/images/bedboard/bedboard1.PNG';
import bedboard2 from '../assets/images/bedboard/bedboard2.PNG';
import bedboard3 from '../assets/images/bedboard/bedboard3.PNG';

export const products: Product[] = [
  // THROW PILLOWS
  {
    id: '1',
    sku: 'TP-001',
    title: 'Organic Cotton Throw Pillow',
    price: 44850,
    group: 'pillows',
    subcategory: 'throw-pillows',
    shortDescriptor: 'Recycled cotton blend',
    materials: ['Recycled cotton', 'Organic cotton', 'Recycled polyester fill'],
    dimensions: '18" x 18"',
    impactKG: 0.8,
    images: [throw1],
    tags: ['recycled', 'handmade', 'organic'],
    description: 'Beautiful throw pillow made from 80% recycled cotton and organic materials. Perfect for adding comfort and style to any living space.',
    careInstructions: 'Machine wash cold, tumble dry low',
    colors: ['Natural', 'Sage Green', 'Terracotta'],
    sizes: ['18x18', '20x20']
  },
  {
    id: '2',
    sku: 'TP-002',
    title: 'Luxury Velvet Throw Pillow',
    price: 52850,
    group: 'pillows',
    subcategory: 'throw-pillows',
    shortDescriptor: 'Recycled velvet fabric',
    materials: ['Recycled velvet', 'Organic cotton backing', 'Recycled fill'],
    dimensions: '20" x 20"',
    impactKG: 0.9,
    images: [throw2],
    tags: ['recycled', 'luxury', 'handmade'],
    description: 'Luxurious velvet throw pillow crafted from recycled materials. Adds elegance and comfort to any space.',
    careInstructions: 'Dry clean only',
    colors: ['Emerald', 'Navy', 'Burgundy'],
    sizes: ['20x20']
  },
  {
    id: '3',
    sku: 'TP-003',
    title: 'Decorative Throw Pillow',
    price: 48850,
    group: 'pillows',
    subcategory: 'throw-pillows',
    shortDescriptor: 'Handcrafted design',
    materials: ['Recycled cotton', 'Organic fill', 'Natural dyes'],
    dimensions: '18" x 18"',
    impactKG: 0.7,
    images: [throw3],
    tags: ['recycled', 'handmade', 'decorative'],
    description: 'Handcrafted decorative throw pillow with unique patterns. Made from sustainable materials.',
    careInstructions: 'Machine wash cold, air dry',
    colors: ['Multi-color'],
    sizes: ['18x18']
  },
  {
    id: '4',
    sku: 'TP-004',
    title: 'Modern Throw Pillow',
    price: 46850,
    group: 'pillows',
    subcategory: 'throw-pillows',
    shortDescriptor: 'Contemporary design',
    materials: ['Recycled fabric', 'Organic fill', 'Non-toxic dyes'],
    dimensions: '20" x 20"',
    impactKG: 0.8,
    images: [throw4],
    tags: ['recycled', 'modern', 'stylish'],
    description: 'Modern throw pillow with contemporary design. Perfect for any modern living space.',
    careInstructions: 'Machine wash cold, tumble dry low',
    colors: ['Gray', 'Beige', 'Blue'],
    sizes: ['20x20']
  },
  {
    id: '5',
    sku: 'TP-005',
    title: 'Colorful Throw Pillow',
    price: 45850,
    group: 'pillows',
    subcategory: 'throw-pillows',
    shortDescriptor: 'Vibrant colors',
    materials: ['Recycled cotton', 'Organic fill', 'Natural dyes'],
    dimensions: '18" x 18"',
    impactKG: 0.7,
    images: [throw5],
    tags: ['recycled', 'colorful', 'handmade'],
    description: 'Vibrant throw pillow that adds a pop of color to any room. Made from recycled materials.',
    careInstructions: 'Machine wash cold, air dry',
    colors: ['Multi-color'],
    sizes: ['18x18']
  },

  // BEDROOM PILLOWS
  {
    id: '6',
    sku: 'BP-001',
    title: 'Eco-Comfort Bedroom Pillow',
    price: 74850,
    group: 'pillows',
    subcategory: 'bedroom-pillows',
    shortDescriptor: 'Sustainable memory foam',
    materials: ['Organic cotton cover', 'Recycled memory foam', 'Bamboo fiber'],
    dimensions: '20" x 26"',
    impactKG: 1.2,
    images: [bed1],
    tags: ['recycled', 'hypoallergenic'],
    description: 'Premium sleeping pillow with recycled memory foam core and organic cotton cover for ultimate comfort.',
    careInstructions: 'Spot clean only, removable cover machine washable',
    sizes: ['Standard', 'Queen', 'King']
  },
  {
    id: '7',
    sku: 'BP-002',
    title: 'Premium Bedroom Pillow Set',
    price: 89850,
    group: 'pillows',
    subcategory: 'bedroom-pillows',
    shortDescriptor: 'Set of 2 organic pillows',
    materials: ['100% Organic cotton', 'Natural latex fill', 'Bamboo fiber'],
    dimensions: '20" x 26" (Set of 2)',
    impactKG: 2.0,
    images: [bed2],
    tags: ['organic', 'hypoallergenic', 'premium'],
    description: 'Premium pillow set with natural latex filling and organic cotton covers. Perfect for a restful sleep.',
    careInstructions: 'Spot clean, removable covers machine washable',
    sizes: ['Standard', 'Queen']
  },
  {
    id: '8',
    sku: 'BP-003',
    title: 'Soft Bedroom Pillow',
    price: 69850,
    group: 'pillows',
    subcategory: 'bedroom-pillows',
    shortDescriptor: 'Ultra-soft comfort',
    materials: ['Organic cotton', 'Recycled fill', 'Bamboo fiber'],
    dimensions: '20" x 26"',
    impactKG: 1.1,
    images: [bed3],
    tags: ['organic', 'soft', 'comfortable'],
    description: 'Ultra-soft bedroom pillow for a comfortable night\'s sleep. Made with sustainable materials.',
    careInstructions: 'Machine wash gentle, air dry',
    sizes: ['Standard', 'Queen']
  },

  // NECK PILLOWS
  {
    id: '9',
    sku: 'NP-001',
    title: 'Travel Neck Pillow',
    price: 39850,
    group: 'pillows',
    subcategory: 'neck-pillows',
    shortDescriptor: 'Perfect for travel',
    materials: ['Recycled fabric', 'Memory foam', 'Organic cotton'],
    dimensions: '12" x 11"',
    impactKG: 0.5,
    images: [neck1],
    tags: ['recycled', 'travel', 'ergonomic'],
    description: 'Ergonomic neck pillow perfect for travel and long journeys. Provides excellent neck support.',
    careInstructions: 'Spot clean only, removable cover machine washable',
    colors: ['Gray', 'Navy', 'Black']
  },
  {
    id: '10',
    sku: 'NP-002',
    title: 'Ergonomic Neck Support Pillow',
    price: 42850,
    group: 'pillows',
    subcategory: 'neck-pillows',
    shortDescriptor: 'Orthopedic support',
    materials: ['Organic cotton', 'Memory foam', 'Bamboo fiber'],
    dimensions: '13" x 12"',
    impactKG: 0.6,
    images: [neck2],
    tags: ['ergonomic', 'orthopedic', 'support'],
    description: 'Orthopedic neck pillow designed to provide optimal neck support and alignment.',
    careInstructions: 'Spot clean, removable cover machine washable',
    colors: ['White', 'Beige']
  },
  {
    id: '11',
    sku: 'NP-003',
    title: 'Comfort Neck Pillow',
    price: 38850,
    group: 'pillows',
    subcategory: 'neck-pillows',
    shortDescriptor: 'Soft and supportive',
    materials: ['Recycled cotton', 'Soft foam', 'Organic fill'],
    dimensions: '12" x 10"',
    impactKG: 0.5,
    images: [neck3],
    tags: ['recycled', 'comfortable', 'soft'],
    description: 'Soft and supportive neck pillow for everyday comfort. Great for home or travel.',
    careInstructions: 'Machine wash gentle, air dry',
    colors: ['Multi-color']
  },

  // NURSING PILLOWS
  {
    id: '12',
    sku: 'NUR-001',
    title: 'Nursing Support Pillow',
    price: 64850,
    group: 'pillows',
    subcategory: 'nursing-pillows',
    shortDescriptor: 'Perfect for nursing mothers',
    materials: ['Organic cotton', 'Hypoallergenic fill', 'Natural fibers'],
    dimensions: '24" x 18"',
    impactKG: 1.0,
    images: [nurse1],
    tags: ['organic', 'nursing', 'support'],
    description: 'Supportive nursing pillow designed for comfort during feeding. Made with safe, organic materials.',
    careInstructions: 'Removable cover machine washable',
    colors: ['Natural', 'Pink', 'Blue']
  },
  {
    id: '13',
    sku: 'NUR-002',
    title: 'Premium Nursing Pillow',
    price: 72850,
    group: 'pillows',
    subcategory: 'nursing-pillows',
    shortDescriptor: 'Extra comfort and support',
    materials: ['100% Organic cotton', 'Natural latex', 'Bamboo fiber'],
    dimensions: '26" x 20"',
    impactKG: 1.2,
    images: [nurse2],
    tags: ['organic', 'premium', 'nursing'],
    description: 'Premium nursing pillow with extra support and comfort. Perfect for new mothers.',
    careInstructions: 'Removable cover machine washable',
    colors: ['White', 'Cream']
  },
  {
    id: '14',
    sku: 'NUR-003',
    title: 'Comfort Nursing Pillow',
    price: 59850,
    group: 'pillows',
    subcategory: 'nursing-pillows',
    shortDescriptor: 'Soft and supportive',
    materials: ['Organic cotton', 'Recycled fill', 'Natural fibers'],
    dimensions: '24" x 18"',
    impactKG: 0.9,
    images: [nurse3],
    tags: ['organic', 'comfortable', 'nursing'],
    description: 'Comfortable nursing pillow that provides excellent support. Made with eco-friendly materials.',
    careInstructions: 'Removable cover machine washable',
    colors: ['Multi-color']
  },

  // CUSTOMIZED PILLOWS
  {
    id: '15',
    sku: 'CUS-001',
    title: 'Personalized Photo Pillow',
    price: 54850,
    group: 'pillows',
    subcategory: 'customized-pillows',
    shortDescriptor: 'Custom photo printing',
    materials: ['Recycled fabric', 'Organic fill', 'Eco-friendly ink'],
    dimensions: '18" x 18"',
    impactKG: 0.8,
    images: [cus1],
    tags: ['customized', 'personalized', 'photo'],
    description: 'Personalized pillow with your custom photo or design. Made from sustainable materials.',
    careInstructions: 'Hand wash recommended, air dry',
    colors: ['Custom'],
    sizes: ['18x18', '20x20']
  },
  {
    id: '16',
    sku: 'CUS-002',
    title: 'Custom Name Pillow',
    price: 49850,
    group: 'pillows',
    subcategory: 'customized-pillows',
    shortDescriptor: 'Personalized with name',
    materials: ['Organic cotton', 'Recycled fill', 'Natural dyes'],
    dimensions: '16" x 16"',
    impactKG: 0.7,
    images: [cus2],
    tags: ['customized', 'personalized', 'name'],
    description: 'Custom pillow with personalized name or text. Perfect gift for loved ones.',
    careInstructions: 'Machine wash cold, air dry',
    colors: ['Various'],
    sizes: ['16x16', '18x18']
  },
  {
    id: '17',
    sku: 'CUS-003',
    title: 'Designer Custom Pillow',
    price: 57850,
    group: 'pillows',
    subcategory: 'customized-pillows',
    shortDescriptor: 'Your design, our craft',
    materials: ['Recycled fabric', 'Organic fill', 'Eco-friendly printing'],
    dimensions: '20" x 20"',
    impactKG: 0.9,
    images: [cus3],
    tags: ['customized', 'designer', 'unique'],
    description: 'Bring your design to life with our custom pillow service. High-quality printing on sustainable materials.',
    careInstructions: 'Hand wash recommended, air dry',
    colors: ['Custom'],
    sizes: ['18x18', '20x20']
  },

  // TOYS - PLAY TOYS
  {
    id: '18',
    sku: 'PT-001',
    title: 'Soft Plush Fish Toy',
    price: 29850,
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
    id: '19',
    sku: 'PT-002',
    title: 'Eco Bird Plush',
    price: 34350,
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
    id: '20',
    sku: 'PT-003',
    title: 'Colorful Animal Plush Set',
    price: 42850,
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
    id: '21',
    sku: 'PT-004',
    title: 'Soft Cuddle Bunny',
    price: 31850,
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
    id: '22',
    sku: 'PT-005',
    title: 'Rainbow Elephant Toy',
    price: 36850,
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
    id: '23',
    sku: 'PT-006',
    title: 'Friendly Monster Plush',
    price: 33850,
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
  },

  // TOYS - EDUCATIONAL MATERIALS
  {
    id: '24',
    sku: 'EM-001',
    title: 'Counting & Sorting Learning Kit',
    price: 52350,
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
    id: '25',
    sku: 'EM-002',
    title: 'Alphabet Learning Blocks',
    price: 48350,
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

  // RUGS
  {
    id: '26',
    sku: 'RUG-001',
    title: 'Handwoven Floor Rug',
    price: 124850,
    group: 'rugs-mats',
    subcategory: 'rugs',
    shortDescriptor: 'Handcrafted traditional design',
    materials: ['Recycled cotton', 'Natural fibers', 'Eco-friendly dyes'],
    dimensions: '60" x 40"',
    impactKG: 3.5,
    images: [rug1],
    tags: ['recycled', 'handmade', 'traditional'],
    description: 'Beautiful handwoven floor rug crafted from recycled materials. Adds warmth and character to any space.',
    careInstructions: 'Vacuum regularly, spot clean',
    colors: ['Multi-color']
  },
  {
    id: '27',
    sku: 'RUG-002',
    title: 'Modern Area Rug',
    price: 134850,
    group: 'rugs-mats',
    subcategory: 'rugs',
    shortDescriptor: 'Contemporary design',
    materials: ['Recycled fabric', 'Natural cotton', 'Sustainable dyes'],
    dimensions: '72" x 48"',
    impactKG: 4.0,
    images: [rug2],
    tags: ['recycled', 'modern', 'stylish'],
    description: 'Modern area rug with contemporary patterns. Made from sustainable and recycled materials.',
    careInstructions: 'Vacuum regularly, professional cleaning recommended',
    colors: ['Gray', 'Beige', 'Blue']
  },
  {
    id: '28',
    sku: 'RUG-003',
    title: 'Colorful Accent Rug',
    price: 114850,
    group: 'rugs-mats',
    subcategory: 'rugs',
    shortDescriptor: 'Vibrant colors',
    materials: ['Recycled cotton', 'Natural fibers', 'Eco-friendly dyes'],
    dimensions: '48" x 36"',
    impactKG: 2.8,
    images: [rug3],
    tags: ['recycled', 'colorful', 'handmade'],
    description: 'Vibrant accent rug that adds a pop of color to any room. Handcrafted from recycled materials.',
    careInstructions: 'Vacuum regularly, spot clean',
    colors: ['Multi-color']
  },

  // MATS
  {
    id: '38',
    sku: 'MAT-001',
    title: 'Eco-Friendly Floor Mat',
    price: 34850,
    group: 'rugs-mats',
    subcategory: 'mats',
    shortDescriptor: 'Versatile and durable',
    materials: ['Recycled cotton', 'Natural fibers', 'Eco-friendly dyes'],
    dimensions: '24" x 18"',
    impactKG: 0.8,
    images: [mat1],
    tags: ['recycled', 'durable', 'versatile'],
    description: 'Versatile floor mat made from recycled materials. Perfect for entryways, bathrooms, or kitchens.',
    careInstructions: 'Machine wash cold, air dry',
    colors: ['Multi-color']
  },
  {
    id: '39',
    sku: 'MAT-002',
    title: 'Decorative Welcome Mat',
    price: 39850,
    group: 'rugs-mats',
    subcategory: 'mats',
    shortDescriptor: 'Stylish entrance mat',
    materials: ['Recycled fabric', 'Natural fibers', 'Sustainable dyes'],
    dimensions: '30" x 20"',
    impactKG: 1.0,
    images: [mat2],
    tags: ['recycled', 'decorative', 'welcome'],
    description: 'Stylish welcome mat that greets guests with eco-friendly charm. Made from sustainable materials.',
    careInstructions: 'Shake out regularly, spot clean',
    colors: ['Natural', 'Brown']
  },
  {
    id: '40',
    sku: 'MAT-003',
    title: 'Multi-Purpose Mat',
    price: 29850,
    group: 'rugs-mats',
    subcategory: 'mats',
    shortDescriptor: 'Practical and sustainable',
    materials: ['Recycled cotton', 'Natural rubber backing', 'Eco-friendly dyes'],
    dimensions: '20" x 16"',
    impactKG: 0.7,
    images: [mat3],
    tags: ['recycled', 'practical', 'multi-use'],
    description: 'Practical mat for various uses around the home. Made from recycled materials with non-slip backing.',
    careInstructions: 'Machine wash gentle, air dry',
    colors: ['Multi-color']
  },

  // OVEN GLOVES
  {
    id: '29',
    sku: 'OG-001',
    title: 'Heat-Resistant Oven Gloves',
    price: 24850,
    group: 'oven-gloves',
    subcategory: 'kitchen-gloves',
    shortDescriptor: 'Safe and durable',
    materials: ['Recycled cotton', 'Heat-resistant lining', 'Natural fibers'],
    dimensions: '12" x 7"',
    impactKG: 0.3,
    images: [glove1],
    tags: ['recycled', 'heat-resistant', 'kitchen'],
    description: 'Durable heat-resistant oven gloves made from recycled materials. Perfect for safe cooking and baking.',
    careInstructions: 'Machine wash cold, air dry',
    colors: ['Red', 'Blue', 'Green']
  },
  {
    id: '30',
    sku: 'OG-002',
    title: 'Premium Kitchen Gloves Set',
    price: 32850,
    group: 'oven-gloves',
    subcategory: 'kitchen-gloves',
    shortDescriptor: 'Set of 2 gloves',
    materials: ['Organic cotton', 'Heat-resistant padding', 'Natural fibers'],
    dimensions: '13" x 8" (Set of 2)',
    impactKG: 0.5,
    images: [glove2],
    tags: ['organic', 'heat-resistant', 'premium'],
    description: 'Premium set of kitchen gloves with excellent heat protection. Made from sustainable materials.',
    careInstructions: 'Machine wash cold, tumble dry low',
    colors: ['Natural', 'Gray']
  },
  {
    id: '31',
    sku: 'OG-003',
    title: 'Decorative Oven Mitts',
    price: 27850,
    group: 'oven-gloves',
    subcategory: 'kitchen-gloves',
    shortDescriptor: 'Stylish and functional',
    materials: ['Recycled fabric', 'Heat-resistant lining', 'Eco-friendly dyes'],
    dimensions: '12" x 7"',
    impactKG: 0.4,
    images: [glove3],
    tags: ['recycled', 'decorative', 'kitchen'],
    description: 'Stylish oven mitts that combine functionality with beautiful design. Made from recycled materials.',
    careInstructions: 'Machine wash cold, air dry',
    colors: ['Multi-color']
  },

  // FOOTREST
  {
    id: '32',
    sku: 'FR-001',
    title: 'Ergonomic Foot Rest',
    price: 59850,
    group: 'footrest',
    subcategory: 'ergonomic-footrest',
    shortDescriptor: 'Recycled foam core',
    materials: ['Recycled denim cover', 'Recycled foam', 'Natural rubber base'],
    dimensions: '16" x 12" x 6"',
    impactKG: 1.5,
    images: [foot1],
    tags: ['recycled', 'ergonomic'],
    description: 'Comfortable foot rest designed to improve posture and reduce leg fatigue, made entirely from recycled materials.',
    careInstructions: 'Spot clean with damp cloth',
    colors: ['Denim Blue', 'Charcoal']
  },
  {
    id: '33',
    sku: 'FR-002',
    title: 'Designer Foot Rest',
    price: 67850,
    group: 'footrest',
    subcategory: 'ergonomic-footrest',
    shortDescriptor: 'Modern ergonomic design',
    materials: ['Recycled fabric', 'Memory foam', 'Wooden base'],
    dimensions: '18" x 14" x 7"',
    impactKG: 1.8,
    images: [foot2],
    tags: ['recycled', 'ergonomic', 'modern'],
    description: 'Modern designer foot rest with memory foam comfort and sustainable materials.',
    careInstructions: 'Wipe clean with damp cloth',
    colors: ['Gray', 'Beige']
  },
  {
    id: '34',
    sku: 'FR-003',
    title: 'Comfort Footrest',
    price: 54850,
    group: 'footrest',
    subcategory: 'ergonomic-footrest',
    shortDescriptor: 'Soft and supportive',
    materials: ['Recycled cotton', 'Foam padding', 'Natural rubber'],
    dimensions: '15" x 11" x 5"',
    impactKG: 1.3,
    images: [foot3],
    tags: ['recycled', 'comfortable', 'ergonomic'],
    description: 'Soft and supportive footrest for everyday comfort. Made from sustainable recycled materials.',
    careInstructions: 'Spot clean with damp cloth',
    colors: ['Multi-color']
  },

  // BEDBOARD
  {
    id: '35',
    sku: 'BB-001',
    title: 'Upholstered Headboard',
    price: 184850,
    group: 'bed-headboard',
    subcategory: 'headboards',
    shortDescriptor: 'Elegant bedroom centerpiece',
    materials: ['Recycled wood frame', 'Organic fabric', 'Sustainable padding'],
    dimensions: '60" x 48"',
    impactKG: 8.5,
    images: [bedboard1],
    tags: ['recycled', 'elegant', 'handmade'],
    description: 'Elegant upholstered headboard crafted from sustainable materials. Adds sophistication to any bedroom.',
    careInstructions: 'Spot clean only',
    colors: ['Gray', 'Beige', 'Navy']
  },
  {
    id: '36',
    sku: 'BB-002',
    title: 'Modern Wooden Headboard',
    price: 174850,
    group: 'bed-headboard',
    subcategory: 'headboards',
    shortDescriptor: 'Contemporary design',
    materials: ['Reclaimed wood', 'Natural finish', 'Eco-friendly stain'],
    dimensions: '72" x 50"',
    impactKG: 9.0,
    images: [bedboard2],
    tags: ['reclaimed', 'modern', 'wooden'],
    description: 'Modern headboard made from reclaimed wood. Features clean lines and natural beauty.',
    careInstructions: 'Wipe with dry cloth',
    colors: ['Natural Wood', 'Dark Walnut']
  },
  {
    id: '37',
    sku: 'BB-003',
    title: 'Luxury Padded Headboard',
    price: 194850,
    group: 'bed-headboard',
    subcategory: 'headboards',
    shortDescriptor: 'Premium comfort',
    materials: ['Recycled wood', 'Premium fabric', 'Organic padding'],
    dimensions: '66" x 52"',
    impactKG: 9.5,
    images: [bedboard3],
    tags: ['recycled', 'luxury', 'premium'],
    description: 'Luxury padded headboard with premium materials. Provides ultimate comfort and style.',
    careInstructions: 'Professional cleaning recommended',
    colors: ['Cream', 'Charcoal', 'Burgundy']
  }
];
