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
      hover:shadow-card flex flex-col gap-4  rounded-t-md cursor-pointer transition-all duration-200`}
      onMouseEnter={handleHoverProduct}
      onMouseLeave={handleRemoveHoverProduct}
    >
      <p className="right-[10%] top-[5%] text-sm uppercase p-2 bg-[rgba(255,245,232,0.7)] bg-opacity-0 absolute text-black">
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
        <a href="" className="font-semibold">
          Букет «Нежные объятия»
        </a>
        <p className="text-[#E58484] font-semibold text-xl">3 560 p</p>
        <ProductCardBottom id={data}/>
      </div>
    </div>
  );
};
export default Product;
