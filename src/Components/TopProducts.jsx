import React from "react";

function TopProducts() {
  const products = [
    {
      name: "Milk",
      price: "₹30",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
    },
    {
      name: "Bread",
      price: "₹40",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    },
    {
      name: "Apple",
      price: "₹120",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
    },
    {
      name: "Chips",
      price: "₹20",
      image:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400",
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Top Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="mt-3 font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;