import React from "react";
import image1 from '../assets/ExploreImages/1.webp';
import image2 from '../assets/ExploreImages/2.avif';
import image3 from '../assets/ExploreImages/3.avif';
import image4 from '../assets/ExploreImages/4.jpg';
import image5 from '../assets/ExploreImages/5.jpg';
import image6 from '../assets/ExploreImages/6.jpg';
import image7 from '../assets/ExploreImages/7.jpg';
import image8 from '../assets/ExploreImages/8.jpg';
import image9 from '../assets/ExploreImages/9.webp';
import image10 from '../assets/ExploreImages/10.webp';
import image11 from '../assets/ExploreImages/11.webp';
import image12 from '../assets/ExploreImages/12.webp';



const categories = [
  { name: "Ladys Bags", image: image1 },
  { name: "Sunglasses", image:  image2 },
  { name: "Bracelets 2 in 1", image:  image3 },
  { name: "Golden spiral Ring", image: image4 },
  { name: "Shoes", image:  image5 },
  { name: "Leather Shoes", image:  image6 },
  { name: "Necklace", image:  image7 },
  { name: "Titanium Watch", image:  image8 },
  { name: "Bandana Scarf", image:  image9 },
  { name: "Couple Watch", image:  image10 },
  { name: "Scrunchies", image:  image11 },
  { name: "Laminate Ring", image: image12},
  { name: "Microphones", image:  image1 },
  { name: "Toilet Covers", image:  image2 },
  { name: "Bracelets 2 in 1", image:  image3 },
  { name: "Golden spiral Ring", image: image4 },
  { name: "Shoes", image:  image5 },
  { name: "Leather Shoes", image:  image6 },
];

const Explore = () => {
  return (
    <div className="p-5 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">More To Explore</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4
      ">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm
          transform transition-transform duration-300 hover:scale-115
          hover:shadow-lg">
            <img src={category.image} alt={category.name} className="w-20 h-20 object-cover " />
            <p className="mt-2 text-sm font-medium text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
