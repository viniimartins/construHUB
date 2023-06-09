import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Carousel() {
  const renderSlides = () =>
    [1, 2, 3].map((num) => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider {renderSlides()}</Slider>
    </div>
  );
}
