import React from "react";

type TitleLikeTextProps = {
  text: string;
  subtitle?: string;
};
//

const TitleLikeText: React.FC<TitleLikeTextProps> = ({ text, subtitle }) => {
  return (
    <div className="flex flex-col items-center md:mt-4 md:mb-6">
      <h1 className="text-[20px] sm:text-[30px] md:text-[40px] font-playfair mb-4 text-center">
        {text}
      </h1>
      <p className="text-[12px] sm:text-sm md:text-lg text-cl2Orange  max-w-[480px] text-center">
        {subtitle ? subtitle : ""}
      </p>
    </div>
  );
};
export default TitleLikeText;
