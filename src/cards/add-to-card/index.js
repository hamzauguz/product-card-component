import React from "react";

const AddToCard = () => {
  return (
    //     display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   height: 100vh;
    //   overflow-x: hidden;
    //   max-width: center;
    <div className="flex-1 flex">
      <div className="  w-full h-full p-8 flex flex-col justify-between">
        <span className=" font-title_card tracking-[0.2em] text-sm opacity-50">
          PERFUME
        </span>
        <span>Gabrielle Essence Eau De Parfum</span>
        <div>
          <span>$149.99</span>
          <span>$169.99</span>
        </div>
        <span>Add to Cart</span>
      </div>
    </div>
  );
};

export default AddToCard;
