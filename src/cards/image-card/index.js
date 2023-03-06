import React from "react";
import leftImg from "../../images/image-product-desktop.jpg";
import leftMobileImg from "../../images/image-product-mobile.jpg";
import { useMediaQuery } from "react-responsive";

const ImageCard = () => {
  const isMobileFloor = useMediaQuery({ query: "(max-width: 425px)" });

  return (
    <div className=" flex-1 max-[700px]:flex-[0.65] bg-red-200 max-w-full relative">
      <img
        className="w-full absolute h-full object-cover "
        src={isMobileFloor ? leftMobileImg : leftImg}
      />
    </div>
  );
};

export default ImageCard;
