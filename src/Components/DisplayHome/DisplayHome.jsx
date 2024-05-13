import React from "react";
import Navbar from "../Navbar/Navbar";
import { albumData } from "../../assets/Icons/assets";
import { songData } from "../../assets/Icons/assets";
import AlbumItem from "../AlbumItem/AlbumItem";
import SongItems from "../SongItems/SongItems";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Feature Charts</h1>
        <div className="overflow-auto flex">
          {albumData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today Biggest Hit's</h1>
        <div className="overflow-auto flex ">
          {songData.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
