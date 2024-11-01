import React from "react";

type ButtonProductProps = {
  text: string;
  id?: any;
};

const ButtonProduct: React.FC<ButtonProductProps> = ({ text, id }) => {
  const handleClick = () => {
    console.log(id);
  };
  return (
    <button
      className="active:bg-[#93caa5] sm:mt-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 w-full transition-all bg-[#80A98D] duration-200
        sm:py-3 py-2 px-3 text-sm  rounded-sm text-white font-semibold sm:text-lg"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
export default ButtonProduct;
