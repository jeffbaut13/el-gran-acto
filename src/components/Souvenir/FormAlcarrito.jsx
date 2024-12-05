import React from "react";
import { useForm } from "react-hook-form";

import {
  enviarDatosAFirebase,
  redireccionar,
} from "../../functions/FirestoreSouvenir/storage";
import useAudioStore from "../../store/audioStore";
import { useSnapshot } from "valtio";
import ImgRender from "../../store/valtioStore";

const Formulario = ({ verificarArchivos, procesarPago }) => {
  const { combinedAudioUrl, isAudioReady } = useAudioStore(); // Audio desde Zustand
  const snap = useSnapshot(ImgRender); // Imagen desde Valtio

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Rescatar datos desde Zustand y Valtio

      const audio = combinedAudioUrl; // URL del audio
      const imagen = snap.Imagen; // URL o archivo de la imagen desde Valtio

      // Validar archivos existentes
      const emailEnUso = await verificarArchivos(data.email);
      if (emailEnUso) {
        alert(
          "Este correo ya tiene archivos asociados. ¿Desea grabar uno nuevo o ir a pagar lo existente?"
        );
        return;
      }

      // Validar estado de audio e imagen
      if (!audio ) {
        alert("No encontramos audio de dedicatoria graba uno.");
        return;
      }
      if ( !imagen || imagen === "/imagenes/file.webp") {
        alert("Sube una image.");
        return;
      }

      // Crear un ID aleatorio (puedes usar cualquier librería como uuid)
      const idGenerado = Math.random().toString(36).substring(2, 10);

      // Enviar datos a Firebase
      const promoId = "granacto"; // Ejemplo de promoId
      const email = data.email;

      const idDoc = await enviarDatosAFirebase({
        email,
        audio,
        imagen,
        promoId,
      });

      // Redirigir al usuario
      redireccionar(promoId, email, idDoc);
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Hubo un error al procesar tu solicitud.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="Ingresa tu email"
          className="w-96 py-2 px-3.5 border border-primary rounded-lg my-4"
          type="email"
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Introduce un correo válido",
            },
          })}
        />
        <p className="text-red-400 w-full">
          {errors.email && <>{errors.email.message}</>}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4">
        <input
          className="w-4 h-4"
          type="checkbox"
          {...register("aceptaTerminos", {
            required: "Debes aceptar los términos y condiciones",
          })}
        />
        <span className="text-primary font-StageGroteskRegular lg:text-xs xs:text-sm max-lg:w-[92%]">
          Autorizo el tratamiento de mis datos personales para la finalidad
          descrita en la{" "}
          <a
            href="https://www.interrapidisimo.com/proteccion-de-datos-personales/"
            className="text-primary"
          >
            <strong className="font-StageGroteskBlack">
              Política de tratamiento de datos Personales{" "}
            </strong>
          </a>
          de Inter Rapidísimo.
        </span>
        <p className="text-red-400 w-full">
          {errors.aceptaTerminos && <>{errors.aceptaTerminos.message}</>}
        </p>
      </div>

      <button
        type="submit"
        className="my-6 py-2 px-12 max-lg:mx-auto"
        //disabled={!isAudioReady || ImgRender.Imagen === "/imagenes/file.webp"}
      >
        Ir a pagar
      </button>
    </form>
  );
};

export default Formulario;
