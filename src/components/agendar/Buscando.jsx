import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import casetRotando from "./caseteDos.json";

const Buscando = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = null;
    if (count < 75) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100); // Incrementa el contador cada 50ms
    } else {
      clearInterval(interval); // Detén el intervalo cuando alcance 75
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-[3rem] font-Wayland">
        + DE <span>{count}</span>
      </p>
    </div>
  );
};

export default Buscando;
