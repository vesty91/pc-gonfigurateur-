import { Component, ComponentCategory } from '../types';

export const mockComponents: Component[] = [
  {
    id: 'cpu-1',
    name: 'Intel Core i9-13900K',
    category: ComponentCategory.CPU,
    price: 589.99,
    brand: 'Intel',
    specs: {
      cores: '24 (8P + 16E)',
      baseFrequency: '3.0 GHz',
      maxFrequency: '5.8 GHz',
      tdp: '125W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80',
    stock: 10
  },
  {
    id: 'cpu-2',
    name: 'AMD Ryzen 9 7950X',
    category: ComponentCategory.CPU,
    price: 699.99,
    brand: 'AMD',
    specs: {
      cores: '16',
      baseFrequency: '4.5 GHz',
      maxFrequency: '5.7 GHz',
      tdp: '170W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=300&q=80',
    stock: 8
  },
  // Add more mock components for other categories...
];