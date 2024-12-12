import { useEffect, useRef, useState } from "react";
import ImgRender from "../../../store/valtioStore";
import { CustomAutomaticButton } from "../CustomAutomaticButton";
import { useSnapshot } from "valtio";

// Función para calcular el máximo común divisor (MCD)
const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

export const PasoTres = ({ back, HandleAudio }) => {
  const inputRef = useRef(null);
  const snap = useSnapshot(ImgRender);
  const ajuste = snap.ajuste;

  useEffect(() => {
    if (ajuste) {
      posicionAutomatica();
    }
  }, [ajuste]);

  const handleImageUpload = (e) => {
    ImgRender.ajuste = false;
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        const width = img.width * 0.8;
        const height = img.height;

        // Calcular el MCD y la proporción base
        const divisor = gcd(width, height);
        const aspectWidth = width / divisor;
        const aspectHeight = height / divisor;

        // Normalizar para que el máximo sea 2 y el mínimo sea 1 o más
        let normalizedWidth, normalizedHeight;
        if (aspectWidth > aspectHeight) {
          // Normalizar el ancho a 2 y calcular el alto
          normalizedWidth = 4;
          normalizedHeight = Math.max(0, (aspectHeight / aspectWidth) * 4);
        } else {
          // Normalizar el alto a 2 y calcular el ancho
          normalizedHeight = 4;
          normalizedWidth = Math.max(0, (aspectWidth / aspectHeight) * 4);
        }

        // Asegurar que los valores estén entre 1 y 2
        ImgRender.imageWidth = normalizedWidth.toFixed(3); // Formato decimal
        ImgRender.imageHeight = normalizedHeight.toFixed(3); // Formato decimal
      };
      img.src = reader.result;
      ImgRender.Imagen = reader.result;
    };
    reader.readAsDataURL(file);
    setTimeout(() => {
      ImgRender.ajuste = true;
    }, 500);
  };

  const posicionAutomatica = () => {
    // Calcular el factor de escala basado en la posición del slider
    const scale = 3; // Escala entre 1 y 2

    // Calcular la nueva altura
    const newHeight = Math.max(1, Math.min(1.2, scale)); // Limita entre 1 y 2

    // Mantener la proporción del ancho basado en la nueva altura
    const aspectRatio = snap.imageWidth / snap.imageHeight;
    const newWidth = newHeight * aspectRatio;

    // Actualizar el tamaño de la imagen
    ImgRender.imageWidth = newWidth;
    ImgRender.imageHeight = newHeight;
  };

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <>
      <h2 className="font-Wayland titles max-lg:text-center">
        SUBE UNA FOTO <br />
        CON TU CLÁSICO
      </h2>
      <p className="my-8 max-lg:text-center">
        Haz que ese momento inolvidable sea para siempre.
      </p>
      <div
        className={`flex ${
          ajuste ? "justify-center" : "xs:justify-center lg:justify-start"
        }  gap-6`}
      >
        <button onClick={openFileDialog} className="py-2 px-12">
          <span className="w-8 h-8 inline-block">
            <svg
              id="uuid-2408960c-82c1-4750-b941-89fd12925be5"
              data-name="Capa_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36.86 36.87"
              className="fill-primary"
            >
              <g
                id="uuid-f8a6fff1-bc85-44e7-a242-0c59b0aae39f"
                data-name="Capa_1"
              >
                <g>
                  <path d="M3.81,33.05h29.23v-14.97c0-.07.23-.55.3-.65,1-1.56,3.26-.96,3.52.81v15.8c-.24,1.6-1.44,2.72-3.06,2.83H2.97c-1.59-.13-2.8-1.33-2.97-2.9v-15.8c.32-1.69,2.48-2.27,3.48-.79.08.11.33.61.33.7v14.97Z" />
                  <path d="M20.34,6.52v21.17c0,.09-.25.59-.33.7-.8,1.18-2.48,1.12-3.22-.09-.05-.09-.27-.56-.27-.61V6.52l-4.13,4.09c-1.81,1.3-3.97-.85-2.66-2.66L17.2.48c.64-.6,1.64-.64,2.35-.12l7.59,7.59c1.3,1.81-.85,3.97-2.66,2.66l-4.13-4.09Z" />
                </g>
              </g>
            </svg>
          </span>
        </button>
        {/* {ajuste && (
          <button onClick={openFileDialog} className="py-2 px-12">
           Confirmar
          </button>
        )} */}
      </div>
      <p className="my-8 text-xs max-lg:text-center">
        *Sube imágenes rectangulares para que se adapte mejor a la van.
      </p>

      {ajuste && (
        <p className="my-12 max-lg:text-center">
          La imagen es referencial y puede variar en la impresión para cubrir
          toda el área.
        </p>
      )}

      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleImageUpload}
      />
      
        <div className="w-full flex justify-center max-lg:flex-col max-lg:my-6 items-center relative lg:gap-2 xs:gap-4 h-10">
          <button
            onClick={back}
            className={`HoverButtons lg:text-sm w-full px-7 py-2 text-[1.2rem] h-full`}
          >
            Volver
          </button>

          <button
            onClick={HandleAudio}
            className={`HoverButtons lg:text-sm w-full px-7 py-2 text-[1.2rem] h-full ${
              !ajuste
                ? "opacity-15 pointer-events-none"
                : " opacity-100 pointer-events-auto bg-primary text-second"
            }`}
          >
            Continuar
          </button>
        </div>
      
    </>
  );
};
