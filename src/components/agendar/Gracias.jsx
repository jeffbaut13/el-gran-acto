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
      <div className="border border-primary bg-black bg-opacity-85 md:w-[70%] md:h-[80%] xs:w-[25rem] xs:h-[25rem] rounded-xl flex flex-col justify-center items-center">
        <h1 className="lg:text-[2rem] xs:text-[1.7rem] font-Wayland text-center leading-7">
          {nombreUsuario.replace(/\s+/g, '').toUpperCase()}, AHORA HACES PARTE DE EL GRAN ACTO
        </h1>
        {tipoInteraccion === "visita" ? (
          <p className="font-StageGroteskRegular lg:px-40 xs:px-1 my-10 text-center leading-5">
            Tu cita quedó agendada para el {fecha}, de {formatearHora(hora)}, en el Centro de Bienestar del Anciano San José, Cra. 6 # 6-29, Facatativá, Cundinamarca.
          </p>
        ) : (
          <p className="font-StageGroteskRegularlg:px-40 xs:px-1 my-10 text-center leading-5">
            Tu videollamada con {abuelito}, quedó agendada para el {fecha}, de {formatearHora(hora)}.
          </p>
        )}
        {tipoInteraccion === "visita" ? (
          <p className="font-StageGroteskRegular lg:px-40 xs:px-1 text-center leading-5">¡Te esperamos, gracias por donar tu tiempo!</p>
        ) : (
          <p className="font-StageGroteskRegular lg:px-40 xs:px-1 text-center leading-5">
            Gracias por entregar tu tiempo, pronto recibirás un correo con el link de la videollamada.
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