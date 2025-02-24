import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { FaStar } from "react-icons/fa"; 
import { toast } from "react-toastify"; 
import image1 from '../assets/Men.Images/1.webp';
import image2 from '../assets/Men.Images/2.webp';
import image3 from '../assets/Men.Images/3.webp';
import image4 from '../assets/Men.Images/4.webp';
import Reviews from '../components/Reviews';


const products = [
  {
    id: 1,
    name: "Mens Denim Jacket Stretchable Fine Lycra",
    description: "Sports & outdoor Comfortable light weight Sneakers Running Walking Gym Fashion Breathable.",
    price: 839,
    image: image1,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image1, image2, image3, image4],
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Blue", "Black", "Gray"],
  },
];

const MD = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <div>Product not found</div>;
  }

  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);
  const [activeTab, setActiveTab] = useState("Details");

  // Cart Function
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, size: selectedSize, color: selectedColor, quantity, image: mainImage }));
    toast.success("🛒 Adding product to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Product Images */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <img
            src={mainImage}
            alt="Product"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
                mainImage === img ? "border-black" : "border-transparent"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="flex items-center gap-2 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"} />
          ))}
          <span className="text-gray-600">({product.reviews} Ratings)</span>
        </div>
        <div className="flex items-center space-x-3 mt-2">
          <span className="text-red-600 text-xl font-bold">
            Rs.{product.price}.00
          </span>
          <span className="text-gray-400 line-through">
            Rs.{product.oldPrice}.00
          </span>
          <span className="text-red-600 font-medium">Sale</span>
        </div>

        <p className="text-blue-600 mt-2 cursor-pointer">Shipping calculated at checkout.</p>

        {/* Size Selection */}
        <div className="mt-4">
          <label className="font-semibold">Size</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Color Selection */}
        <div className="mt-4">
          <label className="font-semibold">Color</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {product.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center">
          <label className="font-semibold mr-4">Quantity</label>
          <div className="flex border rounded">
            <button
              className="px-3 py-1 bg-gray-200"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <input
              type="text"
              className="w-12 text-center border-none outline-none"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
            <button
              className="px-3 py-1 bg-gray-200"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <button
          className="w-full bg-gray-400 text-white py-3 rounded mt-6"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button className="w-full bg-black text-white py-3 rounded mt-3">
          Buy it now
        </button>

        {/* Tabs Section */}
        <div className="mt-8">
          <div className="flex border-b">
            {["Details", "Product & Care", "Shipping & Returns"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 border-b-2 font-semibold ${
                  activeTab === tab ? "border-black text-black" : "border-transparent text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-4 text-gray-700">
            {activeTab === "Details" && (
              <p>
                Denims Denim Jacket – the epitome of classic style with a modern twist. Crafted with precision, this jacket is designed to exude both sophistication and rugged charm.

                Made from premium quality denim, it offers a comfortable fit and unmatched durability. Its timeless design is complemented by the iconic denim texture, making it a versatile addition to your wardrobe.

                Featuring a button-up front and multiple pockets, this jacket is not only a style statement but also a practical choice for carrying your essentials. Pair it with your favorite jeans for a double denim look or layer it over a shirt for a smart-casual ensemble.

                Whether you're headed for a casual outing or a night on the town, our Denim Men's Jacket is your go-to choice. It's designed to make you stand out with confidence, whatever the occasion.

                Choose style, choose comfort, choose the Denim Men's Jacket. Elevate your fashion game today
              </p>
            )}
            {activeTab === "Product & Care" && (
              <p>
                Made from premium quality denim, it offers a comfortable fit and unmatched durability.
                Wash with similar colors and avoid bleach.
              </p>
            )}
            {activeTab === "Shipping & Returns" && (
              <p>
                Shipping is calculated at checkout. Returns are accepted within 14 days of delivery.
              </p>
            )}
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default MD;
