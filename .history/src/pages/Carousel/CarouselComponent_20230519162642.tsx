import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Slide {
  imageUrl: string;
  caption: string;
}

interface CarouselProps {
  slides: Slide[];
}

export const CarouselComponent: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.imageUrl} alt={slide.caption} />
          <p className="legend">{slide.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};
