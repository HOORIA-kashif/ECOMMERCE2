import React from "react";
import { useSelector } from "react-redux";
import ProductCard2 from "../pages/ProductCard2";
import { selectProducts2 } from "../redux/Slice";

const BestProducts = () => {
  const products = useSelector(selectProducts2);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Best Products</h2>
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard2 product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
