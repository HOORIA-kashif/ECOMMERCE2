import React, { useState } from 'react';
import { FaShoppingBag, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { toast } from "react-toastify"; // ✅ Import toast
import image1 from '../assets/Best.p.Images/1.jpg'
import image2 from '../assets/Best.p.Images/2.jpg'
import  image3 from '../assets/scarfsImages/1.webp'
import  image4 from '../assets/scarfsImages/2.jpg'
import  image5 from '../assets/scarfsImages/3.jpg'
import  image6 from '../assets/scarfsImages/4.webp'
import  image7 from '../assets/scarfsImages/5.webp'
import  image8 from '../assets/scarfsImages/6.webp'
import  image9 from '../assets/scarfsImages/7.jpg'

const scarfsData = [
  { id: 1, name: "Elegant Silk Scarf", price: "$20", discount: "10% Off", image: image1 },
  { id: 2, name: "Floral Cotton Scarf", price: "$15", discount: "15% Off", image: image2 },
  { id: 3, name: "Winter Wool Scarf", price: "$25", discount: "20% Off", image:image3  },
  { id: 4, name: "Casual Check Scarf", price: "$18", discount: "12% Off", image: image4 },
  { id: 5, name: "Luxury Cashmere Scarf", price: "$35", discount: "8% Off", image:image5  },
  { id: 6, name: "Boho Style Scarf", price: "$22", discount: "10% Off", image:image6  },
  { id: 7, name: "Classic Plaid Scarf", price: "$19", discount: "15% Off", image:image7  },
  { id: 8, name: "Chiffon Summer Scarf", price: "$12", discount: "5% Off", image:image8  },
  { id: 9, name: "Printed Fashion Scarf", price: "$16", discount: "10% Off", image:image9  },
  { id: 10, name: "Soft Pashmina Scarf", price: "$30", discount: "18% Off", image:image3  },
  { id: 11, name: "Elegant Silk Scarf", price: "$20", discount: "10% Off", image: image1 },
  { id: 12, name: "Floral Cotton Scarf", price: "$15", discount: "15% Off", image: image2 },
];

const Scarfs = () => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleAddToCart = (scarf) => {
    dispatch(addToCart({ ...scarf, quantity: 1, image: scarf.image }));
    toast.success("🛒 Adding product to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Scarfs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {scarfsData.map((scarf) => (
          <div key={scarf.id} className="relative bg-white shadow-md rounded-lg p-4 text-center group">
            <img src={scarf.image} alt={scarf.name} className="w-full h-48 object-cover rounded-lg" />
            {/* 🏷️ Sale Badge */}
            <span className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </span>
            {/* ❤️ Heart Icon */}
            <span
              className="absolute top-2 left-2 text-white bg-black rounded-full p-2 text-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={handleLikeClick}
            >
              {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </span>
            {/* 🛒 Hidden "Add to Cart" Button - Appears on Hover */}
            <button
              onClick={() => handleAddToCart(scarf)}
              className="w-[70%] rounded-lg absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black px-4 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black hover:text-white flex items-center"
            >
              <FaShoppingBag className="mr-3 transform group-hover:-translate-x-2 transition-transform duration-300" />
              Add to Cart
            </button>
            <h2 className="mt-2 text-lg font-semibold">{scarf.name}</h2>
            <p className="text-gray-600">{scarf.price}</p>
            <p className="text-red-500 font-semibold">{scarf.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scarfs;
