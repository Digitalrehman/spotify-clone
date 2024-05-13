import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { albumData, assetIcon, songData } from "../../assets/Icons/assets";
import Navbar from "../Navbar/Navbar";
import { PlayerContext } from "../../Context/PlayerContext";

const DisplayAlbum = () => {
  let {playWithId} = useContext(PlayerContext)
  let { id } = useParams();
  let DisplayAlbum = albumData[id];
  return (
    <div>
      <Navbar />
      <div className="flex mt-10 gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={DisplayAlbum.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <p className="text-5xl font-bold mb-4 md:text-7xl">
            {DisplayAlbum.name}
          </p>
          <h4>{DisplayAlbum.description}</h4>
          <p className="mt-5 flex gap-3">
            <img className="inline-block w-6" src={assetIcon.spotify} alt="" />
            <b>Spotify</b>
            <span>1,123,346 likes</span>
            <b>50 songs</b>
            <span>about 2hr 30 min</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-40 mb-4 pl-2">
        <p>
          <b className="mr-4">#</b>title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4 invert" src={assetIcon.clock} alt="" />
      </div>
      <hr />
      {songData.map((item, index) => (
        <div
        onClick={()=>playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 rounded p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5 rounded" src={item.image} alt="" />
            {item.name.slice(0,15)+"..."}
          </p>
          <p className="text-[15px]">{DisplayAlbum.name}</p>
          <p className="text-[15px] hidden sm:block">5 day ago</p>
          <p className="text-[15px] text-center ">{item.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
