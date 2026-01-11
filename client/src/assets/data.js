import product1 from '../assets/dress_1.jpg';
import product2 from '../assets/dress_2.jpg';
import product3 from '../assets/dress_3.jpg';
import product4 from '../assets/dress_4.jpg';
import product5 from '../assets/dress_5.jpg';
import product6 from '../assets/dress_6.jpg';
import product7 from '../assets/dress_7.jpg';
import product8 from '../assets/dress_8.jpg';
import product9 from '../assets/dress_9.jpg';
import product10 from '../assets/dress_10.jpg';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';


export const categories =
  [

    {

      name: 'Casual Dresses',
      image: cat1,
    },

    {


      name: 'Evening Gowns',

      image: cat2,
    },
    {



      name: 'Summer Dresses',
      image: cat3,

    },
    {

      name: 'Formal Wear',


      image: cat3,
    },
  ];

export const dummyProducts = [

  {
    _id: 1,
    name: 'Elegant Evening Gown',
    description: 'A stunning evening gown perfect for special occasions.',
    price: 129.99,
    offerPrice: 109.99,
    image: [product1],
    category: 'evening',
    sizes: ['S', 'M', 'L', 'XL'],
    isFamous: true,
    inStock: true,
  },
  {
    _id: 2,
    name: 'Casual Summer Dress',
    description: 'Light and breezy dress for everyday summer wear.',
    price: 49.99,
    offerPrice: 39.99,
    image: [product2],
    category: 'casual',
    sizes: ['S', 'M', 'L'],
    isFamous: true,
    inStock: true,
  },
  {
    _id: 3,
    name: 'Formal Office Dress',
    description: 'Professional and stylish dress suitable for office settings.',
    price: 89.99,
    offerPrice: 74.99,
    image: [product3],
    category: 'office',
    sizes: ['M', 'L', 'XL'],
    isFamous: false,
    inStock: true,
  },
  {
    _id: 4,
    name: 'Floral Print Dress',
    description: 'A beautiful floral print dress for casual outings.',
    price: 59.99,
    offerPrice: 49.99,
    image: [product4],
    category: 'casual',
    sizes: ['S', 'M', 'L'],
    isFamous: false,
    inStock: false,
  },
  {
    _id: 5,
    name: 'Maxi Dress',
    description: 'Comfortable and elegant maxi dress for all occasions.',
    price: 79.99,
    offerPrice: 64.99,
    image: [product5],
    category: 'maxi',
    sizes: ['M', 'L', 'XL', 'XXL'],
    isFamous: true,
    inStock: true,
  },
  {
    _id: 6,
    name: 'Cocktail Dress',
    description: 'Chic cocktail dress perfect for parties and events.',
    price: 99.99,
    offerPrice: 84.99,
    image: [product6],
    category: 'party',
    sizes: ['S', 'M', 'L'],
    isFamous: false,
    inStock: true,
  },
  {
    _id: 7,
    name: 'Summer Sundress',
    description: 'Lightweight sundress ideal for hot summer days.',
    price: 39.99,
    offerPrice: 29.99,
    image: [product7],
    category: 'summer',
    sizes: ['S', 'M', 'L'],
    isFamous: true,
    inStock: true,
  },
  {
    _id: 8,
    name: 'Little Black Dress',
    description: 'Classic little black dress perfect for any formal occasion.',
    price: 69.99,
    offerPrice: 54.99,
    image: [product8],
    category: 'formal',
    sizes: ['S', 'M', 'L', 'XL'],
    isFamous: true,
    inStock: true,
  },
  {
    _id: 9,
    name: 'Bohemian Dress',
    description: 'Flowy bohemian dress with intricate patterns.',
    price: 54.99,
    offerPrice: 44.99,
    image: [product9],
    category: 'boho',
    sizes: ['S', 'M', 'L'],
    isFamous: false,
    inStock: false,
  },
  {
    _id: 10,
    name: 'Office Sheath Dress',
    description: 'Sleek sheath dress suitable for professional environments.',
    price: 84.99,
    offerPrice: 69.99,
    image: [product10],
    category: 'office',
    sizes: ['M', 'L', 'XL'],
    isFamous: false,
    inStock: true,
  },



];
export const blogs = [
  {
    id: 1,
    title: 'Top 10 Summer Dress Trends for 2024',
    excerpt: 'Discover the hottest summer dress trends that will keep you stylish and cool this season.',
    image: cat1,
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Evening Gown',
    excerpt: 'Tips and tricks for selecting an evening gown that flatters your figure and suits the occasion.',
    image: cat2,
  },
  {
    id: 3,
    title: 'Casual Dresses for Every Occasion',
    excerpt: 'Explore versatile casual dresses that can be dressed up or down for any event.',
    image: cat3,
  },
];