import { SocialLink } from "../coomons/socialLink";

export const CompartirDonar = () => {
  const backgroundImage = "/imagenes/compartir-donacion.webp";
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center snap-item relative px-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#000f0d] to-60% absolute left-0 top-0" />
      <div className="w-full z-10 relative flex">
        <div className="w-1/2 pl-48">
          <h2 className="text-titlesBig leading-[5.2rem] font-Wayland ">
            INVITA A OTRA <br />
            PERSONA A <br />
            DONAR SU <br /> TIEMPO
          </h2>
          <hr className="w-full my-4" />

          <h3 className="tracking-[0.15em] text-sm">
            <strong>EN NAVIDAD,</strong> ENTREGAR ES MEJOR QUE RECIBIR.
          </h3>
          <div className="flex flex-col justify-center items-center mt-8">
            <h4 className="text-xl">Invitar a través de:</h4>
            <div className="w-full flex justify-between mt-2">
              <SocialLink />
            </div>
          </div>
        </div>
        <div className="w-1/2" />
      </div>
    </section>
  );
};
