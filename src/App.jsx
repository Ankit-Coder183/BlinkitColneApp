import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Loginpage from "./Pages/Loginpage";
import Signup from "./Pages/Signup";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/login"
        element={<Loginpage setIsLoggedIn={setIsLoggedIn} />}
      />
    </Routes>
  );
}

export default App;