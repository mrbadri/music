import { Swiper, SwiperSlide } from "swiper/react";

import Carouselslider from "../components/Carouselslider";
import Slider from "../components/Slider";
import Lastmusic from "../components/Lastmusic";

import { ALL_MUSIC } from "../store/Allsrc";
import Albums from "../components/Albums";

export default function Artistaccount() {
  return (
    <>
      <Slider />
      <div className=" container  bg-pale-sky-50 -mt-12 rounded mb-24 p-6">
        <div
          className="h-24 rounded border-solid bg-cover bg-center flex flex-wrap justify-evenly"
          style={{ backgroundImage: 'url("/image/breadcrumb.jpg")' }}>
          <p className="flex text-white font-bold text-3xl items-center	">
            Artist Page
          </p>
        </div>
        <div className="flex mt-5 flex-col">
          <div className="">
            <div className="flex flex-col	items-center	">
              <img
                className="rounded-[300px] w-1/4 "
                src="/image/Mehrad hidden.jpg"
              />
              <p className="text-xl m-5 capitalize font-bold">Mehrad hidden </p>
            </div>
          </div>
          <div className="mt-5 text-xl bg-SteelBlue-900 rounded p-5 text-pale-sky-300 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
            </p>
          </div>
        </div>
        <section id="last-music">
          <div className="mb-6 ">
            <div className="py-4 ">
              <p className="pl-2 text-xl uppercase font-bold">Last music</p>
            </div>
            <div className="">
              <Carouselslider>
                {ALL_MUSIC.LAST.map(
                  ({ title, src, artist, audioUrl }, index) => (
                    <SwiperSlide className="rounded" key={index}>
                      <Lastmusic
                        title={title}
                        src={src}
                        audioUrl={audioUrl}
                        artist={artist}
                      />
                    </SwiperSlide>
                  )
                )}
              </Carouselslider>
            </div>
          </div>
        </section>
        <section id="albums">
          <div className="mt-6">
            <div className="py-4 ">
              <p className="pl-2 text-xl uppercase font-bold">Albums</p>
            </div>
            <div className="">
              <Carouselslider>
                {ALL_MUSIC.ALBUMS.map(
                  ({ title, src, artist, audioUrl }, index) => (
                    <SwiperSlide className="rounded" key={index}>
                      <Albums
                        title={title}
                        src={src}
                        audioUrl={audioUrl}
                        artist={artist}
                      />
                    </SwiperSlide>
                  )
                )}
              </Carouselslider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
