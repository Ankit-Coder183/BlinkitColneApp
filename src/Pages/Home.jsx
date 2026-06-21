import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProductCards from "../Components/ProductCards";
import TopProducts from "../Components/TopProducts";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductCards />
      <TopProducts />
      <Footer />
    </>
  );
}

export default Home;