
import { IoCallOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { PiBagLight } from "react-icons/pi";
type Props = {};

const HeaderMain = ({}: Props) => {
  return (
    <div className="flex justify-between py-6 pb-7">
      <div className="flex gap-5 text-2xl text-gray-600">
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
        className="w-[180px]"
      />

      <div className="flex gap-5 text-2xl text-gray-600">
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
