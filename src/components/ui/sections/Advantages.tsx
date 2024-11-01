import React from "react";
import TitleLikeText from "../TitleLikeText";

type AdvantagesProps = {};

const Advantages: React.FC<AdvantagesProps> = () => {
  return (
    <div className="bg-[#FCF6F5] mt-[120px] py-16">
      <TitleLikeText text="Наши преимущества" />
      <div className="mt-16 mx-auto max-w-max grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {Array(4)
          .fill("")
          .map((_) => {
            return (
              <div
                className="flex hover:transition-transform hover:translate-y-[-5%] 
              duration-200 flex-col p-5 sm:p-7 md:p-10 xl:p-0 items-center"
              >
                <div className="md:p-5 p-1">
                  <img
                    src="https://funburg.ru/upload/iblock/570/eun8rv8cxcwaojyh5ajwp25a34192qit/advantage_icon_1.svg"
                    alt=""
                    className="w-[50px]"
                  />
                </div>
                <p className="font-medium mb-3 text-center">Доставляем радость с 2007 года</p>
                <span className="text-sm text-center text-gray-600">
                  За это время выполнили более 421 000 заказа, получили около 3360 отзывов в
                  открытых источниках
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Advantages;
