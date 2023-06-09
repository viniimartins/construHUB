import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export  function Carousel() {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider
        // dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
