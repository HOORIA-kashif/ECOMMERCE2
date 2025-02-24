import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/CartSlice';
import { toast } from "react-toastify"; // ✅ Import toast

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b
               border-gray-300 py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg text-gray-600 font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Size: {item.selectedSize}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-900 font-bold">Rs. {item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast.error("❌ Product removed from cart!");
                  }}
                  className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-800 transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300"
            >
              Clear Cart
            </button>
            <div className="text-xl font-bold">
              Total: Rs. {totalPrice}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;