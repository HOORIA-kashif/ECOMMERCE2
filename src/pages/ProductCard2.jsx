import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaShoppingBag, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { toast } from "react-toastify"; // ✅ Import toast

const ProductCard2 = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const mainImage = product.img; // Use product.img instead of image

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1, image: mainImage }));
    toast.success("🛒 Adding product to cart!");
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden group flex flex-col justify-between">
      {/* 🖼️ Product Image */}
      <Link to={`/product/${product.id}`} className="block relative">
        <img
          alt={product.name}
          src={mainImage}
          className="w-full h-[200px] object-cover mb-2 rounded transform transition-transform duration-300 group-hover:scale-105"
        />
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
      </Link>

      {/* 🛒 Hidden "Add to Cart" Button - Appears on Hover */}
      <button
        onClick={handleAddToCart}
        className="w-[90%] rounded-lg absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black px-4 py-2 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black hover:text-white group-hover:backdrop-blur-lg flex items-center"
      >
        <FaShoppingBag className="mr-3 transform group-hover:-translate-x-2 transition-transform duration-300" />
        Add to Cart
      </button>

      {/* 📜 Product Details */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-gray-900 font-bold">Rs.{product.price}</p>
        <p className="text-gray-500 line-through">Rs.{product.oldPrice}</p>
        <p className="text-black font-semibold">-{product.discount}%</p>
      </div>
    </div>
  );
};

export default ProductCard2;