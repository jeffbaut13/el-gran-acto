import React from "react";


const Gracias = ({ nombreUsuario, tipoInteraccion, fecha, hora, abuelito }) => {
  // Convertir la hora a formato de 12 horas (AM/PM)
  const formatearHora = (hora) => {
    try {
      const [horas, minutos] = hora.split(":");
      const meridiano = horas >= 12 ? "P.M." : "A.M.";
      const horasFormato12 = horas % 12 || 12; // Convertir a formato 12 horas
      return `${horasFormato12}:${minutos} ${meridiano}`;
    } catch (error) {
      console.error("Error al formatear la hora:", error);
      return "Hora inválida";
    }
  };
  const handleReload = () => {
    window.location.reload(); // Recargar la página
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="border border-primary bg-black bg-opacity-85 md:w-[70%] md:h-[80%] xs:w-[25rem] xs:h-[30rem] rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-Wayland text-center">
          {nombreUsuario.toUpperCase()}, AHORA HACES PARTE DEL GRAN ACTO
        </h1>
        {tipoInteraccion === "visita" ? (
          <p className="font-StageGroteskRegular md:px-40 my-10 text-center">
            Tu cita quedó agendada para el {fecha}, de {formatearHora(hora)}, en el Centro de Bienestar del Anciano San José, Cra. 6 # 6-29, Facatativá, Cundinamarca.
          </p>
        ) : (
          <p className="font-StageGroteskRegular px-40 my-10 text-center">
            Tu videollamada con {abuelito}, quedó agendada para el {fecha}, de {formatearHora(hora)}.
          </p>
        )}
        {tipoInteraccion === "visita" ? (
          <p>¡Te esperamos, gracias por donar tu tiempo!</p>
        ) : (
          <p>
            Gracias por donar tu tiempo, pronto recibirás un mail con el link de la videollamada.
          </p>
        )}
      </div>
      <button
        className="mt-8 py-2 px-2 HoverButtons"
        onClick={handleReload} // Llama a la función para recargar la página
      >
        SEGUIR NAVEGANDO
      </button>
    </div>
  );
};

export default Gracias;
