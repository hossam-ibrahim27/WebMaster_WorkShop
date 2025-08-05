import React from "react";

export default function BlogCard({ image, title, description }) {
  return (
    <div className="w-1xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-500 w-[600px] h-[400px] object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-center">{title}</h3>
        <p className="text-gray-600 text-center text-base">{description}</p>
      </div>
    </div>
  );
}

