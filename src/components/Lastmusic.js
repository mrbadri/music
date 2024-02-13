import React from "react";
import { Play, Pause } from "iconsax-react";
import useMusicStore from "../store/useMusicStore";

export default function Lastmusic({ title, src, artist, audioUrl }) {
  const { setMusic } = useMusicStore()

  return (
    <>
      <div className="max-w-sm bg-white rounded overflow-hidden p-4 shadow-lg">
        <img
          className="w-full rounded"
          src={src}
          alt="Sunset in the mountains"
        />

        <div className="flex flex-row justify-between pt-4">
          <div>
            <h5 className="text-left capitalize">{title}</h5>
            <p className="text-left capitalize text-xs text-pale-sky-400">
              {artist}
            </p>
          </div>
          <div className="rounded-full border p-2 border-pale-sky-500">
            {/* Use the Pause icon when playing, Play icon when not playing */}
            <Play  className="text-pale-sky-500" onClick={() => {
              setMusic({
                title,
                audioUrl,
                artist
              })
            }} />
          </div>
        </div>
      </div>
    </>
  );
}
