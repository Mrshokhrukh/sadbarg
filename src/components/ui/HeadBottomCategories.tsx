import { useContext, useState } from "react";
import { categoryLinks } from "../../db/data";
import { CategoryContext } from "../features/context/CategoryContext";
import { Link } from "react-router-dom";
import CategoryModal from "./CategoryModal";

type Props = {};

const HeadBottomCategories = (props: Props) => {
  const { setIsLinksModal, setCategoryName, categoryName } = useContext(CategoryContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = (e: any) => {
    setCategoryName(e.target.innerText);
  };
  const removeHover = () => {
    setCategoryName("");
    // setCategoryName("");
  };
  return (
    <div>
      <div className="hidden md:block border-b border-gray-600 border-opacity-[0.3] pb-2">
        <div className="max-w-max mx-auto grid grid-cols-4 text-center gap-2">
          {categoryLinks.map((item, i) => {
            return (
              <div className="relative" key={i}>
                <Link
                  to={`/${item.link}`}
                  className="cursor-pointer p-2 pb-3 hover:text-cl2Orange transition-all duration-200"
                  onMouseEnter={handleHover}
                  onMouseLeave={removeHover}
                >
                  {item.text}
                </Link>
                <CategoryModal currentCategory={item.text} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeadBottomCategories;
