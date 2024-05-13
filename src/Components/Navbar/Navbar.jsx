import React, { useEffect, useRef } from "react";
import { assetIcon } from "../../assets/Icons/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let Navigate = useNavigate();

  return (
    <>
      <div
        className="w-full flex items-center justify-between bg-[rgba(0,0,0,0.3)]  h-20  rounded px-3 font-semibold"
      >
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 cursor-pointer rounded-2xl"
            src={assetIcon.left}
            onClick={() => Navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 cursor-pointer rounded-2xl "
            src={assetIcon.right}
            onClick={() => Navigate(1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="px-4 py-1 bg-white text-black rounded-2xl md:block hidden cursor-pointer text-[15px]">
            Explore premium
          </p>
          <div className="px-4 py-1 bg-black text-white rounded-2xl md:block hidden cursor-pointer text-[15px] lg:flex gap-2  ">
            <img
              className="w-4 h-4 invert "
              src={assetIcon.downloadarrow}
              alt="bell"
            />
            <p className="">Install App</p>
          </div>
          <img className="w-5 invert " src={assetIcon.bell} alt="bell" />
          <img className="w-7 " src={assetIcon.user} alt="bell" />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="px-4 py-1 bg-white text-black cursor-pointer text-[15px] rounded-2xl">
          All
        </p>
        <p className="px-4 py-1 bg-black text-white cursor-pointer text-[15px] rounded-2xl">
          Music
        </p>
      </div>
    </>
  );
};

export default Navbar;
