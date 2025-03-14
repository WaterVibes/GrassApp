import { Dispensary } from '@/types/dispensary';
import { Product } from './api';

export const mockDispensaries: Dispensary[] = [
  {
    id: 'disp-1',
    name: 'Green Leaf Dispensary',
    url: 'green-leaf',
    logo_url: '/images/dispensaries/green-leaf.jpg',
    rating: 4.8,
    delivery_time: '30-45 min',
    delivery_fee: 0,
    minimum_order: 50,
    is_open: true,
    location: {
      lat: 39.2904,
      lng: -76.6122,
      address: '123 Cannabis Ave, Baltimore, MD',
    },
    tags: ['Premium', 'Free Delivery', 'Rewards'],
  },
  {
    id: 'disp-2',
    name: 'Herbal Wellness',
    url: 'herbal-wellness',
    logo_url: '/images/dispensaries/herbal-wellness.jpg',
    rating: 4.6,
    delivery_time: '45-60 min',
    delivery_fee: 5,
    minimum_order: 35,
    is_open: true,
    location: {
      lat: 39.2854,
      lng: -76.6226,
      address: '456 Medical Blvd, Baltimore, MD',
    },
    tags: ['Organic', 'CBD', 'Veterans Discount'],
  },
  {
    id: 'disp-3',
    name: 'MediCanna',
    url: 'medicanna',
    logo_url: '/images/dispensaries/medicanna.jpg',
    rating: 4.9,
    delivery_time: '20-35 min',
    delivery_fee: 0,
    minimum_order: 40,
    is_open: false,
    location: {
      lat: 39.2982,
      lng: -76.6068,
      address: '789 Health St, Baltimore, MD',
    },
    tags: ['Premium', 'Free Delivery', 'First-Time Deals'],
  },
  {
    id: 'disp-4',
    name: 'Pure Relief',
    url: 'pure-relief',
    logo_url: '/images/dispensaries/pure-relief.jpg',
    rating: 4.7,
    delivery_time: '35-50 min',
    delivery_fee: 3,
    minimum_order: 45,
    is_open: true,
    location: {
      lat: 39.2867,
      lng: -76.6105,
      address: '321 Wellness Way, Baltimore, MD',
    },
    tags: ['Concentrates', 'Student Discount', 'Loyalty Program'],
  },
  {
    id: 'disp-5',
    name: 'Elevated Gardens',
    url: 'elevated-gardens',
    logo_url: '/images/dispensaries/elevated-gardens.jpg',
    rating: 4.5,
    delivery_time: '40-55 min',
    delivery_fee: 0,
    minimum_order: 30,
    is_open: true,
    location: {
      lat: 39.2923,
      lng: -76.6089,
      address: '567 High Street, Baltimore, MD',
    },
    tags: ['Free Delivery', 'New Arrivals', 'Edibles'],
  },
  {
    id: 'disp-6',
    name: 'Nature\'s Way',
    url: 'natures-way',
    logo_url: '/images/dispensaries/natures-way.jpg',
    rating: 4.8,
    delivery_time: '25-40 min',
    delivery_fee: 4,
    minimum_order: 40,
    is_open: true,
    location: {
      lat: 39.2945,
      lng: -76.6198,
      address: '890 Natural Blvd, Baltimore, MD',
    },
    tags: ['Organic', 'Vapes', 'Senior Discount'],
  },
];

