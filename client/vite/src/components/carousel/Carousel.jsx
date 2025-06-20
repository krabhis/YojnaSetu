// YojnaSetuCarousel.jsx
import React, { useEffect, useState } from "react";
import "./Carousel.css";

const slides = [
  {
  
    image: "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fbanner2.webp&w=1920&q=75",
  },
  {
   
    image: "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fbanner4.webp&w=1920&q=75",
  },
  {
  
    image: "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fbanner5.webp&w=1920&q=75",
  },
  {
   
    image: "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fbanner3.webp&w=1920&q=75",
  },
  {
    title: "Apply with Confidence",
    caption: "Learn what documents you need, how to apply, and get notified about deadlines.",
    image: "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fbanner3.webp&w=1920&q=75",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="parent">
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
        >
          {index === current && (
            <>
              <img src={slide.image} alt={slide.title} className="image" />
              <div className="text-box">
              </div>
            </>
          )}
        </div>
      ))}
    </div>
    </section>
  );
};

export default Carousel;
