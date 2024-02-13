import { Link } from "react-router-dom";
import ArtistCard from "../components/ArtistCard";
import Slider from "../components/Slider";
import { ALL_MUSIC } from "../store/Allsrc";

export default function Artist({ title, src, artist }) {
  return (
    <>
      <Slider />
      <div className=" container bg-pale-sky-50 -mt-12 rounded mb-24 p-6">
        <div
          className="h-24 rounded border-solid bg-cover bg-center flex flex-wrap justify-evenly"
          style={{ backgroundImage: 'url("/image/breadcrumb.jpg")' }}>
          <p className="flex text-white font-bold text-3xl items-center	">
            Artist
          </p>
        </div>
        <div className="flex flex-wrap justify-around ">
          {ALL_MUSIC.artistlogo.map(({ src, artist, }, index) => (
            <Link to={"/Artist-account"}>
            <ArtistCard  src={src}  artist={artist}/>
            </Link>
          )
          )}

        </div>
      </div>
    </>
  );
}
