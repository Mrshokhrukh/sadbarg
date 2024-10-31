import React, { useContext } from "react";
import { CategoryContext } from "../features/context/CategoryContext";
import { categoryLinks } from "../../db/data";
import { Link } from "react-router-dom";

type CategoryModalProps = {
  currentCategory: string;
};

const CategoryModal: React.FC<CategoryModalProps> = ({ currentCategory }) => {
  const { setCategoryName, categoryName } = useContext(CategoryContext);

  if (currentCategory !== categoryName) {
    return;
  }
  return (
    <div
      className="shadow-lg rounded-lg p-2 w-[100%] z-[100] bg-white absolute top-[120%]"
      onMouseEnter={() => setCategoryName(currentCategory)}
      onMouseLeave={() => setCategoryName("")}
    >
      {categoryLinks
        .find((item) => item.text === categoryName)
        ?.links?.map((data) => {
          return (
            <Link
              to={""}
              className="block text-gray-600 text-sm p-1 mt-2 hover:text-cl2Orange border-b border-cl2Orange border-opacity-[0.1] cursor-pointer"
            >
              {data.text}
            </Link>
          );
        })}
    </div>
  );
};
export default CategoryModal;
