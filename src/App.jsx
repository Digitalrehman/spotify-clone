import React, { useContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Player from "./Components/Player/Player";
import Display from "./Components/Display/Display";
import PlayerContextProvider, { PlayerContext } from "./Context/PlayerContext";

const App = () => {
  let { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="bg-black w-full h-screen">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
