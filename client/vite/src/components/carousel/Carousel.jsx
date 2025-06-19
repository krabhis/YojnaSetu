// YojnaSetuCarousel.jsx
import React, { useEffect, useState } from "react";
import "./Carousel.css";

const slides = [
  {
    title: "Empowering Citizens",
    caption: "Making every Indian aware of the government support they deserve.",
    image: "https://media.istockphoto.com/id/1152403495/photo/voter-sign-india.webp?b=1&s=612x612&w=0&k=20&c=VC3rHqeIEwM467RbJntYvLQ57Zb2GbxeOkGrSWsvSd0=",
  },
  {
    title: "One App, All Schemes",
    caption: "All central and state schemes, one place to discover them all.",
    image: "https://www.shutterstock.com/shutterstock/photos/2130701423/display_1500/stock-photo-rural-indian-family-meeting-with-bank-manager-or-financial-advisor-male-agent-with-laptop-2130701423.jpg",
  },
  {
    title: "Simplified, Localized Information",
    caption: "Scheme details explained in easy terms, tailored to your region and language.",
    image: "https://media.istockphoto.com/id/1398807603/vector/indian-languages-word-cloud-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=c76OOr7kEV2mP9n7UiGqXxmjtbL0mnFtEGGh9I1BZAQ=",
  },
  {
    title: "Smart Recommendations",
    caption: "Know what you’re eligible for — instantly.",
    image: "https://media.istockphoto.com/id/1409519679/photo/group-of-women-discussing-in-a-co-working-office.webp?b=1&s=612x612&w=0&k=20&c=1WNyo60RK9Tvylh6-pMnQnswhBr0uxWpP41lVVUGZYk=",
  },
  {
    title: "Apply with Confidence",
    caption: "Learn what documents you need, how to apply, and get notified about deadlines.",
    image: "https://media.istockphoto.com/id/1313502972/photo/portrait-of-beautiful-woman-having-fun.webp?b=1&s=612x612&w=0&k=20&c=KlcymkNSBKSXgAtGebDJNO4DmCK18S2CyJGtQFtny7I=",
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
                <h2>{slide.title}</h2>
                <p>{slide.caption}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
