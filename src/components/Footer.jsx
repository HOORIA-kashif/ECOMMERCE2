import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="  py-10">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 bg-black">
        <div className="md:flex md:justify-between md:items-center border-b border-gray-700 p-15">
          <div>
            <h2 className="text-lg font-bold text-white">Subscribe to our newsletter</h2>
            <p className="text-gray-400 text-sm">
              Signup for our newsletter to stay up to date on sales and events.
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent border-b border-gray-500 text-white px-2 py-1 outline-none"
            />
            <button className="text-white font-bold">Join</button>
          </div>
        </div>
        
        {/* Social Icons */}
      
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-black text-sm">
     
        <div>
        <div className="flex space-x-4 mt-4">
       
       <span className="text-xl cursor-pointer text-black"><FaFacebook/></span>
       <span className="text-xl cursor-pointer text-black"><FaTwitter/></span>
       <span className="text-xl cursor-pointer text-black"><FaInstagram/></span>
       <span className="text-xl cursor-pointer text-black"><FaLinkedin/></span>
     
     </div>
          <h3 className="font-bold text-black mt-5">MAIN MENU</h3>
          <ul className="mt-2 space-y-2">
            <li>About Us</li>
            <li>FAQs</li>
            <li>Payment Method</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-black">USEFUL LINKS</h3>
          <ul className="mt-2 space-y-2">
            <li>Contact Information</li>
            <li>Terms of Service</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-black  space-y-2">CONTACT US</h3>
          <p className="mt-2">
            <strong className="mb-5">DENIMS</strong> <br />
            <strong className="mb-5">Address:</strong> Office # 310 3rd Floor Victoria Center
           Islamabad Pakistan  <br />
            <strong className="mb-5">Email:</strong> support@Mirora.pk <br />
            <strong className="mb-2">Phone:</strong> +923 422 776 887
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
