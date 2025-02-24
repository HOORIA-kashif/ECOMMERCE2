import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaRegHeart, FaSearch, FaBars, FaTimes, FaHeadphones } from "react-icons/fa";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "text-underline font-semibold" : "text-black");

  return (
    <>
      {/*  Top Navbar (Desktop & Tablet) */}
      <div className="hidden md:block text-black py-7">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/*  Call Us Section (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-2">
            <FaHeadphones className="text-black" />
            <span className="text-sm">Free Support: (012) 800 456 789</span>
          </div>

          {/*  Logo */}
          <div className="text-2xl font-bold tracking-wide">MIRORA COLLECTION</div>

          {/*  Icons */}
          <div className="flex items-center space-x-6">
            <FaSearch className="cursor-pointer text-lg" onClick={() => setSearchOpen(true)} />
            <Link to="/wishlist">
              <FaRegHeart className="cursor-pointer text-lg" />
            </Link>
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="cursor-pointer text-lg" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs rounded-full px-2">
                  {totalQuantity > 0 ? totalQuantity : 0}
                </span>
              </div>
            </Link>
            <span>$0.00</span>
          </div>
        </div>
      </div>

      {/*  Full-Page Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center z-50">
          <button onClick={() => setSearchOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
            <FaTimes />
          </button>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-3/4 max-w-2xl px-6 py-4 text-2xl text-white bg-transparent border-b-2 border-gray-400 focus:outline-none"
          />
        </div>
      )}

      {/*  Gray Separator Line */}
      <div className="border-t border-gray-700 hidden md:block"></div>

      {/*  Bottom Navbar (Desktop & Tablet) */}
      <div className="hidden md:flex py-3 justify-center  text-black space-x-8 px-4 pt-3">
        <Link to="/" className={`${isActive("/")} font-medium hover:underline`}>Home</Link>
        {/*  Dropdown for Product Pages */}
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`${isActive("/products")} font-medium hover:underline`}>
            Accessories ▼
          </button>
          {dropdownOpen && (
            <div className="absolute top-8 left-0 text-black shadow-lg bg-white z-40 rounded-lg w-40">
              <Link to="/Scarfs" className="block px-4 py-2 hover:bg-gray-300 transition" onClick={() => setDropdownOpen(false)}>Scarfs</Link>
              <Link to="/Jewellery" className="block px-4 py-2 hover:bg-gray-300 transition" onClick={() => setDropdownOpen(false)}>Jewellery</Link>
              <Link to="/Watches" className="block px-4 py-2 hover:bg-gray-300 transition" onClick={() => setDropdownOpen(false)}>Watches</Link>
            </div>
          )}
        </div>
        <Link to="/Men" className={`${isActive("/Men")} font-medium hover:underline`}>Men</Link>
        
        <Link to="/Women" className={`${isActive("/Women")} font-medium hover:underline`}>Women</Link>

        <Link to="/Shoes" className={`${isActive("/Shoes")} font-medium hover:underline`}>Shoes</Link>
      </div>

      {/*  Mobile Navbar */}
      <div className="md:hidden text-black py-3 px-4 flex justify-between items-center">
        <div className="text-xl font-bold">MIRORA COLLECTION</div>
        {/*  Menu Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/*  Mobile Menu (Hamburger) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col py-4 px-6 space-y-5">
          <Link to="/" className="font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
           {/*  Dropdown for accessories in Mobile */}
           <div>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="font-medium hover:text-yellow-500 w-full text-left">
             Accessories ▼
            </button>
            {dropdownOpen && (
              <div className="text-black flex flex-col space-y-2 py-2 px-4 rounded-lg">
                <Link to="/Scarfs" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Scarfs</Link>
                <Link to="/Jewellery" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Jewellery</Link>
                <Link to="/Watches" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Watches</Link>
              </div>
            )}
          </div>
          <Link to="/Men" className="font-medium" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/Women" className="font-medium" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link to="/Shoes" className="font-medium hover:text-underline" onClick={() => setMenuOpen(false)}>Shoes</Link>

          {/*  Icons in Mobile Menu */}
          <div className="flex items-center space-x-6 mt-4">
            <FaSearch className="cursor-pointer hover:text-yellow-500 text-lg" onClick={() => setSearchOpen(true)} />
            <Link to="/wishlist">
              <FaRegHeart className="cursor-pointer hover:text-yellow-500 text-lg" />
            </Link>
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="cursor-pointer  text-lg" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs rounded-full px-2">
                  {totalQuantity > 0 ? totalQuantity : 0}
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;