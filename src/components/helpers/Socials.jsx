import { Link } from "react-router-dom";
import { TwitterShareButton, WhatsappShareButton } from "react-share";

export const Socials = ({ texto, url }) => {
  // Función para copiar el mensaje al portapapeles
  const copiarTexto = () => {
    const mensaje = `${texto} ${url}`;

    // Crear un elemento temporal para copiar el texto
    const el = document.createElement("textarea");
    el.value = mensaje;
    document.body.appendChild(el);

    // Seleccionar y copiar el texto
    el.select();
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(el);

    // Mostrar un mensaje de confirmación
    alert("El mensaje se ha copiado. ¡Compártelo en Facebook o donde quieras!");
  };

  return (
    <>
      <span
        onClick={copiarTexto}
        className="cursor-pointer group font-Wayland border border-primary text-primary hover:bg-primary hover:text-second flexCenter rounded-lg lg:px-[3.3rem] xs:px-[2.8rem] py-1.5 HoverButtons"
      >
        <span className="w-8">
          <img
            className="group-hover:invert transition-all ease-in-out duration-700"
            src={`/iconos/facebook.svg`}
            alt={`Compartir el Gran Acto por whatsapp`}
          />
        </span>
      </span>
      <WhatsappShareButton title={texto} url={url}>
        <span className="group font-Wayland border border-primary text-primary hover:bg-primary hover:text-second flexCenter rounded-lg lg:px-[3.3rem] xs:px-[2.8rem] py-1.5 HoverButtons">
          <span className="w-8">
            <img
              className="group-hover:invert transition-all ease-in-out duration-700"
              src={`/iconos/whatsapp.svg`}
              alt={`Compartir el Gran Acto por whatsapp`}
            />
          </span>
        </span>
      </WhatsappShareButton>

      <TwitterShareButton title={texto} url={url}>
        <span className="group font-Wayland border border-primary text-primary hover:bg-primary hover:text-second flexCenter rounded-lg lg:px-[3.3rem] xs:px-[2.8rem] py-1.5 HoverButtons">
          <span className="w-8">
            <img
              className="group-hover:invert transition-all ease-in-out duration-700"
              src={`/iconos/X.svg`}
              alt={`Compartir el Gran Acto por whatsapp`}
            />
          </span>
        </span>
      </TwitterShareButton>
    </>
  );
};
