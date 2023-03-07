import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddToCard = () => {
  return (
    //     display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   height: 100vh;
    //   overflow-x: hidden;
    //   max-width: center;
    <div className="flex-1 flex">
      <div className="  w-full h-full p-8 flex flex-col justify-between max-[700px]:p-6 ">
        <span className="font-title_card tracking-[0.2em]  text-sm opacity-50">
          PERFUME
        </span>
        <span className=" font-title_bold text-4xl leading-9 max-[700px]:leading-8 opacity-80 max-[700px]:text-[32px]">
          Gabrielle Essence Eau De Parfum
        </span>
        <span className=" font-title_card text-sm font-semibold opacity-30 leading-6 max-[700px]:text-[14px] max-[700px]:font-medium max-[700px]:opacity-50">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </span>
        <div className=" flex flex-row items-center justify-between  w-5/6 mb-3 max-[700px]:mb-2 max-[700px]:w-2/3 ">
          <span className=" font-title_bold text-[#2b755b] text-3xl opacity-90 max-[700px]:text-[32px]">
            $149.99
          </span>
          <del className=" font-title_card text-[13px] opacity-40 font-semibold ">
            $169.99
          </del>
        </div>
        <span className=" bg-[#3d8268] text-white h-12 rounded-[8px] items-center flex justify-evenly px-10 max-[700px]:px-20 max-[700px]:text-base text-opacity-90 text-lg font-medium cursor-pointer hover:bg-[#1a4031]">
          <AiOutlineShoppingCart size={17} />
          <span>Add to Cart</span>
        </span>
      </div>
    </div>
  );
};

export default AddToCard;
