import { SocialLink } from "../coomons/socialLink";

export const Compartir = () => {
  const backgroundImage = "/imagenes/compartir.webp";
  const social = ["facebook", "whatsapp", "X"];
  return (
    <section
      className="h-screen w-full flex flex-col justify-end items-center gap-4 snap-item relative px-20 pb-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="font-Wayland text-[4.38rem] leading-[3.8rem] text-center">
        COMPARTE LA EXPERIENCIA <br /> DE ESTE GRAN ACTO
      </h2>
      <div className="flex justify-center gap-16 mt-2">
        <SocialLink social={social} />
      </div>
    </section>
  );
};
