import { useWavesurfer } from '@wavesurfer/react';
import { ArrowDown, Pause, Play } from "iconsax-react";
import React, { useCallback, useEffect, useRef } from "react";

const formatTime = (seconds) => [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':');

const AudioWaveform = ({ music, removeMusic }) => {
  const wavesurferRef = useRef(null);
  const { title, artist, audioUrl } = music || {};
  const { wavesurfer, isPlaying, isReady, currentTime } = useWavesurfer({
    container: wavesurferRef,
    height: 55,
    waveColor: '#fff',
    progressColor: '#c65a5a',
    cursorWidth: 0,
    barWidth: 3,
    barGap: 2,
    normalize: false,
    barRadius: 30,
    url: audioUrl,
  });

  const pause = () => {
    wavesurfer.playPause();
  };

  useEffect(() => {
    const playAfterDelay = setTimeout(() => {
      if (!isPlaying) {
        wavesurfer.play();
      }
    }, 1500);

    return () => clearTimeout(playAfterDelay);
  }, [isReady, isPlaying, wavesurfer]);

  if (music)
    return (
      <>
        <div className="flex p-4 ">
          {/* <div
            className="text-white bg-red-500 p-5"
            onClick={() => {
              removeMusic();
            }}
          >
            X
          </div> */}


          <div className="w-auto flex ">
            <ArrowDown size="32" color="#fff" onClick={() => {
              removeMusic();
            }}  className='mt-3'/>

            {isPlaying ? (
              <button className="text-white" onClick={() => pause()}>
                <Pause size="32" />
              </button>
            ) : (
              <button className="text-white" onClick={() => wavesurfer.play()}>
                <Play size="32" />
              </button>
            )}

            <div className="self-center pl-3  content-center">
              <p className="text-white">{title}</p>
              <p className="text-pale-sky-500 text-sm ">{artist}</p>
            </div>
          </div>
          <div className="w-4/5 px-3" ref={wavesurferRef} />
          <div className="self-center ">
            <p className="text-pale-sky-500 text-sm content-center ">
              {formatTime(currentTime)}
            </p>
          </div>
        </div>
      </>
    );

  return <></>;
};

export default AudioWaveform;
