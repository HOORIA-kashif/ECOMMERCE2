import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify"; // ✅ Import toast
import image1 from '../assets/saleImages/s1.webp';
import image2 from '../assets/saleImages/1.avif';
import image3 from '../assets/saleImages/2.webp';
import image4 from '../assets/saleImages/3.avif';
import image5 from '../assets/saleImages/s5.jpg';
import image6 from '../assets/saleImages/4.jpg';
import image7 from '../assets/saleImages/5.jpg';
import image8 from '../assets/saleImages/6.webp';
import image9 from '../assets/saleImages/s3.jpg';
import image10 from '../assets/saleImages/7.avif';
import image11 from '../assets/saleImages/8.jpg';
import image12 from '../assets/saleImages/9.jpg';
import image13 from '../assets/saleImages/s4.jpg';
import image14 from '../assets/saleImages/10.webp';
import image15 from '../assets/saleImages/11.jpg';
import image16 from '../assets/saleImages/12.jpg';
import image17 from '../assets/saleImages/s2.jpg';
import image18 from '../assets/saleImages/13.jpg';
import image19 from '../assets/saleImages/14.jpg';
import image20 from '../assets/saleImages/15.jpg';


// Sample Product Data (Aap API se bhi fetch kar sakte hain)
const products = [
  {
    id: 1,
    name: "2023 Spring New Men's Sports Shoes Mesh/SHAOSZC Breathable and Lightweight",
    description: "Sports & outdoor Comfortable light weight Sneakers Running Walking Gym Fashion Breathable.",
    price: 839,
    image: image1,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image1, image2, image3, image4],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    id: 2,
    name: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed Tracksuit",
    description: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed.",
    price: 839,
    image: image5,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image5, image6, image7, image8],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Womens bags Hand bags and shoulder Cross Body bag at discounted Price with Long Strap",
    description: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed.",
    price: 839,
    image: image9,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image9, image10, image11, image12],
    sizes: ["One Size"],
  },
  {
    id: 4,
    name: "Stainless Steel Casual Watch for Man SMART Quartz Watches for Boys & Men New Fashion Wrist watch",
    description: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed.",
    price: 839,
    image: image14,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image14, image13, image15, image16],
    sizes: ["One Size"],
  },
  {
    id: 5,
    name: "Stainless Steel Casual Watch for Man SMART Quartz Watches for Boys & Men New Fashion Wrist watch",
    description: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed.",
    price: 839,
    image: image17,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image17, image18, image19, image20],
    sizes: ["One Size"],
  },
  {
    id: 6,
    name: "2023 Spring New Men's Sports Shoes Mesh/SHAOSZC Breathable and Lightweight",
    description: "Sports & outdoor Comfortable light weight Sneakers Running Walking Gym Fashion Breathable.",
    price: 839,
    image: image1,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image1, image2, image3, image4],
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    id: 7,
    name: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed Tracksuit",
    description: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed.",
    price: 839,
    image: image5,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image5, image6, image7, image8],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Womens bags Hand bags and shoulder Cross Body bag at discounted Price with Long Strap",
    description: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed.",
    price: 839,
    image: image9,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image9, image10, image11, image12],
    sizes: ["One Size"],
  },
  {
    id: 9,
    name: "Stainless Steel Casual Watch for Man SMART Quartz Watches for Boys & Men New Fashion Wrist watch",
    description: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed.",
    price: 839,
    image: image14,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image14, image13, image15, image16],
    sizes: ["One Size"],
  },
  {
    id: 10,
    name: "Stainless Steel Casual Watch for Man SMART Quartz Watches for Boys & Men New Fashion Wrist watch",
    description: "Black Trendy Printed Tracksuit For Men and Boys - Soft and Comfortable Fabric T Shirt and Trouser Printed.",
    price: 839,
    image: image17,
    oldPrice: 1500,
    discount: 44,
    rating: 4.5,
    reviews: 663,
    images: [image17, image18, image19, image20],
    sizes: ["One Size"],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id)); // Find the product by ID

  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);

  // Cart Function
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, size: selectedSize, quantity, image: mainImage }));
     toast.success("🛒 Adding product to cart!");
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      {/* Product Images Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/5">
          <img src={mainImage} alt={product.name} className="w-full rounded-lg shadow-md" />
          <div className="flex gap-2 mt-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                className={`w-16 h-16 cursor-pointer rounded-md ${mainImage === img ? "border-2 border-black" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-2/5 space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"} />
            ))}
            <span className="text-gray-600">({product.reviews} Ratings)</span>
          </div>
          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-red-500">Rs. {product.price}</span>
            <span className="text-gray-500 line-through">Rs. {product.oldPrice}</span>
            <span className="text-green-600 font-semibold">{product.discount}% OFF</span>
          </div>

          {/* Size Selector */}
          <div className="flex items-center gap-3">
            <label htmlFor="size" className="text-lg font-semibold">Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-3 py-1 border rounded-md"
            >
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button
              className="px-3 py-1 border rounded-md"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="px-3 py-1 border rounded-md"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Wishlist & Add to Cart */}
          <div className="flex gap-4">
            <button
              className="px-5 py-2 bg-black text-white rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button
              className="px-5 py-2 bg-red-900 text-white rounded-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="border border-gray-700 p-5 mt-4">
        <h2 className="text-2xl font-bold">Product details of {product.name}</h2>
        <p>Easy to Wear</p>
        <p>Light Weight</p>
        <p>Latest Design</p>
        <p>Regular Fit</p>
        <p>Easy to use</p>
        <p>Imported Quality</p>
        <p>Modern Style</p>
        <p>Export Quality for regular use</p>
        <p><span className="font-bold">Available Colours:</span> Black And White</p>
        <p><span className="font-bold">Available Sizes:</span> {product.sizes.join(", ")}</p>
      </div>

      {/* Customer Reviews */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>

        {/* Sample Reviews */}
        <div className="border-b pb-3 mb-3">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-gray-800">"Great product! Sound quality is amazing. Highly recommended!"</p>
          <span className="text-gray-500 text-sm">- Ahmed Raza</span>
        </div>

        <div className="border-b pb-3 mb-3">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-gray-800">"Good value for money, but battery timing is not great."</p>
          <span className="text-gray-500 text-sm">- Ali Khan</span>
        </div>

        <div className="border-b pb-3 mb-3">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <p className="text-gray-800">"Excellent build quality and comfortable to wear!"</p>
          <span className="text-gray-500 text-sm">- Sana Malik</span>
        </div>

        <div className="border-b pb-3 mb-3">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-gray-800">"Sound is good, but took too long to deliver."</p>
          <span className="text-gray-500 text-sm">- Hamza Ahmed</span>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <p className="text-gray-800">"Best headphones in this price range!"</p>
          <span className="text-gray-500 text-sm">- Ayesha Noor</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;