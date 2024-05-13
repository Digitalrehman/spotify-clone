import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "../DisplayHome/DisplayHome";
import DisplayAlbum from "../Display Album/DisplayAlbum";
import { albumData } from "../../assets/Icons/assets";

const Display = () => {
  let displayref = useRef();
  let location = useLocation();
  let isAlbum = location.pathname.includes("album");
  let albumId = isAlbum ? location.pathname.slice(-1) : "";
  let bgColor = albumData[Number(albumId)].bgColor;
  useEffect(() => {
    if (isAlbum) {
      displayref.current.style.background = `linear-gradient(${bgColor}, #121212`;
    } else {
      displayref.current.style.background = "#121212";
    }
  });
  return (
    <div
      ref={displayref}
      className=" text-white my-2 mx-1 px-6 py-4 rounded bg-[#121212] overflow-auto lg:w-[75%] lg-ml-0 w-[100%] "
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
