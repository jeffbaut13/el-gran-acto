import React, { useState } from "react";
import { PreguntasBackGround } from "./PreguntasBackGround";
import axios from "axios";

const Reagendar = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    correo: "",
  });

  const manejarCambioFormulario = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const manejarReagendar = async (e) => {
    e.preventDefault();

    const { correo } = formData;

    if (!correo) {
      alert("Por favor, ingresa el correo para reagendar.");
      return;
    }

    try {
      // Buscar el documento en la colección donador
      console.log("Buscando donador con correo:", correo);
      const response = await axios.get(
        `https://backboletas.onrender.com/buscar-donador?correo=${correo}`
      );

      if (response.status === 200 && response.data) {
        const donador = response.data;
        console.log("Donador encontrado:", donador);

        // Eliminar el documento del donador
        console.log("Eliminando donador con ID:", donador.id);
        await axios.delete(
          `https://backboletas.onrender.com/eliminar-donador/${donador.id}`
        );

        // Actualizar el estado de la opción en abuelitos
        console.log("Actualizando estado en abuelitos:", donador);
        await axios.post(
          `https://backboletas.onrender.com/actualizar-opcion-abuelito`,
          {
            documentoId: donador.abuelito,
            fecha: donador.fecha,
            hora: donador.hora,
          }
        );

        alert("Cita borrada con éxito. Ahora puedes agendar nuevamente.");

        // Recargar la página después de 5 segundos
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        alert("No se encontró un donador con ese correo.");
      }
    } catch (error) {
      console.error("Error al reagendar:", error.response || error);
      alert("Ocurrió un error al intentar reagendar. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="w-full h-screen flexCenter py-12 px-20">
      <PreguntasBackGround />
      <div className="border border-primary rounded-xl mt-4 w-[21rem] h-[26rem]">
        <form
          className="px-5 w-full flex flex-col justify-center items-center h-full"
          onSubmit={manejarReagendar}
        >
          <fieldset className="flex flex-col items-center py-5">
            <label>Nombre:</label>
            <input
              name="nombre"
              value={formData.nombre}
              onChange={manejarCambioFormulario}
              className="bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35"
              placeholder="Ingresa tu nombre"
            />
          </fieldset>
          <fieldset className="flex flex-col items-center py-5">
            <label>Celular:</label>
            <input
              name="celular"
              value={formData.celular}
              onChange={manejarCambioFormulario}
              className="bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35"
              placeholder="Ingresa tu número"
            />
          </fieldset>
          <fieldset className="flex flex-col items-center py-5">
            <label>Correo:</label>
            <input
              name="correo"
              value={formData.correo}
              onChange={manejarCambioFormulario}
              className="bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35"
              placeholder="correo@correo.com"
            />
          </fieldset>
          <button
            type="submit"
            className="py-2 px-4 rounded-md"
          >
            REAGENDAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reagendar;
