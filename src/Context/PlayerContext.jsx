import React, { createContext, useEffect, useRef, useState } from "react";
import { songData } from "../assets/Icons/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  let [track, setTrack] = useState(songData[1]);
  let [playStatus, setPlayStatus] = useState(false);
  let [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  let audioRef = useRef();
  let seekBar = useRef();
  let seekBg = useRef();

  let playWithId = async (id) => {
    await setTrack(songData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };
  let previous = async () => {
    if (track.id > 0) {
      await setTrack(songData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  let next = async () => {
    if (track.id < songData.length - 1) {
      await setTrack(songData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);
  let play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  let pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  let songSeek =(e) => {
     audioRef.current.currentTime =
      ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration);
  };
  let contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    songSeek,
    next,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider; // Change component name to PlayerContextProvider
