import { IoCallOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { PiBagLight } from "react-icons/pi";
type Props = {};

const HeaderMain = ({}: Props) => {
  return (
    <div className="flex justify-between p-3 md:py-6 md:pb-7">
      <div className="flex items-center gap-5 text-2xl text-gray-600">
        <span className="cursor-pointer">
          <IoCallOutline />
        </span>
        <span className="cursor-pointer">
          <IoSearchOutline />
        </span>
      </div>
      <img
        src="https://funburg.ru/local/templates/public/img/logo.png"
        alt=""
        className="cursor-pointer w-[120px] md:w-[180px]"
      />

      <div className="flex items-center gap-5 text-2xl text-gray-600">
        <span className="cursor-pointer">
          <HiOutlineUser />
        </span>
        <span className="cursor-pointer">
          <PiBagLight />
        </span>
      </div>
    </div>
  );
};

export default HeaderMain;
