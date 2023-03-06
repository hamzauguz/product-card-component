import React from "react";
import leftImg from "../src/images/image-product-desktop.jpg";
import "./App.css";
import ImageCard from "./cards/image-card";

function App() {
  return (
    <div className=" bg-[#feffff] flex flex-row justify-between w-[600px] h-[450px] rounded-2xl overflow-hidden">
      <ImageCard />
      <div className="flex-1">right</div>
    </div>
  );
}

export default App;
