import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const [cart, setCart] = useState([]);

  // Add product / increase quantity
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.name === product.name
      );

      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove product / decrease quantity
  const removeFromCart = (productName) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === productName
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        }
      />

      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;