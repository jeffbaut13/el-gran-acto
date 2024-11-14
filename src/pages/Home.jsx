import SectionAgendar from "../components/agendar/SectionAgendar";
import { CompartirCancion } from "../components/compartir-cancion/CompartirCancion";
import { CompartirDonar } from "../components/Compartir-Donar/CompartirDonar";
import { LosClasicos } from "../components/los-clasicos/LosClasicos";

import { SectionMain } from "../components/main/SectionMain";

export const Home = () => {
  return (
    <>
      <SectionMain />
      <SectionAgendar />

      <CompartirDonar />
      <CompartirCancion />
      <LosClasicos />
      <section className="w-full h-screen bg-black flexCenter snap-item">
        Souvenir
      </section>
      <section className="w-full h-screen bg-black flexCenter snap-item">
        Making of
      </section>
    </>
  );
};
