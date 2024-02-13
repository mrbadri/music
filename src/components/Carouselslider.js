// Import Swiper React components
import { Swiper} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  FreeMode,
} from "swiper/modules";



export default function Carouselslider({children }) {
  return (
    <>
      <div className="">
        <Swiper
          breakpoints={
            {
              375 :{
                slidesPerView :1 , 
              },
              360 : {
                slidesPerView: 1 ,
              },
              412 : {
                slidesPerView: 1 , 
              },
              540:{
                slidesPerView :1, 
              },
              600 : {
                slidesPerView :1 ,
              },
              728:{
                slidesPerView :2 ,
              },
              984:{
                slidesPerView : 3 , 
              }, 
              1240 : {
                slidesPerView: 4 ,
              }, 
              1496 : {
                slidesPerView : 5 ,
              }
            }
          }
       

          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper">
         {children}
        </Swiper>
      </div>
    </>
  );
}
