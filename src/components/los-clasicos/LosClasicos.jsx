import { SlideClasicos } from "./SlideClasicos";

export const LosClasicos = () => {
  const backgroundImage = "/imagenes/landing_el_gran_acto.webp";
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center snap-item bg-black relative px-20">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full absolute top-0 left-0 opacity-30 z-0"
      ></div>
      <div className="w-full h-full z-10 flex items-center flex-col justify-center">
        <h2 className="text-titlesBig leading-[5.2rem] font-Wayland text-center">CONOCE A <br />LOS CLÁSICOS</h2>
        <p className="text-center">Esta banda musical conformada por 5 abuelitos que fue capaz de conmover <br />
        a todo un país con el poder y el mensaje de sus letras.</p>
        <SlideClasicos />
      </div>
    </section>
  );
};
