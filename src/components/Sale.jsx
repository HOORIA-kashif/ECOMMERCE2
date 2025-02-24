import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../pages/ProductCard";
import { selectProducts } from "../redux/Slice";

const OnSaleNow = () => {
  const products = useSelector(selectProducts);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">On Sale Now</h2>
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnSaleNow;
