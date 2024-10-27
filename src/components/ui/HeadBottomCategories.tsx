import { useContext, useState } from "react";
import { categoryLinks } from "../../db/data";
import { CategoryContext } from "../features/context/CategoryContext";

type Props = {};

const HeadBottomCategories = (props: Props) => {
  const { setIsLinksModal, setCategoryName } = useContext(CategoryContext);

  const handleHover = (e: any) => {
    setIsLinksModal(true);
    setCategoryName(e.target.innerText);
  };
  const removeHover = () => {
    setIsLinksModal(false);
    // setCategoryName("");
  };
  return (
    <div>
      <div className="border-b border-gray-600 border-opacity-[0.3]">
        <div className="max-w-max mx-auto grid grid-cols-4 text-center ">
          {categoryLinks.map((item, i) => {
            return (
              <a
                href={``}
                key={i}
                className="cursor-pointer p-2 pb-3 hover:text-cl2Orange transition-all duration-200"
                onMouseEnter={handleHover}
                onMouseLeave={removeHover}
              >
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeadBottomCategories;
