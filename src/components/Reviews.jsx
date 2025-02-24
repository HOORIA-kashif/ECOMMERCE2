import React from "react";

const reviews = [
  {
    name: "Khan",
    date: "12/27/2024",
    rating: 5,
    title: "Happy customer",
    comment:
      "I recently found the perfect jacket, and I couldn’t be happier with my choice! The quality is amazing, and it fits just right. I’m really impressed with both the product and the service. It’s exactly what I was looking for. Highly recommend if you’re looking for great jackets!",
  },
  {
    name: "Ali",
    date: "12/26/2024",
    rating: 4,
    title: "Good quality",
    comment: "The jacket is of great quality, but the delivery was a bit slow. Overall, satisfied!",
  },
];

const ratingsSummary = [
  { stars: 5, count: 3 },
  { stars: 4, count: 1 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

const Reviews = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">4.50</div>
        <div className="text-gray-600 text-sm">Based on 4 reviews</div>
      </div>

      <div className="mt-4 space-y-2">
        {[5, 4, 3, 2, 1].map((rating, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="w-6">{rating}★</span>
            <div className="w-full bg-gray-200 rounded-lg h-3">
              <div
                className="bg-green-500 h-3 rounded-lg"
                style={{ width: `${rating * 20}%` }} // Dynamic width
              ></div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg w-full">
        Write a Review
      </button>
      <div className="mt-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold">{review.name[0]}</span>
              </div>
              <div className="ml-3">
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="font-semibold">{review.title}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;