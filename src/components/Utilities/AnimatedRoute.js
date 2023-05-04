import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/main.home";
import Aboutpage from "../About/main.about";

const AnimatedRoute = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tentang" element={<Aboutpage />}></Route>
    </Routes>
  );
};

export default AnimatedRoute;
