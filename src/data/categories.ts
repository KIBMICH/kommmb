import type { CategoryGroup } from '../types';

export const categoryGroups: CategoryGroup[] = [
  {
    id: 'soft-furniture',
    name: 'Soft Furniture',
    slug: 'soft-furniture',
    description: 'Comfortable, eco-friendly furniture made from recycled materials',
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
        id: 'foot-rests',
        name: 'Foot Rests',
        slug: 'foot-rests',
        description: 'Ergonomic foot rests for comfort and support'
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
  }
];
