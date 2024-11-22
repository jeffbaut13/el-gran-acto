import { links } from "../header/MenuLink";

export const Souvenir = ({ reff }) => {
  return (
    <section
      ref={reff}
      id={`${links[4]}`}
      className="w-full h-screen bg-black flexCenter snap-item"
    >
      Souvenir
    </section>
  );
};
