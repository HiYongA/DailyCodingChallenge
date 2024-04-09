import { useState } from "react";
import "./App.css";
import shin1 from "./img/1.jpg";
import shin2 from "./img/2.jpg";
import shin3 from "./img/3.jpg";
import shin4 from "./img/4.jpg";
import shin5 from "./img/5.jpg";
import shin6 from "./img/6.jpg";

function App() {
  const shin = [
    {
      id: 1,
      src: shin1,
      alt: "shin1",
    },
    {
      id: 2,
      src: shin2,
      alt: "shin2",
    },
    {
      id: 3,
      src: shin3,
      alt: "shin3",
    },
    {
      id: 4,
      src: shin4,
      alt: "shin4",
    },
    {
      id: 5,
      src: shin5,
      alt: "shin5",
    },
    {
      id: 6,
      src: shin6,
      alt: "shin6",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlideBtn = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? shin.length : prevSlide - 1
    );
  };

  const nextSlideBtn = () => {
    setCurrentSlide((nextSlide) =>
      nextSlide === shin.length ? 1 : nextSlide + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlideBtn}>&lt;</button>
      <div className="slide-container">
        {shin.map((img) => (
          <div
            key={img.id}
            className={
              img.id === currentSlide ? "slide-box active" : "slide-box"
            }
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
      <button onClick={nextSlideBtn}>&gt;</button>
    </div>
  );
}

export default App;
