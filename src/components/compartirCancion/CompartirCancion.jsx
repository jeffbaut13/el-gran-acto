import { Lineas } from "./Lineas";

export const CompartirCancion = () => {
  const imagenes = ["apple-music", "spotify", "deezer"];
  const backgroundImage = "/imagenes/background-cancion-navidad.webp";

  const social = ["facebook", "whatsapp"];
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center snap-item"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Fondo de la pantalla principal */}
      <h2 className="text-[4.4rem] font-Wayland leading-[3.5rem] text-center mt-20">
        ESCUCHA LA CANCIÓN <br />
        DE LOS CLÁSICOS
      </h2>
      <div className="-translate-y-12 w-full flex justify-center flex-col">
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
        <div className="w-[38%] m-auto">
          <div className="flex items-center justify-center gap-20 py-4 w-full border border-primary rounded-lg">
            {imagenes.map((imagen, i) => (
              <figure className="w-20 h-auto inline-block" key={i}>
                <img src={`/iconos/${imagen}.svg`} alt={`${imagen}`} />
              </figure>
            ))}
          </div>
          <p className="text-justify w-full mt-4 text-sm font-StageGroteskLigth">
            Esta canción interpretada por 5 abuelos nos demuestra que la edad es
            solo un número y al mismo tiempo es una invitación para que
            compartamos más con todos los abuelos.
          </p>
          <p className="text-center mt-4 font-StageGroteskBold ">
            Compartir a través de:
          </p>
          <div className="flex justify-center gap-16 mt-2"></div>
        </div>
      </div>
    </section>
  );
};
