export function Carousel(){
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
    )
}