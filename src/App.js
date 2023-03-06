import React, { useEffect, useState } from "react";
import leftImg from "../src/images/image-product-desktop.jpg";
import "./App.css";
import ImageCard from "./cards/image-card";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobileFloor = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <div className="bg-[#feffff] flex flex-row justify-between w-[600px] h-[450px] rounded-2xl overflow-hidden max-[700px]:rounded-[10px] max-[700px]:h-[615px] max-[700px]:w-[340px] max-[700px]:flex-col ">
      <ImageCard />
      <div className="flex-1 ">right</div>
    </div>
  );
}

export default App;
