// src/store/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

// images of product1
import image1 from '../assets/saleImages/s1.webp'
import image2 from '../assets/saleImages/s2.jpg'
import image3 from '../assets/saleImages/s3.jpg'
import image4 from '../assets/saleImages/10.webp'
import image5 from '../assets/saleImages/s5.jpg'
import image6 from '../assets/saleImages/d1.webp'
import image7 from '../assets/saleImages/d2.webp'
import image8 from '../assets/saleImages/d3.jpg'
import image9 from '../assets/saleImages/d4.jpg'
import image10 from '../assets/saleImages/d5.jpg'
// images of product2

import image11 from '../assets/Best.p.Images/1.jpg'
import image12 from '../assets/Best.p.Images/3.jpg'
import image13 from '../assets/Best.p.Images/4.jpg'
import image14 from '../assets/Best.p.Images/5.jpg'
import image15 from '../assets/Best.p.Images/6.webp'
import image16 from '../assets/Best.p.Images/7.webp'
import image17 from '../assets/Best.p.Images/8.webp'
import image18 from '../assets/Best.p.Images/10.webp'
import image19 from '../assets/Best.p.Images/2.jpg'
import image20 from '../assets/Best.p.Images/9.webp'
// images of men's
import image21 from '../assets/Men.Images/1.webp'
import image22 from '../assets/Men.Images/2.webp'
import image23 from '../assets/Men.Images/3.webp'
import image24 from '../assets/Men.Images/4.webp'
import image25 from '../assets/Men.Images/5.webp'
import image26 from '../assets/Men.Images/6.webp'
import image27 from '../assets/Men.Images/7.webp'
import image28 from '../assets/Men.Images/8.webp'
import image29 from '../assets/Men.Images/9.webp'
import image30 from '../assets/Men.Images/10.webp'

// hover images of man
import image31 from '../assets/Men.Images/11.webp'
import image32 from '../assets/Men.Images/12.webp'
import image33 from '../assets/Men.Images/13.webp'
import image34 from '../assets/Men.Images/14.webp'
import image35 from '../assets/Men.Images/15.webp'
import image36 from '../assets/Men.Images/16.webp'
import image37 from '../assets/Men.Images/17.webp'
import image38 from '../assets/Men.Images/18.webp'
import image39 from '../assets/Men.Images/19.webp'
import image40 from '../assets/Men.Images/20.webp'

// shoes
import image41 from '../assets/saleImages/1.avif'
import image42 from '../assets/saleImages/2.webp'
import image43 from '../assets/saleImages/3.avif'






const initialState = {
 
  // products data
  products: [
    { id: 1, name: "White Sneakers", price: 17, oldPrice: 70, discount: 76, img: image1 },
    { id: 2, name: "Men's Tracksuit", price: 899, oldPrice: 4000, discount: 78, img: image5 },
    { id: 3, name: " Galaxy Bags 3 ", price: 683, oldPrice: 700, discount: 2, img: image3},
    { id: 4, name: "Leather  Jacket", price: 658, oldPrice: 1999, discount: 67, img: image4 },
    { id: 5, name:  "Leather Watch", price: 683, oldPrice: 700, discount: 2, img: image2 },
    { id: 6, name: " Dress", price: 17, oldPrice: 70, discount: 76, img: image6 },
    { id: 7, name: "Women's ", price: 899, oldPrice: 4000, discount: 78, img: image7 },
    { id: 8, name: " Women's Dress", price: 683, oldPrice: 700, discount: 2, img: image8},
    { id: 9, name: "Women's Dress", price: 658, oldPrice: 1999, discount: 67, img: image9 },
    { id: 10, name:  "Women's Dress", price: 683, oldPrice: 700, discount: 2, img: image10 },
   
  ],
    // ProductCard2 ka data
   products2: [
    { id: 6, name: "Bandana Scarf", price: 17, oldPrice: 70, discount: 76, img: image11 },
    { id: 7, name: "Grey Jeans", price: 899, oldPrice: 4000, discount: 78, img: image12 },
    { id: 8, name: "Leather Jacket", price: 683, oldPrice: 700, discount: 2, img: image13 },
    { id: 9, name: "Women's jacket", price: 658, oldPrice: 1999, discount: 67, img: image14 },
    { id: 10, name: "Men's T-shirt", price: 683, oldPrice: 700, discount: 2, img: image15 },
    { id: 11, name: "Track Suit", price: 683, oldPrice: 700, discount: 2, img: image16 },
    { id: 12, name: "Men's Watch", price: 683, oldPrice: 700, discount: 2, img: image17 },
    { id: 13, name: "Winter Cap", price: 683, oldPrice: 700, discount: 2, img: image18 },
    { id: 14, name: "Bandana Scarf", price: 683, oldPrice: 700, discount: 2, img: image19 },
    { id: 15, name: "Women's Abaya", price: 683, oldPrice: 700, discount: 2, img: image20 },
  ],

  men: [
    {
      id: 1,
      image: image21, // Replace with actual image URL
      hoverImage: image31, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      image:image22 , // Replace with actual image URL
      hoverImage: image32, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      image:image23 , // Replace with actual image URL
      hoverImage: image33, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      image:image24 , // Replace with actual image URL
      hoverImage: image34, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 5,
      image:image25 , // Replace with actual image URL
      hoverImage: image35, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      image:image26 , // Replace with actual image URL
      hoverImage: image36, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 7,
      image:image27 , // Replace with actual image URL
      hoverImage: image37, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 8,
      image: image28, // Replace with actual image URL
      hoverImage: image38, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 9,
      image:image29 , // Replace with actual image URL
      hoverImage: image39, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 10,
      image:image30 , // Replace with actual image URL
      hoverImage: image40, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
   
  ],
  
  
  shoes: [
    {
      id: 1,
      image: image1, // Replace with actual image URL
      hoverImage: image41, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      image:image41 , // Replace with actual image URL
      hoverImage: image42, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      image:image42 , // Replace with actual image URL
      hoverImage: image43, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      image:image43 , // Replace with actual image URL
      hoverImage: image1, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 5,
      image:image1 , // Replace with actual image URL
      hoverImage: image42, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      image:image41 , // Replace with actual image URL
      hoverImage: image43, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 7,
      image:image42 , // Replace with actual image URL
      hoverImage: image1, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 8,
      image: image43, // Replace with actual image URL
      hoverImage: image41, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 9,
      image:image1 , // Replace with actual image URL
      hoverImage: image43, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 10,
      image:image41 , // Replace with actual image URL
      hoverImage: image43, // Add this!
      title: "Mens Denim Jacket Stretchable Fine Lycra",
      rating: 4,
      reviews: 4,
      price: 2999,
      oldPrice: 3499,
      sale: true,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
    },
   
  ],
  
  
  
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
export const selectProducts = (state) => state.products.products;
export const selectProducts2 = (state) => state.products.products2;
export const selectmen = (state) => state.products.men;
export const selectshoes = (state) => state.products.shoes;
