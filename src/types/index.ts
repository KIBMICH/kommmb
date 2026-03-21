export interface Product {
  id: string;
  sku: string;
  title: string;
  price: number;
  group: 'soft-furniture' | 'toys-educational';
  subcategory: string;
  shortDescriptor: string;
  materials: string[];
  dimensions: string;
  ageRange?: string;
  impactKG: number;
  images: string[];
  tags: string[];
  description: string;
  careInstructions: string;
  colors?: string[];
  sizes?: string[];
}

export interface CategoryGroup {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}
