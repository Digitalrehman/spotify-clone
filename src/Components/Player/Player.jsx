import React, { useContext } from "react";
import { assetIcon, songData } from "../../assets/Icons/assets";
import { PlayerContext } from "../../Context/PlayerContext";
const Player = () => {
  let { seekBar, seekBg, playStatus, track, play, pause, time,previous,next,songSeek } =
    useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex items-center justify-between px-4 text-white">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 h-12" src={track.image} alt="" />
        <div>
          <p className="text-white">{track.name}</p>
          <p>{track.description.slice(0, 35)+"..."}</p>
        </div>
      </div>
      <div className="flex items-center flex-col gap-1 m-auto">
        <div className="flex gap-4 ">
          <img
            className="w-4  invert cursor-pointer"
            src={assetIcon.suffle}
            alt=""
          />
          <img onClick={previous}
            className="w-4 invert cursor-pointer"
            src={assetIcon.previous}
            alt=""
          />

          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 invert cursor-pointer"
              src={assetIcon.pause}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 invert cursor-pointer"
              src={assetIcon.play}
              alt=""
            />
          )}

          <img
          onClick={next}
            className="w-4 invert cursor-pointer"
            src={assetIcon.next}
            alt=""
          />
          <img
            className="w-4 invert cursor-pointer"
            src={assetIcon.loop}
            alt=""
          />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg}
            onClick={songSeek}
            className="w-[60vw] max-w-[500px] rounded-full bg-gray-300"
          >
            <hr
              ref={seekBar}
              className="h-1 w-0 bg-green-800 border-none cursor-pointer"
            />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 opacity-75">
        <img className="w-4 invert" src={assetIcon.mic} alt="" />
        <img className="w-4 invert" src={assetIcon.queue} alt="" />
        <img className="w-4 invert" src={assetIcon.volume} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded-full"></div>
        <img className="w-4 invert" src={assetIcon.resize} alt="" />
      </div>
    </div>
  );
};

export default Player;
