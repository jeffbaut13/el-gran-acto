import React from "react";

import { useSnapshot } from "valtio";
import ImgRender from "../../store/valtioStore";

export const CustomAutomaticButton = () => {
  const snap = useSnapshot(ImgRender);

  const posicionAutomatica = () => {
    // Calcular el factor de escala basado en la posición del slider
    const scale = 2; // Escala entre 1 y 2

    // Calcular la nueva altura
    const newHeight = Math.max(1, Math.min(1, scale)); // Limita entre 1 y 2

    // Mantener la proporción del ancho basado en la nueva altura
    const aspectRatio = snap.imageWidth / snap.imageHeight;
    const newWidth = newHeight * aspectRatio;

    // Actualizar el tamaño de la imagen
    ImgRender.imageWidth = newWidth;
    ImgRender.imageHeight = newHeight;
  };

  return (
    <>
      <button className="mx-2" onClick={posicionAutomatica}>
        Ajuste automático
      </button>
    </>
  );
};
