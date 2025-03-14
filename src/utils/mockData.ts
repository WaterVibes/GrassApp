import { Dispensary, Product } from './types';

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
  },
];

export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Wedding Cake',
    brand: 'Premium Buds',
    description: 'Indica-dominant hybrid with sweet, earthy flavors',
    price: 55,
    image_url: '/images/products/wedding-cake.jpg',
    strain_type: 'Indica',
    thc: '26%',
    metadata: {
      sizes: [
        { name: 'eighth', weight: '3.5g', price: 55 },
        { name: 'quarter', weight: '7g', price: 100 },
        { name: 'half', weight: '14g', price: 180 },
      ],
    },
  },
  {
    id: 'prod-2',
    name: 'Blue Dream',
    brand: 'Green Farms',
    description: 'Sativa-dominant hybrid, berry aroma with full-body relaxation',
    price: 45,
    image_url: '/images/products/blue-dream.jpg',
    strain_type: 'Sativa',
    thc: '24%',
    metadata: {
      sizes: [
        { name: 'eighth', weight: '3.5g', price: 45 },
        { name: 'quarter', weight: '7g', price: 85 },
        { name: 'half', weight: '14g', price: 160 },
      ],
    },
  },
  {
    id: 'prod-3',
    name: 'OG Kush',
    brand: 'Classic Cannabis',
    description: 'Hybrid strain with pine and citrus notes',
    price: 50,
    image_url: '/images/products/og-kush.jpg',
    strain_type: 'Hybrid',
    thc: '23%',
    metadata: {
      sizes: [
        { name: 'eighth', weight: '3.5g', price: 50 },
        { name: 'quarter', weight: '7g', price: 90 },
        { name: 'half', weight: '14g', price: 170 },
      ],
    },
  },
]; 