import React from "react";
import SliderModule from "react-slick";
const Slider = SliderModule.default || SliderModule;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  console.log("Slider:", Slider);
  const images = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
    "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=1200",
    "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=1200",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full px-6 py-4">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[350px] object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;