import React from "react";

type TitleLikeTextProps = {
  text: string;
  subtitle: string;
};
//

const TitleLikeText: React.FC<TitleLikeTextProps> = ({ text, subtitle }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-[55px] font-playfair">{text}</h1>
      <p className="text-cl2Orange text-xl max-w-[480px] text-center">{subtitle}</p>
    </div>
  );
};
export default TitleLikeText;
