import React, { useContext } from "react";
import { CategoryContext } from "../features/context/CategoryContext";
import { categoryLinks } from "../../db/data";
import HeadCategoriesModalTable from "./HeadCategoriesModalTable";

type CategoryModalProps = {};

const CategoryModal: React.FC<CategoryModalProps> = ({}) => {
  const { isLinksModal, setIsLinksModal, setCategoryName, categoryName } =
    useContext(CategoryContext);
  if (!isLinksModal) {
    return;
  }
  return (
    <div
      className="shadow-lg rounded-lg p-6 w-[100%] fixed z-[100] bg-white h-[400px]"
      onMouseEnter={() => setIsLinksModal(true)}
      onMouseLeave={() => setIsLinksModal(false)}
    >
      <div className="max-w-max mx-auto">
        {categoryLinks.map((item) => {
          return <HeadCategoriesModalTable data={""} />;
        })}
      </div>
    </div>
  );
};
export default CategoryModal;
