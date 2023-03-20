import React from "react";
import HomeProducts from "./HomeProducts";
import HomeSection from "./HomeSection";
import HomeAbout from "./HomeAbout";
import "./home.css";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <HomeProducts />
      <HomeSection />
      <HomeAbout />
    </>
  );
}
