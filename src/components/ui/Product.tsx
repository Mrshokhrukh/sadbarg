import React, { useState } from "react";
import ProductCardBottom from "./ProductCardBottom";

type ProductProps = {
  data: any;
};

const Product: React.FC<ProductProps> = ({ data }) => {
  const [isHoverProduct, setIsHoverProduct] = useState(false);
  const handleHoverProduct = () => {
    setIsHoverProduct(true);
  };
  const handleRemoveHoverProduct = () => {
    setIsHoverProduct(false);
  };
  return (
    <div
      className={`relative group h-full w-full max-w-[500px] max-h-[750px] hover:bg-white p-3 
      sm:hover:shadow-card flex flex-col gap-4  rounded-t-md cursor-pointer transition-all duration-200`}
      onMouseEnter={handleHoverProduct}
      onMouseLeave={handleRemoveHoverProduct}
    >
      <p className="right-[7%] top-[5%] text-[10px] sm:text-sm uppercase p-1  bg-[rgba(255,245,232,0.7)] bg-opacity-0 absolute text-black">
        Хит продаж
      </p>
      <img
        src={
          "https://funburg.ru/upload/resize_cache/iblock/9c7/nuonj3wv4owc299anz3ntzfebso8wmxz/540_540_1/IMG_5309_800.webp"
        }
        alt=""
        className={`h-full object-cover`}
      />
      <div className="flex flex-col gap-2">
        <a href="" className="">
          Букет «Нежные объятия»
        </a>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 sm:gap-4 items-center">
            <p className="text-[#E58484] font-semibold text-lg sm:text-xl">3 560 p</p>
            {true ? (
              <p className="text-gray-400 font-light text-sm sm:text-xl line-through">3 560 p</p>
            ) : (
              ""
            )}
          </div>
          <ProductCardBottom id={data} />
        </div>
      </div>
    </div>
  );
};
export default Product;
