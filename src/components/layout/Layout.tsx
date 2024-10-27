import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeaderTop from "../ui/HeaderTop";
import HeadBottomCategories from "../ui/HeadBottomCategories";
import CategoryModal from "../ui/CategoryModal";
import CategoryContextProvider from "../features/context/CategoryContext";

type Props = {};

const Layout = ({}: Props) => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth);

  // const handleSize = () => {
  //   setIsMobile(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleSize);
  //   return () => {
  //     window.removeEventListener("resize", handleSize);
  //   };
  // }, [window.innerWidth]);

  return (
    <div className="">
      <HeaderTop />
      <Header />
      <div>
        <CategoryContextProvider>
          <HeadBottomCategories />
        </CategoryContextProvider>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
