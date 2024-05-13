import React, { useContext } from "react";
import { PlayerContext } from "../../Context/PlayerContext";

const SongItems = ({ image, name, description, id }) => {
  let { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[200px] p-2 px-4 rounded hover:bg-[#ffffff26] cursor-pointer"
    >
      <img className="rounded w-[640px] h-[180px]" src={image} alt="" />
      <p className="font-bold mt-1">{name}</p>
      <p className="text-sm text-slate-200">{description}</p>
    </div>
  );
};

export default SongItems;
