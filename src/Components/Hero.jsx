import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
    "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=1200",
    "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=1200",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 py-4">
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-[350px] object-cover rounded-xl"
      />
    </div>
  );
}

export default Hero;