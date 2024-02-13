import { Play } from "iconsax-react";
import { Link } from "react-router-dom";

export default function Albums({ title, src, artist }) {
  return (
    <>
    <Link to="/MusicAllbums">
      <div className="max-w-sm rounded bg-white overflow-hidden p-4 shadow-lg">
        <div className="relative">
        <img
          className="w-4/5 rounded z-10 relative"
          src={src}
          alt="Sunset in the mountains"
        />
        <img className=" w-3/4 absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 -z-0" src="/image/Album.svg" />
        </div>

        <div className="flex flex-row justify-between pt-4">
          <div>
            <h5 className="text-left capitalize">{title}</h5>
            <p className="text-left capitalize text-xs text-pale-sky-400">
              {artist}
            </p>
          </div>
          <div className="rounded-full border p-2 border-pale-sky-500">
            <Play className="text-pale-sky-500" />
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
