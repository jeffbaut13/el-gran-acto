import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ciudades from "./ciudades.json"; // Importa directamente el archivo JSON
import { div } from "three/webgpu";
import ReCAPTCHA from "react-google-recaptcha";

export const Form = () => {
  const [pasos, setPasos] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onChangeCaptcha = (token) => {
    setCaptchaToken(token);
    setCaptchaValido(!!token); // Valida si el token existe
  };

  const onSubmit = async (data) => {
    if (!captchaValido) {
      alert("Por favor, completa el ReCAPTCHA.");
      return;
    }

    try {
      const response = await axios.post(
        "https://backboletas.onrender.com/registro",
        { ...data, recaptchaToken: captchaToken } // Envía el token al backend
      );
      if (response.status === 200) {
        alert("Registro exitoso");
      } else {
        alert("Hubo un problema al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("No se pudo completar el registro, intenta nuevamente.");
    }
  };

  return (
    <form
      className="font-StageGroteskBold px-14 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {pasos == 1 && (
        <>
          {/* Nombre */}
          <div className="flex flex-wrap items-center justify-center mb-4">
            <label className="w-full text-center mb-4">Nombre</label>
            <input
              placeholder="Ingresa tu Nombre"
              className="border border-primary rounded-lg w-full flex items-center py-2 text-center placeHolder"
              id="nombre"
              type="text"
              {...register("nombre", {
                required: "El nombre es obligatorio",
              })}
            />
            <p className="text-red-500 text-sm">
              {errors.nombre && <p>{errors.nombre.message}</p>}
            </p>
          </div>

          {/* Documento */}

          <div className="flex flex-wrap items-center justify-center mb-4">
            <label className="w-full text-center mb-4">Documento:</label>
            <div className="border border-primary rounded-lg w-full flex items-center py-2">
              <div className="w-[13%] flex border-r-2 border-primary px-2">
                <select
                  id="documentoTipo"
                  {...register("documentoTipo", {
                    required: "Selecciona un tipo de documento",
                  })}
                >
                  <option value="">CC</option>
                  <option value="cedula">CE</option>
                  <option value="extranjeria">PA</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="flex-1">
                <input
                  className="text-center pr-14 placeHolder"
                  placeholder="Número de documento"
                  id="documento"
                  type="text"
                  {...register("documento", {
                    required: "El número de documento es obligatorio",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "El número de documento debe ser solo numérico",
                    },
                  })}
                />
              </div>
            </div>
            <p className="text-red-500 text-sm">
              {errors.documento && <p>{errors.documento.message}</p>}
            </p>
          </div>

          {/* Ciudad */}

          <div className="flex flex-wrap items-center justify-center mb-4">
            <label className="w-full text-center mb-4">
              Ciudad de residencia:
            </label>
            <select
              className="border border-primary rounded-lg w-full flex items-center py-2 text-center"
              id="ciudad"
              {...register("ciudad", { required: "Selecciona una ciudad" })}
            >
              <option value="">Seleccione</option>
              {ciudades.map((ciudad) => (
                <option key={ciudad.id} value={ciudad.nombre}>
                  {ciudad.nombre}
                </option>
              ))}
            </select>
            <p className="text-red-500 text-sm">
              {errors.ciudad && <p>{errors.ciudad.message}</p>}
            </p>
          </div>
        </>
      )}
      {pasos == 2 && (
        <>
          {/* Celular */}
          <div className="flex flex-wrap items-center justify-center mb-4">
            <label className="w-full text-center mb-4">Número de celular</label>
            <input
              className="border border-primary rounded-lg w-full flex items-center py-2 text-center placeHolder"
              placeholder="Celular"
              id="celular"
              type="text"
              {...register("celular", {
                required: "El celular es obligatorio",
              })}
            />
            <p className="text-red-500 text-sm">
              {errors.celular && <p>{errors.celular.message}</p>}
            </p>
          </div>

          {/* Email */}

          <div className="flex flex-wrap items-center justify-center mb-4">
            <label htmlFor="correo" className="w-full text-center mb-4">
              Correo
            </label>
            <input
              className="border border-primary rounded-lg w-full flex items-center py-2 text-center placeholder-gray-500"
              placeholder="Correo@correo.com"
              id="correo"
              type="email"
              {...register("correo", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingresa un correo válido",
                },
              })}
            />
            {errors.correo && (
              <p className="text-red-500 text-sm">{errors.correo.message}</p>
            )}
          </div>

          {/* Edad */}

          <div className="flex flex-wrap items-center justify-center mb-4">
            <label className="w-full text-center mb-4">Edad:</label>
            <input
              className="border border-primary rounded-lg w-full flex items-center py-2 text-center placeHolder"
              placeholder="Edad"
              id="edad"
              type="text"
              {...register("edad", {
                required: "la Edad es obligatoria",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Ingrea tu edad",
                },
              })}
            />
            <p className="text-red-500 text-sm">
              {errors.edad && <p>{errors.edad.message}</p>}
            </p>
          </div>
        </>
      )}

      <div className="w-full flexCenter">
        {pasos == 1 && (
          <button
            onClick={() => setPasos(2)}
            className={` cursor-pointer px-6 py-2 text-xs HoverButtons`}
          >
            Siguiente
          </button>
        )}
        {pasos == 2 && (
          <div className="flex gap-2 flex-wrap justify-center">
            {/* Checkbox de autorización */}
            <div className="flex flex-col items-start mb-4 w-full">
              <label className="flex items-center text-xs">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4"
                  {...register("autorizacion", {
                    required: "Debes autorizar el tratamiento de datos",
                  })}
                />
                Autorizo el tratamiento de mis datos personales según los
                términos y condiciones.
              </label>
              {errors.autorizacion && (
                <p className="text-red-500 text-sm">
                  {errors.autorizacion.message}
                </p>
              )}
            </div>

            {/* ReCAPTCHA */}
            <div className="flex justify-center w-full">
              <ReCAPTCHA
                sitekey="6LcU7YwqAAAAALRpU0m0eCncbIr380WpUsLXOz78"
                onChange={onChangeCaptcha}
              />
            </div>
            <button
              onClick={() => setPasos(1)}
              className={`cursor-pointer px-6 py-2 HoverButtons text-xs`}
            >
              Atrás{" "}
            </button>
            <button
              type="submit"
              className={`px-6 py-2 text-xs ${
                !isValid ? "opacity-50" : "HoverButtons"
              }`}
              disabled={!isValid}
            >
              Enviar
            </button>
          </div>
        )}
      </div>
    </form>
  );
};
