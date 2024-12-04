import { useEffect, useRef, useState } from "react";
import ImgRender from "../../../store/valtioStore";
import { CustomAutomaticButton } from "../CustomAutomaticButton";
import { useSnapshot } from "valtio";

// Función para calcular el máximo común divisor (MCD)
const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

export const PasoTres = ({back, HandleAudio}) => {
  const inputRef = useRef(null);
  const snap = useSnapshot(ImgRender);
  const ajuste = snap.ajuste

  useEffect(() => {
    if (ajuste) {
      posicionAutomatica();
    }
  }, [ajuste]);

  const handleImageUpload = (e) => {
    ImgRender.ajuste = false;
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg")
    ) {
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
    } else {
      alert("Solo se permiten imágenes JPG, JPEG o PNG.");
    }
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
      <p className="my-8 max-lg:text-center">Haz que ese momento inolvidable sea para siempre.</p>
      <div className={`flex ${ajuste ? "justify-center": "xs:justify-center lg:justify-start"}  gap-6`}>
        <button onClick={openFileDialog} className="py-2 px-12">
          <span className="w-8 h-8 inline-block">
            <img src="/iconos/subir-foto.svg" alt="" />
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
        <p className="mt-12 max-lg:text-center">
          Puedes ubicar la imagen en la van como más te guste.
        </p>
      )}

      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleImageUpload}
      />
      <div className="w-full flex justify-between mt-4">
        <div className="">
          <button
             onClick={back}
            className="w-8 h-8 inline-block p-1.5 rounded-full rotate-180 HoverButtons group relative"
            //className="absolute w-8 h-8 inline-block -left-14 p-1.5 rounded-full rotate-180 HoverButtons group"
          >
            <img
              className="easeHove group-hover:invert "
              src="/iconos/arrow-slide.svg"
              alt=""
            />
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs rotate-180">
              Volver
            </span>
          </button>
        </div>
        <div className="">
          {ajuste && (
            <button
               onClick={HandleAudio}
              className={`HoverButtons relative w-8 h-8 inline-block p-1.5 rounded-full HoverButtons group`}
            >
              <img
                className="easeHove group-hover:invert "
                src="/iconos/arrow-slide.svg"
                alt=""
              />{" "}
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs">
                Continuar
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
