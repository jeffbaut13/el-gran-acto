import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Lineas = ({ lines }) => {
  const lineRefs = useRef([]);

  useEffect(() => {
    lineRefs.current.forEach((line, index) => {
      gsap.to(line, {
        height: () => `${2 + Math.random() * 30}%`,
        repeat: -1,
        yoyo: true,
        duration: 0.4,
        delay: index * 0.1, // Retraso entre líneas
      });
    });
  }, [lines]);

  return (
    <>
      {Array.from({ length: lines }, (_, i) => (
        <span
          ref={(el) => (lineRefs.current[i] = el)}
          key={i}
          className="w-1.5 bg-[#fcf6cc80]  rounded-full mx-1"
          style={{ height: '10%' }} // Altura inicial
        />
      ))}
    </>
  );
};
