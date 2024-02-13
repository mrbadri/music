import { SwiperSlide } from "swiper/react";
import Slider from "../components/Slider";
import TrendingSongs from "../components/TrendingSongs";
import { ALL_MUSIC } from "../store/Allsrc";




export default function MusicAllbums() {
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
        
          <div className="flex basis-1/2">
            <div className="flex ">
              <div className="max-w-sm rounded bg-white overflow-hidden p-4 shadow-lg">
                <div className="relative">
                  <img
                    className="w-4/5 rounded z-10 relative"
                    src="/image/bozorg.jpg"
                    alt="Sunset in the mountains"
                  />
                  <img
                    className="  w-3/4 absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 -z-0"
                    src="/image/Album.svg"
                  />
                </div>

              </div>
            </div>
          </div>
         
        
        <div className="">
          <h1 className="text-center font-bold text-4xl font-mono bg-pale-sky-600 rounded mt-4 p-3">music</h1>
          <div className=" flex justify-between flex-wrap gap-5 mt-5">
            {ALL_MUSIC.MusicAllbums.map(({ title, src, artist, audioUrl }, index) => (

              <TrendingSongs
                title={title}
                src={src}
                audioUrl={audioUrl}
                artist={artist}
              />
            )
            )},

          </div>
        </div>
      </div>
    </>
  );
}
