import React from "react";

type SlideProductsProps = {};

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../styles/main.style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const SlideProducts: React.FC<SlideProductsProps> = () => {
  return (
    <div className="mt-6 flex flex-col items-center gap-6">
      <h1 className="text-[55px] font-playfair">Букеты дня</h1>
      <p className="text-cl2Orange text-xl max-w-[480px] text-center">
        Букеты и композиции, которые мы сможем оперативно собрать для вас без изменений - как на
        картинке!
      </p>
      <div className="max-w-max mx-auto mt-8">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2.5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[450px]">
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              className="w-[100%] h-[100%]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default SlideProducts;
