import React from "react";
import ButtonProduct from "./ButtonProduct";

type ProductCardBottomProps = {};

const ProductCardBottom: React.FC<ProductCardBottomProps> = () => {
  return (
    <div className="absolute left-0 right-0 px-3 pb-3 group-hover:shadow-[0px_4px_4px_rgba(0,0,0,0.1)] rounded-b-md hidden group-hover:flex w-full bg-white top-[100%] z-10">
      <ButtonProduct text="Заказать" />
    </div>
  );
};
export default ProductCardBottom;