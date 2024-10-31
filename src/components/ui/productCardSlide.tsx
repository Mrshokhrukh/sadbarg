import React from "react";

type ProductCardProps = {
  image: string;
  index: number;
  activeIndex?: number;
};

const ProductCardSlide: React.FC<ProductCardProps> = ({ image, index, activeIndex }) => {
  const isActive = index === activeIndex;

  return (
    <div
      key={index}
      className={`h-full w-full  group hover:bg-white p-4 hover:shadow-lg rounded-xl flex flex-col gap-4 
      cursor-pointer transition-all duration-200 ${isActive ? "" : "max-w-[410px] max-h-[561px]"}`}
    >
      <img src={image} alt="" className={`h-full object-cover`} />
      <div>
        <a href="">Букет «Нежные объятия»</a>
        <p>3 560 p</p>
      </div>
      <button
        className="opacity-0 group-hover:opacity-100 w-full transition-all duration-200
      py-4  rounded-lg text-white font-semibold text-lg"
      >
        Заказать
      </button>
    </div>
  );
};

export default ProductCardSlide;
