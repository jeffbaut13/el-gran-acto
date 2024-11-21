import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./slideshow.css";

export const SlideClasicos = ({
  HandleActiveNext,
  HandleActivePrev,
  abuelitos,
  sliderRef,
}) => {
 

  

  return (
    <>
      <Swiper
        speed={500}
        slidesPerView={5}
        spaceBetween={60}
        grabCursor={true}
         
        modules={[Navigation]}
        loop={true}
        className="mySwiper ease-in-transition pointer-events-none select-none"
         
        onSwiper={(swiper) => (sliderRef.current = swiper)} // Asigna la referencia aquí
      >
        {abuelitos.map((abuelo, i) => (
          <SwiperSlide key={i} className="w-full h-full z-20 font-Wayland  ">
            <div className="w-full h-full flex flex-col items-start ">
              <figure className="w-full h-full rounded-lg overflow-hidden absolute left-0 top-0 z-0">
                <img src={abuelo.imagen} alt="" />
              </figure>
              <div className="absolute z-[5] w-full h-[105%] bg-black bg-opacity-50 to-40% pointer-events-none" />
              <div className="w-full h-full z-10 relative flex flex-col justify-end items-start p-4">
              <p className="font-Wayland text-[1.56rem] leading-3 uppercase">
                Conoce a
              </p>
                <h2 className="font-Wayland text-[2.4rem] leading-10">{abuelo.nombre}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div onClick={HandleActiveNext} className="swiper-button-next" />
      <div onClick={HandleActivePrev} className="swiper-button-prev" />
    </>
  );
};
