import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { isMobile } from "../../data/medidas";

export const Scroll = ({ scrollIcon }) => {
  const iconoScroll = useRef(null);

  

  useEffect(() => {
      
      gsap.to(".scrollMovil", {
        translateY: -50,
        duration: 0.5,
        ease: "power1.inOut",
      });
    
  }, []);

  useEffect(() => {
    if (scrollIcon) {
      gsap.to(".scroll", {
        translateY: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    } else {
      gsap.to(".scroll", {
        translateY: 120,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, [scrollIcon]);

  useEffect(() => {
    gsap.to(".mouse", {
      rotate: "3deg",
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to(".wheel", {
      translateY: "3px",
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to(".scroll .one, .scrollMovil .one", {
      opacity: "1",

      repeat: -1,
      duration: 1,
      stagger: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(".scroll .two, .scrollMovil .two", {
      opacity: "1",

      repeat: -1,
      duration: 1,
      stagger: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
    {isMobile ? 
    
    <figure
    ref={iconoScroll}
    className="scrollMovil fixed bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 inline-block z-[8]"
  >
    <svg
      id="uuid-859a1873-6c95-405b-ba1b-8209c2d6fe02"
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.8 45"
      className="fill-primary"
    >
      <g id="uuid-e8e5ed4a-4aca-424e-ba7e-a896ac384d1d" data-name="Capa 1">
        <g className="mouse">
          <path d="M10.9,32.11c-2.91,0-5.65-1.13-7.71-3.19-2.06-2.06-3.19-4.79-3.19-7.71v-10.32c0-2.91,1.13-5.65,3.19-7.71C5.25,1.13,7.99,0,10.9,0s5.65,1.13,7.71,3.19c2.06,2.06,3.19,4.79,3.19,7.71v10.32c0,2.91-1.13,5.65-3.19,7.71-2.06,2.06-4.79,3.19-7.71,3.19ZM10.9,1.55C5.74,1.55,1.55,5.74,1.55,10.9v10.32c0,5.15,4.19,9.35,9.35,9.35h0c5.15,0,9.35-4.19,9.35-9.35v-10.32c0-5.15-4.19-9.35-9.35-9.35Z" />
          <path
            className="wheel"
            d="M10.9,12.35h0c-.75,0-1.36-.61-1.36-1.36v-3.7c0-.75.61-1.36,1.36-1.36h0c.75,0,1.36.61,1.36,1.36v3.7c0,.75-.61,1.36-1.36,1.36Z"
          />
          <path
            className="one opacity-0"
            d="M10.88,40.46l-7.73-5.54c-.35-.25-.43-.73-.18-1.08.25-.35.73-.43,1.08-.18l6.83,4.89,6.83-4.89c.35-.25.83-.17,1.08.18.25.35.17.83-.18,1.08l-7.73,5.54Z"
          />
          <path
            className="two opacity-0"
            d="M10.88,45l-7.73-5.54c-.35-.25-.43-.73-.18-1.08.25-.35.73-.43,1.08-.18l6.83,4.89,6.83-4.89c.35-.25.83-.17,1.08.18.25.35.17.83-.18,1.08l-7.73,5.54Z"
          />
        </g>
      </g>
    </svg>
  </figure>
    : 
    
    <figure
      ref={iconoScroll}
      className="scroll fixed bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 inline-block z-[8]"
    >
      <svg
        id="uuid-859a1873-6c95-405b-ba1b-8209c2d6fe02"
        data-name="Capa 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21.8 45"
        className="fill-primary"
      >
        <g id="uuid-e8e5ed4a-4aca-424e-ba7e-a896ac384d1d" data-name="Capa 1">
          <g className="mouse">
            <path d="M10.9,32.11c-2.91,0-5.65-1.13-7.71-3.19-2.06-2.06-3.19-4.79-3.19-7.71v-10.32c0-2.91,1.13-5.65,3.19-7.71C5.25,1.13,7.99,0,10.9,0s5.65,1.13,7.71,3.19c2.06,2.06,3.19,4.79,3.19,7.71v10.32c0,2.91-1.13,5.65-3.19,7.71-2.06,2.06-4.79,3.19-7.71,3.19ZM10.9,1.55C5.74,1.55,1.55,5.74,1.55,10.9v10.32c0,5.15,4.19,9.35,9.35,9.35h0c5.15,0,9.35-4.19,9.35-9.35v-10.32c0-5.15-4.19-9.35-9.35-9.35Z" />
            <path
              className="wheel"
              d="M10.9,12.35h0c-.75,0-1.36-.61-1.36-1.36v-3.7c0-.75.61-1.36,1.36-1.36h0c.75,0,1.36.61,1.36,1.36v3.7c0,.75-.61,1.36-1.36,1.36Z"
            />
            <path
              className="one opacity-0"
              d="M10.88,40.46l-7.73-5.54c-.35-.25-.43-.73-.18-1.08.25-.35.73-.43,1.08-.18l6.83,4.89,6.83-4.89c.35-.25.83-.17,1.08.18.25.35.17.83-.18,1.08l-7.73,5.54Z"
            />
            <path
              className="two opacity-0"
              d="M10.88,45l-7.73-5.54c-.35-.25-.43-.73-.18-1.08.25-.35.73-.43,1.08-.18l6.83,4.89,6.83-4.89c.35-.25.83-.17,1.08.18.25.35.17.83-.18,1.08l-7.73,5.54Z"
            />
          </g>
        </g>
      </svg>
    </figure>
    }
    </>
    
  );
};
