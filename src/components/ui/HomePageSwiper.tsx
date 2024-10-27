import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "../../styles/main.style.css";
type HomePageSwiperProps = {};

const HomePageSwiper: React.FC<HomePageSwiperProps> = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Navigation]}
      navigation={true}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide className="relative lg:h-[700px]">
        <img
          src="https://funburg.ru/upload/iblock/a97/tdnh7r94ktk9o71ooqxne27t2ddb1z69/Nabor-sharov-1920-806.webp"
          alt=""
          className="absolute h-[100%] w-[100%] object-cover"
        />
        <div className="absolute z-1 flex flex-col justify-center gap-10 max-w-max h-[100%] left-[15%]">
          <a
            href=""
            className="text-white text-[65px] max-w-[70%] font-playfair block leading-[65px]"
          >
            Свежие цветы с доставкой для самых близких
          </a>
          <p className="text-xl text-yellow-50">Готовые необычные решения для любого случая </p>
          <button className="uppercase font-semibold text-white bg-cl2Orange p-3 rounded w-[250px]">
            Перейти в каталог
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative lg:h-[700px]">
        <img
          src="https://funburg.ru/upload/iblock/a97/tdnh7r94ktk9o71ooqxne27t2ddb1z69/Nabor-sharov-1920-806.webp"
          alt=""
          className="absolute h-[100%] w-[100%] object-cover"
        />
        <div className="absolute z-1 flex flex-col justify-center gap-10 max-w-max h-[100%] left-[15%]">
          <a
            href=""
            className="text-white text-[65px] max-w-[70%] font-playfair block leading-[65px]"
          >
            Свежие цветы с доставкой для самых близких
          </a>
          <p className="text-xl text-yellow-50">Готовые необычные решения для любого случая </p>
          <button className="uppercase font-semibold text-white bg-[#f8ca8a] p-3 rounded w-[250px]">
            Перейти в каталог
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative lg:h-[700px]">
        <img
          src="https://funburg.ru/upload/iblock/a97/tdnh7r94ktk9o71ooqxne27t2ddb1z69/Nabor-sharov-1920-806.webp"
          alt=""
          className="absolute h-[100%] w-[100%] object-cover"
        />
        <div className="absolute z-1 flex flex-col justify-center gap-10 max-w-max h-[100%] left-[15%]">
          <a
            href=""
            className="text-white text-[65px] max-w-[70%] font-playfair block leading-[65px]"
          >
            Свежие цветы с доставкой для самых близких
          </a>
          <p className="text-xl text-yellow-50">Готовые необычные решения для любого случая </p>
          <button className="uppercase font-semibold text-white bg-cl2Orange p-3 rounded w-[250px]">
            Перейти в каталог
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative lg:h-[700px]">
        <img
          src="https://funburg.ru/upload/iblock/a97/tdnh7r94ktk9o71ooqxne27t2ddb1z69/Nabor-sharov-1920-806.webp"
          alt=""
          className="absolute h-[100%] w-[100%] object-cover"
        />
        <div className="absolute z-1 flex flex-col justify-center gap-10 max-w-max h-[100%] left-[15%]">
          <a
            href=""
            className="text-white text-[65px] max-w-[70%] font-playfair block leading-[65px]"
          >
            Свежие цветы с доставкой для самых близких
          </a>
          <p className="text-xl text-yellow-50">Готовые необычные решения для любого случая </p>
          <button className="uppercase font-semibold text-white bg-cl2Orange p-3 rounded w-[250px]">
            Перейти в каталог
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default HomePageSwiper;
