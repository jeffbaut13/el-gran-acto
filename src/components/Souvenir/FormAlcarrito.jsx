import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  enviarDatosAFirebase,
  redireccionar,
} from "../../functions/FirestoreSouvenir/storage";
import useAudioStore from "../../store/audioStore";
import { useSnapshot } from "valtio";
import ImgRender from "../../store/valtioStore";
import { Loading } from "../helpers/Loading";
import ReCAPTCHA from "react-google-recaptcha";

const Formulario = ({ back }) => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [recaptchaValid, setRecaptchaValid] = useState(false); // Estado para el ReCAPTCHA
  const { urlFirabesAudio } = useAudioStore(); // Audio desde Zustand
  const snap = useSnapshot(ImgRender); // Imagen desde Valtio

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const email = watch("email", ""); // Observar el valor del email
  const aceptaTerminos = watch("aceptaTerminos", false); // Observar el checkbox

  const onSubmit = async (data) => {
    setLoadingButton(true);
    try {
      const audio = urlFirabesAudio; // URL del audio
      const imagen = snap.Imagen; // URL o archivo de la imagen desde Valtio

      // Validar estado de audio e imagen
      if (!audio) {
        alert("No encontramos audio de dedicatoria graba uno.");
        return;
      }
      if (!imagen || imagen === "/imagenes/file.webp") {
        alert("Sube una imagen.");
        return;
      }

      const promoId = "clasicos"; // Ejemplo de promoId
      const idGenerado = Math.random().toString(36).substring(2, 10);
      const idDoc = await enviarDatosAFirebase({
        email: data.email,
        audio,
        imagen,
        promoId,
        idGenerado,
      });

      // Redirigir al usuario
      redireccionar(promoId, data.email, idGenerado);
      setLoadingButton(false);
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Hubo un error al procesar tu solicitud.");
      setLoadingButton(false);
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValid(!!value); // Actualiza el estado si el ReCAPTCHA es válido
  };

  const isButtonDisabled =
    loadingButton ||
    !urlFirabesAudio ||
    snap.Imagen === "/imagenes/file.webp" ||
    email.trim() === "" ||
    !aceptaTerminos ||
    !recaptchaValid; // Asegúrate de que el ReCAPTCHA sea válido

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
            target="_blank"
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
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY} // Accede al sitekey desde el .env
          onChange={handleRecaptchaChange} // Llama al controlador
        />
      </div>

      <div className="w-full flex justify-center max-lg:flex-col max-lg:my-10 items-center relative lg:gap-2 xs:gap-4 h-10">
        <button
          onClick={back}
          className={`HoverButtons lg:text-sm w-full px-7 py-2 text-[1.2rem] h-full`}
        >
          Volver
        </button>

        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`HoverButtons lg:text-sm w-full px-7 py-2 text-[1.2rem] h-full ${
            isButtonDisabled
              ? "opacity-15 pointer-events-none"
              : " opacity-100 pointer-events-auto bg-primary text-second"
          }`}
        >
          {loadingButton ? <Loading texto={"Redirigiendo..."} /> : "Ir a pagar"}
        </button>
      </div>
    </form>
  );
};

export default Formulario;
