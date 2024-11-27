import { links } from "../header/MenuLink";
import { Socials } from "../helpers/Socials";
import { Lineas } from "./Lineas";

export const CompartirCancion = ({reff}) => {
  const imagenes = ["apple-music", "spotify", "deezer"];
  const backgroundImage = "/imagenes/background-cancion-navidad.webp";

  const social = ["facebook", "whatsapp"];
  return (
    <section
    ref={reff}
    id={`${links[3]}`}
      className="h-screen w-full flex flex-col justify-center items-center snap-item p-responsive"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Fondo de la pantalla principal */}
      <h2 className="titles font-Wayland   text-center mt-20">
        ESCUCHA LA CANCIÓN <br />
        DE LOS CLÁSICOS
      </h2>
      <div className="lg:-translate-y-12 xs:-translate-y-6 w-full flex justify-center flex-col">
        <div className="flex items-center justify-center">
          <Lineas lines={6} />
          <figure className="w-[28rem]">
            <img
              src="/imagenes/yo-no-me-olvido-de-ti.webp"
              alt="yo no me olvido de ti"
            />
          </figure>
          <Lineas lines={6} />
        </div>
        <div className="lg:w-[34%] xs:w-full m-auto">
          <div className="flex bg-black bg-opacity-20 justify-center w-full border border-primary rounded-lg h-14 gap-2">
            {imagenes.map((imagen, i) => (
              <figure className="cursor-pointer group hover:bg-primary transition-all ease-in-out duration-700 w-1/3 h-full lg:px-12 xs:px-9 inline-block " key={i}>
                <img className="group-hover:invert" src={`/iconos/${imagen}.svg`} alt={`${imagen}`} />
              </figure>
            ))}
          </div>
          <p className="text-center w-full mt-4 text-sm font-StageGroteskLigth">
            Esta canción interpretada por 5 abuelos nos demuestra que la edad es
            solo un número y al mismo tiempo es una invitación para que
            compartamos más con todos los abuelos.
          </p>
          <p className="text-center mt-4 font-StageGroteskBold ">
            Compartir a través de:
          </p>
          <div className="flex justify-center gap-12 mt-2"><Socials social={social} /></div>
        </div>
      </div>
    </section>
  );
};
