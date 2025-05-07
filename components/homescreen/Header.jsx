import React from "react";
import { LinearGradient } from "expo-linear-gradient"; // Use expo's LinearGradient
import Navbar from "./Navbar";
import ImageComp from "./ImageComp";

const Header = () => {
  return (
    <LinearGradient colors={["#590D0F", "#C34644"]}>
      <Navbar />
      <ImageComp />
    </LinearGradient>
  );
};

export default Header;
