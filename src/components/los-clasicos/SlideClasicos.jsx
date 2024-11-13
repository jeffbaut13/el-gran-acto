import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Importar solo navegación

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./slideshow.css"; // Aquí puedes aplicar tus estilos personalizados

export const SlideClasicos = () => {
  const [progress, setProgress] = useState(0); // Estado para la barra de progreso
  const swiperRef = useRef(null); // Referencia de tipo Swiper para el swiper

  const abuelitos = [
    {
      nombre: "ROSALBA",
      imagen: "/imagenes/abuelo.jpg",
      descripcion: "",
    },
    {
      nombre: "FERNANDO",
      imagen: "/imagenes/abuelo2.jpg",
      descripcion: "",
    },
    {
      nombre: "JOAQUÍN",
      imagen: "/imagenes/abuelo3.jpg",
      descripcion: "",
    },
    {
      nombre: "ESPERANZA",
      imagen: "/imagenes/abuelo4.jpg",
      descripcion: "",
    },
    {
      nombre: "HENRY",
      imagen: "/imagenes/abuelo5.jpg",
      descripcion: "",
    },
  ];

  const updateProgress = (swiper) => {
    const totalSlides = swiper.slides.length; // Total de slides
    const progressPercent = ((swiper.activeIndex + 1) / totalSlides) * 100; // Cálculo del progreso en porcentaje
    setProgress(progressPercent); // Actualiza el estado con el porcentaje
  };

  return (
    <>
      <Swiper
        slidesPerView={2}
        //centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => updateProgress(swiper)} // Actualiza la barra de progreso
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Guarda la referencia de swiper
        initialSlide={0} // Empieza en la segunda tarjeta
      >
        {abuelitos.map((abuelo, i) => (
          <SwiperSlide className="w-full z-20 font-Wayland">
            <div className="w-full flex flex-col items-start" >
              <figure className="rounded-lg overflow-hidden">
                <img src={abuelo.imagen} alt="" />
              </figure>
              <h4 className="text-3xl text-start mt-2">
                Conoce a <br />{" "}
                <span className="text-6xl">{abuelo.nombre}</span>
              </h4>
              <span className="border-2 border-primary rounded-md p-2 py-1">
                LEER MÁS
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Botones de navegación personalizados */}
      <div className="swiper-button-prev">atras</div>
      <div className="swiper-button-next">adelante</div>
    </>
  );
};
