import React from "react";
import TitleLikeText from "../TitleLikeText";
import Product from "../Product";

type BlogHomeSectionProps = {};

const BlogHomeSection: React.FC<BlogHomeSectionProps> = () => {
  return (
    <div className="max-w-max mx-auto mt-[50px]">
      <TitleLikeText
        text="Сезонные букеты"
        subtitle="Лучшие букеты и композиции из самых свежих сезонных цветов"
      />
      <div className="mt-10 flex gap-3">
        <div className="w-[350px] mt-3">
          <img
            src="https://funburg.ru/upload/iblock/727/7ii302nd3333p4014z54cqsg0hd3kym3/bokovye-osennie-bukety.png"
            alt=""
            className="w-full "
          />
        </div>
        <div className="grid grid-cols-3">
          {Array(6)
            .fill("")
            .map((_, index) => index + 1)
            .map((item, i) => {
              return <Product data={item} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default BlogHomeSection;
