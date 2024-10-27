import { createContext, useState } from "react";

export const CategoryContext = createContext<any>(false);

import React from "react";

type CategoryContextProps = {
  children: React.ReactNode;
};

const CategoryContextProvider: React.FC<CategoryContextProps> = ({ children }) => {
  const [isLinksModal, setIsLinksModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  return (
    <CategoryContext.Provider
      value={{ isLinksModal, setIsLinksModal, categoryName, setCategoryName }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryContextProvider;
