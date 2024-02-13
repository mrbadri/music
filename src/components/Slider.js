import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


import {
    Autoplay,
    FreeMode,
    Pagination,
    Navigation,
    Mousewheel,
    Keyboard,
  } from "swiper/modules";

export default function Slider (){

    const imgslider  = [
        {id : 1 , src:'/image/danny-howe-bn-D2bCvpik-unsplash.jpg' },
        {id : 2 , src:'/image/caught-in-joy-ptVBlniJi50-unsplash.jpg' },
        {id : 3 , src:'/image/danny-howe-bn-D2bCvpik-unsplash.jpg' },
    ]
        

    return(
        <>
        <div className=" -z-10 relative">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            cssMode={true}
            navigation={false}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            modules={[
              Navigation,
              Pagination,
              Mousewheel,
              Keyboard,
              FreeMode,
              Autoplay,
            ]}
            className="mySwiper">
                {imgslider.map(image => (
            <SwiperSlide key={image.id}>
              <img className="h-[300px] object-cover w-full" src={image.src} /> 
            </SwiperSlide>
                ))}
          </Swiper>
        </div>
        
        
        </>
    )
}