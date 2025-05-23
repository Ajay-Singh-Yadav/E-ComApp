// src/features/products/productData.js

export const products = [
  // Men's Products
  {
    id: 1,
    title: 'Classic White T-Shirt',
    gender: 'Men',
    description: 'Soft cotton crew neck tee.',
    price: 499,
    category: 'Mens',
    image: 'https://picsum.photos/200/300?random=1',
    rating: 4.5,
    availableSizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    title: 'Denim Jacket',
    gender: 'Men',
    description: 'Rugged denim jacket for all seasons.',
    price: 1999,
    category: 'Mens',
    image: 'https://picsum.photos/200/300?random=2',
    rating: 4.2,
    availableSizes: ['M', 'L', 'XL'],
  },
  {
    id: 3,
    title: 'Graphic Tee',
    gender: 'Men',
    description: 'Cool graphic tee for casual wear.',
    price: 599,
    category: 'Mens',
    image: 'https://picsum.photos/200/300?random=3',
    rating: 4.3,
    availableSizes: ['S', 'M', 'L'],
  },
  {
    id: 4,
    title: 'Formal Shirt',
    gender: 'Men',
    description: 'Slim-fit cotton formal shirt.',
    price: 899,
    category: 'Mens',
    image: 'https://picsum.photos/200/300?random=4',
    rating: 4.1,
    availableSizes: ['M', 'L'],
  },
  {
    id: 5,
    title: 'Casual Chinos',
    gender: 'Men',
    description: 'Comfortable everyday chinos.',
    price: 1099,
    category: 'Mens',
    image: 'https://picsum.photos/200/300?random=5',
    rating: 4.6,
    availableSizes: ['L', 'XL'],
  },
  {
    id: 6,
    title: 'Hooded Sweatshirt',
    gender: 'Men',
    description: 'Warm fleece hoodie for winters.',
    price: 1399,
    category: 'Mens',
    image: 'https://picsum.photos/200/300?random=6',
    rating: 4.4,
    availableSizes: ['M', 'L', 'XL'],
  },

  // Women's Products
  {
    id: 7,
    title: 'Floral Summer Dress',
    gender: 'Women',
    description: 'Lightweight and breezy dress for summer.',
    price: 1299,
    category: 'Womens',
    image: 'https://picsum.photos/200/300?random=7',
    rating: 4.7,
    availableSizes: ['S', 'M', 'L'],
  },
  {
    id: 8,
    title: 'High Waist Jeans',
    gender: 'Women',
    description: 'Comfortable and stylish high waist jeans.',
    price: 1599,
    category: 'Womens',
    image: 'https://picsum.photos/200/300?random=8',
    rating: 4.4,
    availableSizes: ['M', 'L', 'XL'],
  },
  {
    id: 9,
    title: 'Crop Top',
    gender: 'Women',
    description: 'Trendy crop top for parties.',
    price: 699,
    category: 'Womens',
    image: 'https://picsum.photos/200/300?random=9',
    rating: 4.3,
    availableSizes: ['S', 'M'],
  },
  {
    id: 10,
    title: 'Ethnic Kurti',
    gender: 'Women',
    description: 'Beautiful cotton printed kurti.',
    price: 999,
    category: 'Womens',
    image: 'https://picsum.photos/200/300?random=10',
    rating: 4.6,
    availableSizes: ['M', 'L'],
  },
  {
    id: 11,
    title: 'Leather Handbag',
    gender: 'Women',
    description: 'Elegant handbag for all occasions.',
    price: 2999,
    category: 'Womens',
    image: 'https://picsum.photos/200/300?random=11',
    rating: 4.5,
  },
  {
    id: 12,
    title: 'Winter Jacket',
    gender: 'Women',
    description: 'Stylish puffer jacket for cold days.',
    price: 1899,
    category: 'Womens',
    image: 'https://picsum.photos/200/300?random=12',
    rating: 4.7,
    availableSizes: ['S', 'M', 'L'],
  },

  // Smartphones
  {
    id: 13,
    title: 'iPhone 14',
    description: 'Latest Apple iPhone with A15 Bionic chip.',
    price: 79999,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=13',
    rating: 4.8,
  },
  {
    id: 14,
    title: 'Samsung Galaxy S23',
    description: 'Flagship Android phone with great camera.',
    price: 74999,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=14',
    rating: 4.6,
  },
  {
    id: 15,
    title: 'OnePlus 12',
    description: 'High-performance phone with fast charging.',
    price: 59999,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=15',
    rating: 4.5,
  },
  {
    id: 16,
    title: 'Realme GT Neo 3',
    description: 'Affordable and powerful gaming phone.',
    price: 34999,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=16',
    rating: 4.3,
  },
  {
    id: 17,
    title: 'Google Pixel 7',
    description: 'Pure Android experience with powerful camera.',
    price: 68999,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=17',
    rating: 4.7,
  },
  {
    id: 18,
    title: 'Xiaomi 13 Pro',
    description: 'Flagship killer with Leica camera tech.',
    price: 59999,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=18',
    rating: 4.4,
  },

  // Laptops
  {
    id: 19,
    title: 'MacBook Air M2',
    description: 'Super fast and lightweight Apple laptop.',
    price: 99999,
    category: 'Laptops',
    image: 'https://picsum.photos/200/300?random=19',
    rating: 4.9,
  },
  {
    id: 20,
    title: 'Dell XPS 13',
    description: 'Compact Windows laptop with premium design.',
    price: 89999,
    category: 'Laptops',
    image: 'https://picsum.photos/200/300?random=20',
    rating: 4.7,
  },
  {
    id: 21,
    title: 'HP Pavilion 15',
    description: 'Affordable and reliable laptop for students.',
    price: 54999,
    category: 'Laptops',
    image: 'https://picsum.photos/200/300?random=21',
    rating: 4.2,
  },
  {
    id: 22,
    title: 'Lenovo Legion 5',
    description: 'Gaming laptop with RTX graphics.',
    price: 78999,
    category: 'Laptops',
    image: 'https://picsum.photos/200/300?random=22',
    rating: 4.6,
  },
  {
    id: 23,
    title: 'Asus Vivobook',
    description: 'Budget-friendly laptop for work and play.',
    price: 45999,
    category: 'Laptops',
    image: 'https://picsum.photos/200/300?random=23',
    rating: 4.3,
  },
  {
    id: 24,
    title: 'Acer Aspire 7',
    description: 'Mid-range performance laptop.',
    price: 49999,
    category: 'Laptops',
    image: 'https://picsum.photos/200/300?random=24',
    rating: 4.4,
  },

  // Perfumes
  {
    id: 25,
    title: 'Chanel No. 5',
    description: 'Classic fragrance for women.',
    price: 8499,
    category: 'Perfume',
    image: 'https://picsum.photos/200/300?random=25',
    rating: 4.8,
  },
  {
    id: 26,
    title: 'Dior Sauvage',
    description: 'Fresh and bold men’s fragrance.',
    price: 7599,
    category: 'Perfume',
    image: 'https://picsum.photos/200/300?random=26',
    rating: 4.7,
  },
  {
    id: 27,
    title: 'Versace Eros',
    description: 'Bold and sensual men’s perfume.',
    price: 6999,
    category: 'Perfume',
    image: 'https://picsum.photos/200/300?random=27',
    rating: 4.6,
  },
  {
    id: 28,
    title: 'Gucci Bloom',
    description: 'Floral fragrance for women.',
    price: 7999,
    category: 'Perfume',
    image: 'https://picsum.photos/200/300?random=28',
    rating: 4.5,
  },
  {
    id: 29,
    title: 'CK One',
    description: 'Unisex perfume with fresh scent.',
    price: 6499,
    category: 'Perfume',
    image: 'https://picsum.photos/200/300?random=29',
    rating: 4.4,
  },
  {
    id: 30,
    title: 'Tom Ford Noir',
    description: 'Sophisticated and luxurious scent.',
    price: 9999,
    category: 'Perfume',
    image: 'https://picsum.photos/200/300?random=30',
    rating: 4.9,
  },

  // More Misc to reach 40
  {
    id: 31,
    title: 'Basic Round Neck Tee',
    gender: 'Men',
    description: 'Everyday comfortable t-shirt.',
    price: 399,
    category: 'Mens',
    image: 'https://picsum.photos/200/300?random=31',
    rating: 4.2,
    availableSizes: ['S', 'M', 'L'],
  },
  {
    id: 32,
    title: 'Party Dress',
    gender: 'Women',
    description: 'Perfect dress for night outs.',
    price: 1899,
    category: 'Womens',
    image: 'https://picsum.photos/200/300?random=32',
    rating: 4.4,
    availableSizes: ['S', 'M'],
  },
  {
    id: 33,
    title: 'Noise Smartwatch',
    description: 'Smartwatch with fitness tracking.',
    price: 3499,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=33',
    rating: 4.3,
  },
  {
    id: 34,
    title: 'Boat Airdopes 441',
    description: 'Wireless earbuds with long battery.',
    price: 2499,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=34',
    rating: 4.2,
  },
  {
    id: 35,
    title: 'HP Envy x360',
    description: 'Convertible touchscreen laptop.',
    price: 85999,
    category: 'Laptops',
    image: 'https://picsum.photos/200/300?random=35',
    rating: 4.8,
  },
  {
    id: 36,
    title: 'Skinn by Titan',
    description: 'Fresh and youthful women’s fragrance.',
    price: 2999,
    category: 'Perfume',
    image: 'https://picsum.photos/200/300?random=36',
    rating: 4.3,
  },
  {
    id: 37,
    title: 'Zara Men Cologne',
    description: 'Affordable men’s daily wear cologne.',
    price: 1999,
    category: 'Perfume',
    image: 'https://picsum.photos/200/300?random=37',
    rating: 4.1,
  },
  {
    id: 38,
    title: 'Nike Sportswear Hoodie',
    gender: 'Men',
    description: 'Comfortable and sporty hoodie.',
    price: 2599,
    category: 'Mens',
    image: 'https://picsum.photos/200/300?random=38',
    rating: 4.7,
    availableSizes: ['M', 'L', 'XL'],
  },
  {
    id: 39,
    title: 'ASUS TUF Gaming A15',
    description: 'High-performance gaming laptop.',
    price: 94999,
    category: 'Laptops',
    image: 'https://picsum.photos/200/300?random=39',
    rating: 4.6,
  },
  {
    id: 40,
    title: 'iPhone SE',
    description: 'Compact and affordable Apple smartphone.',
    price: 42999,
    category: 'Smartphones',
    image: 'https://picsum.photos/200/300?random=40',
    rating: 4.4,
  },
];
