import React, { useRef } from "react";
type SlideProductsProps = {};
import Slider from "react-slick";

const SlideProducts: React.FC<SlideProductsProps> = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };


  return (
    <div className="mt-6 flex flex-col items-center gap-6">
      <h1 className="text-[55px] font-playfair">Букеты дня</h1>
      <p className="text-cl2Orange text-xl max-w-[480px] text-center">
        Букеты и композиции, которые мы сможем оперативно собрать для вас без изменений - как на
        картинке!
      </p>
     
     
    </div>
  );
};
export default SlideProducts;
