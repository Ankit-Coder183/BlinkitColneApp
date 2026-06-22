function TopProducts({ cart, addToCart, removeFromCart }) {
  const productData = {
    Fruits: [
      {
        name: "Apple",
        price: "₹120",
        image:
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
      },
      {
        name: "Banana",
        price: "₹50",
        image:
          "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
      },
      {
        name: "Orange",
        price: "₹80",
        image:
          "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400",
      },
      {
        name: "Mango",
        price: "₹150",
        image:
          "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
      },
    ],

    Vegetables: [
      {
        name: "Tomato",
        price: "₹40",
        image:
          "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
      },
      {
        name: "Potato",
        price: "₹30",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
      },
      {
        name: "Onion",
        price: "₹35",
        image:
          "https://images.unsplash.com/photo-1508747703725-719777637510?w=400",
      },
      {
        name: "Carrot",
        price: "₹60",
        image:
          "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400",
      },
    ],

    Dairy: [
      {
        name: "Milk",
        price: "₹30",
        image:
          "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
      },
      {
        name: "Cheese",
        price: "₹200",
        image:
          "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400",
      },
      {
        name: "Butter",
        price: "₹90",
        image:
          "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400",
      },
      {
        name: "Curd",
        price: "₹50",
        image:
          "https://images.unsplash.com/photo-1571212515416-fca88e0f2c0d?w=400",
      },
    ],

    Snacks: [
      {
        name: "Chips",
        price: "₹20",
        image:
          "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400",
      },
      {
        name: "Cookies",
        price: "₹60",
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
      },
      {
        name: "Popcorn",
        price: "₹40",
        image:
          "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400",
      },
      {
        name: "Nachos",
        price: "₹100",
        image:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400",
      },
    ],
  };

  const isInCart = (product) =>
    cart.some((item) => item.name === product.name);

  const getProduct = (product) =>
    cart.find((item) => item.name === product.name);

  return (
    <div className="p-6 bg-gray-50">
      {Object.entries(productData).map(([category, products]) => (
        <div key={category} className="mb-10">
          <h2 className="text-3xl font-bold mb-5">{category}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl p-4 hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                />

                <h3 className="mt-3 font-bold">{product.name}</h3>
                <p>{product.price}</p>

                {isInCart(product) ? (
                  <div className="flex justify-between items-center mt-3 bg-green-500 text-white px-4 py-2 rounded">
                    <button
                      onClick={() => removeFromCart(product.name)}
                      className="font-bold text-xl"
                    >
                      -
                    </button>

                    <span>{getProduct(product).qty}</span>

                    <button
                      onClick={() => addToCart(product)}
                      className="font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-3 bg-green-500 text-white py-2 rounded"
                  >
                    Add
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopProducts;