import React from "react";
import ProductCard from "./Men'sPC.jsx";
import { useSelector } from "react-redux"; // ✅ Import useSelector

import { selectshoes } from "../redux/Slice";

const ProductList = () => {
    const men = useSelector(selectshoes); // ✅ Get men from Redux
  return (
    <div className="container mx-auto py-8 px-4">
    <h2 className="text-2xl font-bold
    py-6 text-center relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gray-300 after:mx-auto after:mt-1">
 shoes
</h2>

      <div className="grid grid-cols-2 xs:grid-cols-2
      gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {men.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
