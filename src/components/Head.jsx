import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex shadow-lg">
      <div className="flex mt-2 h-12 w-[30%] gap-32 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajnVWftKrr_v93gbWRSQ0-pl5o_3b2CRq9g&s"
          alt="sidebar"
        />
        <img
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube"
        />
      </div>
      <div className="w-[50%] flex justify-center">
        <input
          type="text"
          className="  border-2 border-black  mt-4 mb-4 pl-3 w-96 rounded-l-full"
        />
        <button className=" border-2 border-black w-20 p-1 mt-4 mb-4 rounded-r-full bg-gray-400">
          Search
        </button>
      </div>
      <div className="w-[20%] flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s"
          className="h-6"
        />
      </div>
    </div>
  );
};

export default Head;
