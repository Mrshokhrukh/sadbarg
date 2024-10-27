import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
type Props = {};

const HeaderTop = ({}: Props) => {
  return (
    <div className=" bg-cl1 w-full p-2">
      <div className="max-w-max mx-auto flex justify-between text-sm">
        <div className="flex gap-4">
          <a href="" className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl">
              <CiLocationOn />
            </span>
            <p className="">Екатеринбург</p>
            <span className="text-lg">
              <MdKeyboardArrowDown />
            </span>
          </a>
          <a href="" className="text-gray-700  hover:text-cl2Orange duration-200 transition">
            Доставка и оплата
          </a>
        </div>

        <div className="flex gap-6 text-gray-700">
          <a href="" className=" hover:text-cl2Orange duration-200 transition">
            О нас
          </a>
          <a href="" className=" hover:text-cl2Orange duration-200 transition">
            Отзывы
          </a>
          <a href="" className=" hover:text-cl2Orange duration-200 transition">
            FAQ
          </a>
          <a href="" className=" hover:text-cl2Orange duration-200 transition">
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
