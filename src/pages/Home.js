import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import ArtistCard from "../components/ArtistCard";
import TrendingSongs from "../components/TrendingSongs";
import Lastmusic from "../components/Lastmusic";
import Albums from "../components/Albums";
import AudioWaveform from "../components/AudioWaveform";
import Slider from "../components/Slider";
import Carouselslider from "../components/Carouselslider";
import { Link } from "iconsax-react";
import { ALL_MUSIC } from "../store/Allsrc";
import Mainservice from "../service/service";
import { useQuery } from "react-query";
import { Spinner } from "flowbite-react";



export default function Home() {

  const musicQuery = useQuery('musics', async () => await Mainservice.get('/musics?populate=*'))
  const musicTrendQuery = useQuery('musicsTrend', async () => await Mainservice.get('/musics?populate=*&filters[trend][$eq]=true'))
  const albumQuery = useQuery('albums', async () => await Mainservice.get('/albums?populate=*'))
  const artistQuery = useQuery('artist', async () => await Mainservice.get('/artists?populate=*'))

  console.log("artistQuery:" , artistQuery?.data);




  return (
    <>
      <Slider />
      <div className=" container bg-pale-sky-50 py-4 rounded -mt-10  z-30 relative">
        <section id="Lastmusic">
          <div className="mb-6 ">
            <div className="py-4 ">
              <p className="pl-2 text-xl uppercase font-bold">Last music</p>
            </div>
            <div className="">
              <Carouselslider>
                {musicQuery.isLoading ? <div className="spiner" /> :
                  <>                  {
                    musicQuery.data.data.data.map(({ attributes }, index) => (
                      <SwiperSlide className="rounded" key={index}>
                        <Lastmusic
                          title={attributes?.title}
                          src={"https://api.pixelgenius.ir" + attributes?.avatar?.data?.attributes?.url}
                          audioUrl={attributes?.audioLink}
                          artist={attributes?.artist?.data?.attributes?.name}
                        />
                      </SwiperSlide>
                    )
                    )
                  }
                  </>
                }
              </Carouselslider>
            </div>
          </div>
        </section>
        <section id="TrendingSongs">
          <div className="">
            <div className="py-4 ">
              <p className="pl-2 text-xl uppercase font-bold">Trending Songs</p>
            </div>
            <div className="">
              <Carouselslider>
                {musicTrendQuery.isLoading ? <div className="spiner" /> :
                  <>                  {
                    musicTrendQuery.data.data.data.map(({ attributes }, index) => (
                      <SwiperSlide className="rounded" key={index}>
                        <Lastmusic
                          title={attributes?.title}
                          src={"https://api.pixelgenius.ir" + attributes?.avatar?.data?.attributes?.url}
                          audioUrl={attributes?.audioLink}
                          artist={attributes?.artist?.data?.attributes?.name}
                        />
                      </SwiperSlide>
                    )
                    )
                  }
                  </>
                }
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

                {albumQuery?.isLoading ? <div className="spiner" /> :
                  <>
                    {albumQuery?.data?.data?.data?.map((props, index) => (
                      <SwiperSlide className="rounded" key={index}>
                        <Albums
                          title={props?.attributes?.title}
                          src={"https://api.pixelgenius.ir" + props?.attributes?.poster?.data?.[0].attributes.url}
                          artist={props?.attributes?.artist?.data?.attributes?.name}
                        />
                      </SwiperSlide>
                    )
                    )}
                  </>
                }

              </Carouselslider>
            </div>
          </div>
        </section>
        <section id="Artist">
          <div className="mt-6 ">
            <div className="py-4 ">
              <p className="pl-2 text-xl uppercase font-bold">Artist</p>
            </div>
            <div className="pb-28">
              <Carouselslider>
                {artistQuery?.isLoading ? <div className="spiner" /> :
                  <>
                    {artistQuery?.data?.data?.data?.map((props, index) => (
                      <SwiperSlide key={index}>
                        <ArtistCard src={"https://api.pixelgenius.ir" +  props?.attributes?.avatar?.data?.attributes?.url} Artist={props?.attributes?.name} />
                      </SwiperSlide>
                    )
                    )}
                  </>
                }

              </Carouselslider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