export const mockProducts = [
  // Featured Products
  {
    id: '1',
    name: 'Purple Haze Premium',
    brand: 'GreenLeaf',
    description: 'A legendary sativa-dominant hybrid with sweet and earthy notes',
    image_url: '/images/products/purple-haze.jpg',
    strain_type: 'Sativa',
    thc: '24%',
    category: 'flower',
    featured: true,
    metadata: {
      sizes: [
        { name: 'eighth', weight: '3.5g', price: 45 },
        { name: 'quarter', weight: '7g', price: 80 },
        { name: 'half', weight: '14g', price: 150 }
      ]
    }
  },
  {
    id: '2',
    name: 'OG Kush Live Resin',
    brand: 'Concentrate Kings',
    description: 'Premium live resin with intense terpene profile',
    image_url: '/images/products/og-kush-concentrate.jpg',
    strain_type: 'Hybrid',
    thc: '85%',
    category: 'concentrates',
    featured: true,
    metadata: {
      sizes: [
        { name: 'gram', weight: '1g', price: 60 },
        { name: 'two_gram', weight: '2g', price: 110 }
      ]
    }
  },
  // Flower Category
  {
    id: '3',
    name: 'Blue Dream',
    brand: 'GreenLeaf',
    description: 'Sweet berry aroma with full-body relaxation',
    image_url: '/images/products/blue-dream.jpg',
    strain_type: 'Hybrid',
    thc: '20%',
    category: 'flower',
    metadata: {
      sizes: [
        { name: 'eighth', weight: '3.5g', price: 40 },
        { name: 'quarter', weight: '7g', price: 75 }
      ]
    }
  },
  // Pre-rolls Category
  {
    id: '4',
    name: 'Wedding Cake Pre-Roll Pack',
    brand: 'RollMaster',
    description: 'Five premium pre-rolls of Wedding Cake strain',
    image_url: '/images/products/wedding-cake-preroll.jpg',
    strain_type: 'Indica',
    thc: '28%',
    category: 'pre-rolls',
    metadata: {
      sizes: [
        { name: 'pack', weight: '3.5g', price: 45 }
      ]
    }
  },
  // Vaporizers Category
  {
    id: '5',
    name: 'Gelato Live Resin Cart',
    brand: 'VapeMaster',
    description: 'Full-spectrum live resin cartridge',
    image_url: '/images/products/gelato-cart.jpg',
    strain_type: 'Hybrid',
    thc: '92%',
    category: 'vaporizers',
    metadata: {
      sizes: [
        { name: 'half_gram', weight: '0.5g', price: 45 },
        { name: 'full_gram', weight: '1g', price: 80 }
      ]
    }
  },
  // Edibles Category
  {
    id: '6',
    name: 'Cosmic Brownies',
    brand: 'BakedGoods',
    description: 'Delicious chocolate brownies with precise dosing',
    image_url: '/images/products/cosmic-brownies.jpg',
    category: 'edibles',
    thc: '100mg',
    metadata: {
      sizes: [
        { name: 'pack', weight: '10pc', price: 25 }
      ]
    }
  },
  // Concentrates Category
  {
    id: '7',
    name: 'GMO Cookies Shatter',
    brand: 'Concentrate Kings',
    description: 'High-potency shatter with intense garlic mushroom onion profile',
    image_url: '/images/products/gmo-shatter.jpg',
    strain_type: 'Indica',
    thc: '89%',
    category: 'concentrates',
    metadata: {
      sizes: [
        { name: 'gram', weight: '1g', price: 50 }
      ]
    }
  },
  // Accessories Category
  {
    id: '8',
    name: 'Premium Glass Bong',
    brand: 'GlassWorks',
    description: 'Handcrafted glass water pipe with ice catcher',
    image_url: '/images/products/glass-bong.jpg',
    category: 'accessories',
    metadata: {
      sizes: [
        { name: 'standard', weight: '12"', price: 120 }
      ]
    }
  },
  // Topicals Category
  {
    id: '9',
    name: 'Relief Balm',
    brand: 'HealingHerbs',
    description: 'CBD/THC infused balm for targeted relief',
    image_url: '/images/products/relief-balm.jpg',
    category: 'topicals',
    thc: '100mg CBD/100mg THC',
    metadata: {
      sizes: [
        { name: 'small', weight: '2oz', price: 35 },
        { name: 'large', weight: '4oz', price: 60 }
      ]
    }
  }
];

export const categories = [
  { id: 'flower', name: 'Flower' },
  { id: 'pre-rolls', name: 'Pre-Rolls' },
  { id: 'vaporizers', name: 'Vaporizers' },
  { id: 'edibles', name: 'Edibles' },
  { id: 'concentrates', name: 'Concentrates' },
  { id: 'topicals', name: 'Topicals' },
  { id: 'accessories', name: 'Accessories' }
]; 