import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Tabbar from "./Tabbar";
import AudioWaveform from "../components/AudioWaveform";
import Footer from "./Footer";
import useMusicStore from "../store/useMusicStore";

const audioUrl = "/music/Robert Miles Children.mp3";

export default function Mainlayout() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };


  const { music, removeMusic } = useMusicStore();

  return (
    <>
      <div className="">
        <div className="">
          <Tabbar />
        </div>
        <div className="">
          <Outlet />
        </div>
        <div className=" fixed bottom-0 z-40 w-full bg-pale-sky-950 bg-opacity- ">
          {/* Pass audioUrl and playback state to AudioWaveform */}
          {music && <AudioWaveform audioUrl={audioUrl} isPlaying={isPlaying} removeMusic={removeMusic} music={music} />}
        </div>
      </div>
    </>
  );
}
