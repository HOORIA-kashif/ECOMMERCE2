import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-[250px] relative group">
      <div className="relative overflow-hidden">
        <Link to={`/men/${product.id}`} className="block relative">
          {/* Sale Badge (Stays Always Visible) */}
          {product.sale && (
            <span className="absolute top-2 left-2 bg-red-900 text-white text-xs px-2 py-1 rounded z-10">
              SALE
            </span>
          )}

          {/* Normal Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover rounded transition-opacity duration-500 group-hover:opacity-0"
          />

          {/* Hover Image */}
          <img
            src={product.hoverImage}
            alt={product.title}
            className="w-full h-64 object-cover rounded absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        {/* Quick Shop Button (Visible on Hover) */}
        <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
          Quick Shop
        </button>
      </div>

      <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
      <div className="flex items-center text-sm text-gray-500 mt-1">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
        <span className="ml-1">({product.reviews})</span>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-red-600 font-bold">Rs.{product.price}.00</span>
        <span className="text-gray-400 line-through ml-2">Rs.{product.oldPrice}.00</span>
      </div>
      <div className="flex gap-2 mt-2">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border cursor-pointer ${
              color === "blue" ? "bg-blue-600" : "bg-black"
            }`}
          ></div>
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-600">{product.sizes.join("  ")}</div>
    </div>
  );
};

export default ProductCard;
