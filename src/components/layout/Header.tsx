import HeadBottomCategories from "../ui/HeadBottomCategories";
import HeaderMain from "../ui/HeaderMain";

type Props = {};

const Header = ({}: Props) => {
  return (
    <div className="max-w-max mx-auto">
      <HeaderMain />
      <HeadBottomCategories />
    </div>
  );
};

export default Header;
