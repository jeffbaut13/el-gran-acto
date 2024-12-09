import React, { useRef, useState } from "react";
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

const Formulario = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [recaptchaValid, setRecaptchaValid] = useState(false); // Estado para el ReCAPTCHA
  const recaptchaRef = useRef(null); // Referencia para el ReCAPTCHA

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
    // Ejecutar ReCAPTCHA antes de procesar el formulario
    const recaptchaToken = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset(); // Reinicia el ReCAPTCHA para que esté listo para otro intento

    if (!recaptchaToken) {
      alert("No se pudo verificar el ReCAPTCHA.");
      return;
    }

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
        recaptchaToken, // Envía el token al backend para validarlo
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

  const isButtonDisabled =
    loadingButton ||
    !urlFirabesAudio ||
    snap.Imagen === "/imagenes/file.webp" ||
    email.trim() === "" ||
    !aceptaTerminos; // Ya no necesitas `!recaptchaValid`

  return (
    <>
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
          className={`my-6 py-2 px-12 max-lg:mx-auto ${
            isButtonDisabled ? "opacity-35 pointer-events-none" : ""
          }`}
          disabled={isButtonDisabled}
        >
          {loadingButton ? <Loading texto={"Redirigiendo..."} /> : "Ir a pagar"}
        </button>
      </form>
      <ReCAPTCHA
        ref={recaptchaRef} // Referencia para usar el método `executeAsync`
        sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY} // Accede al sitekey desde el .env
        size="invisible" // Configurar como invisible
        className="capcha fixed bottom-0 z-50"
      />
    </>
  );
};

export default Formulario;
