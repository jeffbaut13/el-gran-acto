import React, { useEffect, useState } from "react";

import gsap from "gsap";
import { videos } from "../../data/Videos";
import ReactVideo from "./ReactVideo";

export const VideoComercial = ({ playVideo, setPlayVideo }) => {
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (playVideo) {
      const tl = gsap.timeline();

      tl.to(".comercial", {
        pointerEvents: "all",
        visibility: "visible",
        opacity: 1,
        ease: "power1.inOut",
        duration: 1,
      });
      tl.to(".boxVideo", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 1,
      });
      tl.add(() => setClose(false));
    }
  }, [playVideo]);

  useEffect(() => {
    if (close) {
      const tl = gsap.timeline();
      tl.add(() => setPlayVideo());
      tl.to(".boxVideo", {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.2,
      });
      tl.to(".comercial", {
        pointerEvents: "none",
        visibility: "hidden",
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
      });
    }
  }, [close]);

  return (
    <div className="comercial pointer-events-none invisible opacity-0 fixed w-full h-full top-0 left-0 bg-black z-[2000] flex items-center justify-center">
      <span
        onClick={() => setClose(true)}
        className="z-50 cursor-pointer inline-block absolute w-4 h-4 right-12 top-12"
      >
        <img src="/iconos/close.svg" alt="" />
      </span>
      <div
        className={`boxVideo opacity-0 z-[9] lg:w-[70%] xs:w-full h-full flex flex-col justify-center items-center`}
      >
        <ReactVideo play={playVideo} url={videos.comercial} />
      </div>
    </div>
  );
};
