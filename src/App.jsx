import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/Store.js";
import Loader from "./components/Loader"; 

import Home from "./pages/Home";
import Men from "./pages/Men.jsx";

import Shoes from "./pages/Shoes.jsx";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage.jsx";
import BestProducts from "./components/BestProducts.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer.jsx";
import Scarfs from "./pages/ScarfPage.jsx";
import Jewellery from "./pages/Jewellery.jsx";
import Watches from "./pages/Watches.jsx";
import MD from "./pages/MD.jsx"; 
import Women from "./pages/Women.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        {loading ? ( 
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/Scarfs" element={<Scarfs />} />
              <Route path="/Jewellery" element={<Jewellery />} />
              <Route path="/Watches" element={<Watches />} />
              <Route path="/men/:id" element={<MD />} />
              <Route path="/Men" element={<Men />} />
              <Route path="/Women" element={<Women />} />
             
              <Route path="/Shoes" element={<Shoes />} />
              <Route path="/cart" element={<CartPage />} /> 
              <Route path="/BestProducts" element={<BestProducts />} /> 
            </Routes>
            <Footer />
            {/*  Add ToastContainer for notifications */}
            <ToastContainer 
              position="top-right"
              autoClose={1500} 
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </>
        )}
      </BrowserRouter>
    </Provider>
  );
}

export default App;

