import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProductCards from "../Components/ProductCards";
import TopProducts from "../Components/TopProducts";
import Footer from "../Components/Footer";

function Home({
  cart,
  addToCart,
  removeFromCart,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Header
        cartCount={totalItems}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Hero />

      <ProductCards />

      <TopProducts
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      <Footer />
    </>
  );
}

export default Home;