import { Link } from "react-router-dom";
import { Lineas } from "./Lineas";

export const socialLinks = ["facebook", "X", "whatsapp"];
export const CompartirCancion = () => {
  const imagenes = ["apple-music", "spotify", "deezer"];
  const backgroundImage = "/imagenes/background-cancion-navidad.webp";
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Fondo de la pantalla principal */}
      <h2 className="text-[4.4rem] font-Wayland leading-[3.5rem] text-center">
        ESCUCHA LA CANCIÓN <br /> DE LOS CLÁSICOS <br /> Y COMPÁRTELA
      </h2>
      <div className="-translate-y-12 w-full flex justify-center flex-col">
        <div className="flex items-center justify-center">
          <Lineas lines={6} />
          <figure className="w-[28rem]">
            <img src="/imagenes/yo-no-me-olvido-de-ti.webp" alt="" />
          </figure>
          <Lineas lines={6} />
        </div>
        <div className="w-[38%] m-auto">
          <div className="flex items-center justify-center gap-20 py-4 w-full border border-primary rounded-lg">
            {imagenes.map((imagen, i) => (
              <figure className="w-20 h-auto inline-block" key={i}>
                <img src={`/iconos/${imagen}.svg`} alt="" />
              </figure>
            ))}
          </div>
          <p className="text-justify w-full mt-4 text-sm font-StageGroteskLigth">
            Más que una canción más de Navidad, esta melodía compuesta e
            interpretada por 5 abuelos, nos invita a compartir con los adultos
            mayores de nuestras familias y sobre todo con los más de 3000
            abuelos que solo en Bogotá se encuentran abandonados.
          </p>
          <p className="text-center mt-4 font-StageGroteskBold">
            Compartir a través de:
          </p>
          <div className="flex justify-between mt-2">
            {socialLinks.map((link, i) => (
              <Link
                key={i}
                to={"/"}
                className="font-Wayland bg-primary text-second flexCenter  rounded-md px-12 py-2 HoverButtons"
              >
                <span className="w-8">
                  <img src={`/iconos/${link}.svg`} alt="" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};