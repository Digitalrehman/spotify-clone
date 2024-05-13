import React from "react";
import { assetIcon } from "../../assets/Icons/assets";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  let Navigate = useNavigate()
  return (
    <div className="w-[25%] text-white p-2 hidden lg:flex flex-col gap-2">
      <div className="h-[25%] bg-[#121212] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assetIcon.spotify} alt="Home" />
          <p className="font-bold text-[#1db954] text-base">Spotify</p>
        </div>
        <div onClick={()=>Navigate("/")} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6 invert" src={assetIcon.home} alt="Home" />
          <p className="font-bold text-base">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6 invert" src={assetIcon.magnifying} alt="Home" />
          <p className="font-bold text-base">Search</p>
        </div>
      </div>

      <div className="h-[75%] bg-[#121212] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="invert w-8 rotate-90" src={assetIcon.layer} alt="Layer" />
            <p className="font-bold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4 invert" src={assetIcon.rightarrow} alt="" />
            <img className="w-4 invert" src={assetIcon.plus} alt="" />
          </div>
        </div>
        <div className="flex bg-[#242424] font-semibold m-2 pl-4 rounded flex-col items-start justify-start p-4">
          <h1>Create your first library</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className=" px-4 mt-3 py-1.5 rounded-full text-black text-[15px] bg-white">
            Create playlist
          </button>
        </div>

        <div className="flex bg-[#242424] font-semibold m-2 pl-4 rounded flex-col items-start justify-start p-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className=" px-4 mt-3 py-1.5 rounded-full text-black text-[15px] bg-white">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
