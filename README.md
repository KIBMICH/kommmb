# Kommmb Innovations - Sustainable E-commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS, showcasing eco-friendly furniture and educational toys made from recycled materials.

## Features

- **Modern Design**: Clean, sleek interface with nature-inspired Leaf Green (#2E7D32) color scheme
- **Grouped Product Taxonomy**: 
  - Soft Furniture (Throw Pillows, Bedroom Pillows, Foot Rests)
  - Toys & Educational Materials (Play Toys, Educational Materials)
- **Responsive Layout**: Optimized for desktop (1440px) and mobile (390px) devices
- **Product Features**:
  - Advanced filtering and search
  - Environmental impact tracking (kg of textile waste reused)
  - Detailed product pages with materials, dimensions, and care instructions
  - Age range specifications for toys
- **Sustainability Focus**: Dedicated pages highlighting environmental impact and recycling programs
- **Full Navigation**: Header with dropdown menus, footer with quick links

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd kommmb-innovations
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductDetail.tsx
│   ├── CategoryLanding.tsx
│   ├── About.tsx
│   ├── Sustainability.tsx
│   ├── Gallery.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── Cart.tsx
├── data/            # Mock data
│   ├── categories.ts
│   └── products.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── App.tsx          # Main app component with routing
└── main.tsx         # App entry point
```

## Key Pages

- **Home** - Hero section, category highlights, featured products, sustainability stats
- **Products** - Full catalog with filtering, search, and sorting
- **Product Detail** - Detailed product information with tabs for description, materials, and impact
- **Category Landing** - Group and subcategory pages with filtered products
- **About** - Company story, mission, and values
- **Sustainability** - Environmental impact metrics and recycling program
- **Contact** - Contact form and business information
- **Gallery** - Product lifestyle images
- **Blog** - Articles about sustainability and products

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  'leaf-green': '#2E7D32',
  'leaf-green-dark': '#1B5E20',
  'leaf-green-light': '#4CAF50',
  'earth-brown': '#8D6E63',
  'earth-beige': '#D7CCC8',
}
```

### Products

Add or modify products in `src/data/products.ts`. Each product includes:
- Basic info (title, price, SKU)
- Category grouping
- Materials and dimensions
- Environmental impact (kg reused)
- Age range (for toys)
- Tags and images

### Categories

Modify the category structure in `src/data/categories.ts`.

## Security & Best Practices

- Input sanitization on all forms
- Type-safe with TypeScript
- Accessible components with proper ARIA labels
- Responsive design with mobile-first approach
- SEO-friendly structure

## Future Enhancements

- Shopping cart functionality with state management
- User authentication and accounts
- Payment integration
- Product reviews and ratings
- Real image uploads
- Admin dashboard for product management
- Email notifications
- Wishlist functionality

## License

This project is private and proprietary.

## Contact

For questions or support, contact hello@kommmb.com
