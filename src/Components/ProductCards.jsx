import React from "react";

function ProductCards() {
  const categories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Snacks",
    "Drinks",
    "Bakery",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">
      {categories.map((item, index) => (
        <div key={index} className="bg-white shadow p-6 rounded-xl text-center">
          {item}
        </div>
      ))}
    </div>
  );
}

export default ProductCards;