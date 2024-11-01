import React from "react";
import ButtonProduct from "./ButtonProduct";

type ProductCardBottomProps = {
  id: any;
};

const ProductCardBottom: React.FC<ProductCardBottomProps> = ({ id }) => {
  return (
    <div
      className="sm:absolute sm:left-0 sm:right-0 sm:px-3 sm:pb-3 sm:group-hover:shadow-[0px_4px_4px_rgba(0,0,0,0.1)]
     rounded-b-md sm:hidden group-hover:flex sm:w-full bg-white sm:top-[100%] z-10"
    >
      <ButtonProduct text="Заказать" id={id} />
    </div>
  );
};
export default ProductCardBottom;
