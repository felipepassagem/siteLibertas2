import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/imgs/odonto.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../src/styles.css"

//import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        id="swiper"
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1}></img></SwiperSlide>
        
      </Swiper>
    </>
  );
}
