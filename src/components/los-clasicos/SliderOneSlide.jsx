import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./SliderOneSlide.css";
import { EffectCreative } from "swiper/modules";

export const SliderOneSlide = ({ abuelitos, sliderRef, setName, setOpen }) => {
  const handleClick = (name) => {
    setName(name);
    setOpen(true);
  };
  return (
    <>
      <Swiper
        effect={"creative"}
        speed={500}
        allowTouchMove={false} // Desactiva el arrastre
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3 h-full rounded-lg z-20"
        initialSlide={1}
        loop={true}
        onSwiper={(swiper) => (sliderRef.current = swiper)} // Asigna la referencia aquí
      >
        {abuelitos.map((viejito, i) => (
          <SwiperSlide key={i} className="group">
            <figure className="w-full h-full overflow-hidden absolute left-0 top-0 z-0">
              <img
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition ease-in duration-300"
                src={viejito.imagen}
                alt=""
              />
            </figure>
            <div className="absolute z-[5] w-full h-[105%] bg-gradient-to-t from-[#000000c3] to-40% pointer-events-none" />
            <div className="w-full h-full z-10 relative flex flex-col justify-end items-start p-4">
              <p className="font-Wayland text-[1.7rem] leading-3 uppercase">
                Conoce a
              </p>
              <h2 className="font-Wayland text-[2.82rem] leading-10 my-2">
                {viejito.nombre}
              </h2>
              {/* <h2 className="font-Wayland text-2xl">{viejito.role}</h2> */}
              <span
                onClick={() => handleClick(i)}
                className="cursor-pointer font-StageGroteskBold border border-primary rounded-sm px-4 text-xs"
              >
                VER MÁS
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
