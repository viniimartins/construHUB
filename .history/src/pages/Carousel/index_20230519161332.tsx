import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const CarouselSlide = styled.div<{ translate: number }>`
  flex: 0 0 100%;
  transition: transform 0.3s;
  transform: translateX(${(props) => props.translate}px);
`;

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideWidth = 100 / slides.length;
  const totalWidth = slides.length * 100;
  const translate = -currentSlide * slideWidth;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <CarouselSlide key={index} translate={translate}>
          {slide}
        </CarouselSlide>
      ))}
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </CarouselContainer>
  );
};

export default Carousel;
