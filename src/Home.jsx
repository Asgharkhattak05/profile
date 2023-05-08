import React from "react";
import Common from "./Common";
import homeR from "../src/images/homeR.jpg"


const Home = () => {
  return (
    <>
      <Common name="Grow your business with" imgsrc={homeR} visit="/services" btname="Get Started" />
    </>
  );
};
export default Home;
