import { Play } from "iconsax-react";
import ArtistCard from "../components/ArtistCard";
import Albums from "../components/Albums";
import Slider from "../components/Slider";
import { ALL_MUSIC } from "../store/Allsrc";


export default function Allbums({ title, src, artist }) {
  return (
    <>
      <Slider />

      <div className="container bg-pale-sky-50 -mt-12 rounded mb-24 p-6">
        <div
          className="h-24 rounded border-solid bg-cover bg-center flex flex-wrap justify-evenly	"
          style={{ backgroundImage: 'url("/image/breadcrumb.jpg")' }}>
          <p className="flex text-white font-bold text-3xl items-center	">
            Allbums
          </p>
        </div>
        <div>
          <div className="flex gap-4 flex-wrap justify-evenly">
            {ALL_MUSIC.ALBUMS.map(
              ({ title, src, artist, audioUrl }, index) => (
                <Albums
                  title={title}
                  src={src}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
