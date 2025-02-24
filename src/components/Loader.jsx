import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <div className="relative w-16 h-16">
        
        <div className="absolute inset-0 border-[6px] border-black border-dotted rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
