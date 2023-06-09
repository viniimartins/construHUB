import "./styles.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider, { CustomArrowProps } from "react-slick";

import { ContentCarousel } from "../../componets/ContentCarousel";

function Arrow(props: CustomArrowProps) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />;
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}


export function Carousel() {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <div key={num}>
        <ContentCarousel />
      </div>
    ));

  return (
    <div className="App">
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
