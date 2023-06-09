import React from 'react';
import CarouselComponent from './Carousel';

export const Carousel: React.FC = () => {
  const slides: Slide[] = [
    {
      imageUrl: 'https://example.com/slide1.jpg',
      caption: 'Slide 1',
    },
    {
      imageUrl: 'https://example.com/slide2.jpg',
      caption: 'Slide 2',
    },
    {
      imageUrl: 'https://example.com/slide3.jpg',
      caption: 'Slide 3',
    },
  ];

  return (
    <div>
      <h1>Carousel Example</h1>
      <CarouselComponent slides={slides} />
    </div>
  );
};

 default App;
