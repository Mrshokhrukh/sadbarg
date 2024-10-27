import React from "react";
import HomePageSwiper from "../components/ui/HomePageSwiper";
import SlideProducts from "../components/ui/SlideProducts";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <div className="">
        <HomePageSwiper />
        <SlideProducts />
      </div>
    </div>
  );
};
export default HomePage;
