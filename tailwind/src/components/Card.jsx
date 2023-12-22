import React from "react";

export default function Card() {
  return (
    <div className="max-w-sm mx-auto my-7 rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://kalvium.com/wp-content/uploads/2022/07/Logo-nav.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Kalvium store</div>
        <p className="text-gray-500 text-base">You have a new course</p>
      </div>
    </div>
  );
}