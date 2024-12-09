import React from "react";

const Gracias = ({ nombreUsuario, tipoInteraccion, fecha, hora, abuelito }) => {
  // Asegurar que el rango de horas mantenga ambos bloques completos
  const formatearHora = (hora) => {
    try {
      // Comprobar si la hora está en el formato "HH:mm a HH:mm"
      if (hora.includes("a")) {
        const rangos = hora.split("a").map((rango) => rango.trim());
        const formateados = rangos.map((rango) => {
          const [horas, minutos] = rango.split(":");
          return `${horas.padStart(2, "0")}:${minutos.padStart(2, "0")}`;
        });
        return formateados.join(" a ");
      }
      throw new Error("Formato de hora inválido");
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
          {nombreUsuario.toUpperCase()} <br /> AHORA HACES PARTE DE EL GRAN ACTO
        </h1>
        {tipoInteraccion === "visita" ? (
          <p className="font-StageGroteskRegular lg:px-40 xs:px-1 my-10 text-center leading-5">
            Tu cita quedó agendada para el <span className=" font-StageGroteskBold">{fecha}</span> , de <span className=" font-StageGroteskBold">{formatearHora(hora)}</span>, en el Centro de Bienestar del Anciano San José, <span className=" font-StageGroteskBold">Cra. 6 # 6-29,</span> Facatativá, Cundinamarca.
          </p>
        ) : (
          <p className="font-StageGroteskRegular lg:px-40 xs:px-1 my-10 text-center leading-5">
            Tu videollamada con {abuelito}, quedó agendada para el {fecha}, de {formatearHora(hora)}.
          </p>
        )}
        {tipoInteraccion === "visita" ? (
          <p className="font-StageGroteskRegular lg:px-40 xs:px-1 text-center leading-5">
            ¡Te esperamos, gracias por entregar tu tiempo!
          </p>
        ) : (
          <p className="font-StageGroteskRegular lg:px-40 xs:px-1 text-center leading-5">
            Gracias por entregar tu tiempo, pronto recibirás un correo con el link de la videollamada.
          </p>
        )}
      </div>
      <button
        className="mt-8 py-2 px-2 HoverButtons"
        onClick={handleReload}
      >
        SEGUIR NAVEGANDO
      </button>
    </div>
  );
};

export default Gracias;
