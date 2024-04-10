import { useEffect, useState } from "react";
import shin1 from "./img/1.jpg";
import shin2 from "./img/2.jpg";
import shin3 from "./img/3.jpg";
import shin4 from "./img/4.jpg";
import shin5 from "./img/5.jpg";
import shin6 from "./img/6.jpg";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "600px",
  margin: "auto",
  textAlign: "center",
};

const sliderStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const slideStyles = {
  width: "100%",
  height: "320px",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 0.2s ease-in-out",
};

const buttonStyle = {
  position: "absolute",
  padding: "10px 20px",
  fontSize: "30px",
  fontWeight: "bold",
  border: "none",
  opacity: "0.5",
  backgroundColor: "transparent",
  cursor: "pointer",
};

const prevBtnStyle = {
  ...buttonStyle,
  left: "0",
};

const nextBtnStyle = {
  ...buttonStyle,
  right: "0",
};

const dotsContainerStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  bottom: "30px",
};

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

  const slideStylesBackground = {
    ...slideStyles,
    backgroundImage: `url(${shin[currentSlide - 1].src})`,
  };

  const dotStyle = (id) => ({
    cursor: "pointer",
    fontSize: "15px",
    opacity: currentSlide === id ? "0.8" : "0.5",
  });

  useEffect(() => {
    const interval = setInterval(nextBtnClick, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevBtnClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? shin.length : prevSlide - 1
    );
  };

  const nextBtnClick = () => {
    setCurrentSlide((nextSlide) =>
      nextSlide === shin.length ? 1 : nextSlide + 1
    );
  };

  const dotClick = (id) => {
    setCurrentSlide(id);
  };

  return (
    <div style={containerStyle}>
      <h1>1. Carousel</h1>
      <div style={sliderStyle}>
        <button style={prevBtnStyle} onClick={prevBtnClick}>
          &lt;
        </button>
        <div style={slideStylesBackground}></div>
        <button style={nextBtnStyle} onClick={nextBtnClick}>
          &gt;
        </button>
      </div>

      <div style={dotsContainerStyle}>
        {shin.map((image) => (
          <div
            style={dotStyle(image.id)}
            key={image.id}
            onClick={() => dotClick(image.id)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
