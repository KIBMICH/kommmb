import type { CategoryGroup } from '../types';

export const categoryGroups: CategoryGroup[] = [
  {
    id: 'pillow',
    name: 'Pillow',
    slug: 'pillow',
    description: 'Comfortable, eco-friendly pillows made from recycled materials',
    subcategories: [
      {
        id: 'throw-pillows',
        name: 'Throw Pillows',
        slug: 'throw-pillows',
        description: 'Decorative pillows crafted from recycled textiles'
      },
      {
        id: 'bedroom-pillows',
        name: 'Bedroom Pillows',
        slug: 'bedroom-pillows',
        description: 'Comfortable sleeping pillows with sustainable filling'
      },
      {
        id: 'neck-pillows',
        name: 'Neck Pillows',
        slug: 'neck-pillows',
        description: 'Ergonomic neck support pillows for travel and comfort'
      },
      {
        id: 'nursing-pillows',
        name: 'Nursing Pillows',
        slug: 'nursing-pillows',
        description: 'Supportive pillows for nursing mothers and babies'
      },
      {
        id: 'customized-pillows',
        name: 'Customized Pillows',
        slug: 'customized-pillows',
        description: 'Personalized pillows made to your specifications'
      }
    ]
  },
  {
    id: 'toys-educational',
    name: 'Toys & Educational Materials',
    slug: 'toys-educational',
    description: 'Safe, sustainable toys and learning materials for children',
    subcategories: [
      {
        id: 'play-toys',
        name: 'Play Toys',
        slug: 'play-toys',
        description: 'Soft toys including fish, birds, dogs, and more'
      },
      {
        id: 'educational-materials',
        name: 'Educational Materials',
        slug: 'educational-materials',
        description: 'Learning kits and manipulatives for development'
      }
    ]
  },
  {
    id: 'rugs',
    name: 'Rugs',
    slug: 'rugs',
    description: 'Handcrafted rugs made from recycled and sustainable materials',
    subcategories: [
      {
        id: 'floor-rugs',
        name: 'Floor Rugs',
        slug: 'floor-rugs',
        description: 'Durable and beautiful floor rugs for any space'
      }
    ]
  },
  {
    id: 'oven-gloves',
    name: 'Oven Gloves',
    slug: 'oven-gloves',
    description: 'Heat-resistant oven gloves made from eco-friendly materials',
    subcategories: [
      {
        id: 'kitchen-gloves',
        name: 'Kitchen Gloves',
        slug: 'kitchen-gloves',
        description: 'Protective gloves for cooking and baking'
      }
    ]
  },
  {
    id: 'footrest',
    name: 'Footrest',
    slug: 'footrest',
    description: 'Ergonomic footrests for comfort and support',
    subcategories: [
      {
        id: 'ergonomic-footrest',
        name: 'Ergonomic Footrest',
        slug: 'ergonomic-footrest',
        description: 'Comfortable footrests to improve posture'
      }
    ]
  },
  {
    id: 'bedboard',
    name: 'Bedboard',
    slug: 'bedboard',
    description: 'Stylish bedboards crafted from sustainable materials',
    subcategories: [
      {
        id: 'headboards',
        name: 'Headboards',
        slug: 'headboards',
        description: 'Beautiful headboards for your bedroom'
      }
    ]
  }
];
