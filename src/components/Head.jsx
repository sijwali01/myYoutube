import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import axios from "axios";
import { SUJJESTION_API } from "../utils/Constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesstions, setSuggesstions] = useState([]);
  const [showsuggesstions, setShowsuggesstion] = useState();
  // console.log(searchQuery);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSugsestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSugsestions = async () => {
    const data = await axios.get(SUJJESTION_API + searchQuery);
    // console.log(data.data);
    setSuggesstions(data.data[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex shadow-lg ">
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
      <div className="w-[50%] flex ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowsuggesstion(true)}
          onBlur={() => setShowsuggesstion(false)}
          className="  border-2 border-black  mt-4 mb-4 pl-3 w-96 rounded-l-full relative"
        />
        <button className=" border-2 border-black w-20 p-1 mt-4 mb-4 rounded-r-full bg-gray-400">
          Search
        </button>
        {showsuggesstions && (
          <ul className="absolute top-14 bg-white w-96 p-5 rounded-lg">
            {suggesstions.map((s) => (
              <li key={s} className="p-1 m-1 cursor-pointer ">
                🔍 {s}
              </li>
            ))}
          </ul>
        )}
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
