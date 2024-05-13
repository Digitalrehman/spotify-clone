import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, id, description, name }) => {
    let Navigate = useNavigate()
  return (
    <div onClick={()=>Navigate(`/album/${id}`)} className="min-w-[180px] p-2 px-4 rounded hover:bg-[#ffffff26] cursor-pointer">
      <img className="rounded w-[640px] h-[180px]" src={image} alt="" />
      <p className="font-bold mt-1">{name}</p>
      <p className="text-sm text-slate-200">{description}</p>
    </div>
  );
};

export default AlbumItem;
