import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { items } from "../../../db/data";
type HomePageSwiperProps = {};

const HomePageSwiper: React.FC<HomePageSwiperProps> = () => {
  return (
    <div className="relative">
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        loop={true}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        className="mySwiper"
      >
        {items.map((val, i) => {
          return (
            <SwiperSlide className="relative h-[450px] sm:h-[600px] lg:h-[800px]" key={i}>
              <img
                src={val.image}
                alt=""
                className="absolute h-[100%] z-[-1] w-[100%] object-cover"
              />
              <div className="w-full lg:max-w-max flex flex-col justify-center gap-10 mx-auto h-[100%] ">
                <a
                  href=""
                  className="text-white text-[65px] max-w-[70%] font-playfair block leading-[65px]"
                >
                  Свежие цветы с доставкой для самых близких
                </a>
                <p className="text-xl text-yellow-50">
                  Готовые необычные решения для любого случая{" "}
                </p>

                <div className="flex gap-5">
                  <button className="uppercase font-semibold text-white bg-cl2Orange p-3 rounded w-[250px]">
                    Перейти в каталог
                  </button>
                  <div className="relative flex gap-4">
                    <button
                      className="prev-button rounded-[50%] w-[40px] h-[40px] text-cl2Orange hover:text-opacity-[0.4] hover:border-opacity-[0.4]
              border-[1px] border-cl2Orange transition"
                    >
                      {`<`}
                    </button>
                    <button
                      className="next-button rounded-[50%] w-[40px] h-[40px] text-cl2Orange hover:text-opacity-[0.4] hover:border-opacity-[0.4]
              border-[1px] border-cl2Orange transition"
                    >
                      {`>`}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default HomePageSwiper;
