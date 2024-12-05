import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import van from "../../data/van.json";

import gsap from "gsap";

const Loader = ({ LoaderHide, Loading }) => {
  const lottieRef = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [first, setfirst] = useState(null);
  const [loading, setloading] = useState(true);
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setfirst(true);

    if (first) {
      const interval = setInterval(() => {
        setPercentage((oldPercentage) => {
          if (oldPercentage >= 100) {
            clearInterval(interval);
            return 100;
          } else if (oldPercentage >= 99) {
            setloading(false);
          }
          return oldPercentage + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [first]);

  useEffect(() => {
    const tl = gsap.timeline();
    if (!loading) {
      tl.to(".loading", {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
      });
      tl.to(".loadingBox", {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
      });
      tl.add(() => LoaderHide());
    }
  }, [loading]);

  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottieRef.current;

      // Usamos el porcentaje para avanzar o detener la animación
      const totalFrames = animation.getDuration(true); // Obtiene la duración en frames
      const frame = (percentage / 100) * totalFrames; // Calcula el frame correspondiente al porcentaje
      animation.goToAndStop(frame, true);
    }
  }, [percentage]);

  useEffect(() => {
    gsap.to(".loading", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="bg-black flex justify-center fixed top-0 left-0 loadingBox items-center flex-col w-full h-full z-[205]">
      <div className="mask1 w-full  inline-block">
        <div className="loading opacity-100 w-full h-full flex flex-col items-center justify-center">
          <span className="text-[--second] font-StageGroteskBlack text-xl">
            {percentage}
            <span className=" ">%</span>
          </span>
          <Lottie
            lottieRef={lottieRef}
            animationData={van}
            className="w-60 h-auto inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
