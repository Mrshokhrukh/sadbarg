import React from "react";

type ButtonProductProps = {
  text: string;
};

const ButtonProduct: React.FC<ButtonProductProps> = ({ text }) => {
  return (
    <button
      className="active:bg-[#93caa5] mt-2 px-1 opacity-0 group-hover:opacity-100 w-full transition-all bg-[#80A98D] duration-200
        py-3  rounded-sm text-white font-semibold text-lg"
    >
      {text}
    </button>
  );
};
export default ButtonProduct;
