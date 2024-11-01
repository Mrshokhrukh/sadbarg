import React from "react";
import HomePageSwiper from "../components/ui/sections/HomePageSwiper";
import SlideProducts from "../components/ui/sections/SlideProducts";
import BlogHomeSection from "../components/ui/sections/BlogHomeSection";
import Advantages from "../components/ui/sections/Advantages";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <div className="">
        <HomePageSwiper />
        <SlideProducts />
        <BlogHomeSection />
        <Advantages />
      </div>
    </div>
  );
};
export default HomePage;
