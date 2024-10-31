import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items } from "../../db/data";
import ProductCardSlide from "./productCardSlide";

const SlideProducts: React.FC = () => {
  let sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    centerMode: true,
    speed: 500,
    focusOnSelect: true,
    arrows: false,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-6">
      <h1 className="text-[55px] font-playfair">Букеты дня</h1>
      <p className="text-cl2Orange text-xl max-w-[480px] text-center">
        Букеты и композиции, которые мы сможем оперативно собрать для вас без изменений - как на
        картинке!
      </p>

      <div className="relative p-3 w-full max-w-max bg-green-200">
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 p-3 rounded-full shadow-lg z-10 hover:bg-gray-300"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 p-3 rounded-full shadow-lg z-10 hover:bg-gray-300"
        >
          ❯
        </button>

        <Slider ref={sliderRef} {...settings} className="flex">
          {items.map((item, index) => (
            <ProductCardSlide
              image={item.image}
              key={index}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideProducts;
