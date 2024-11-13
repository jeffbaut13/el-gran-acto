import SectionAgendar from "../components/agendar/SectionAgendar";
import { CompartirCancion } from "../components/compartir-cancion/CompartirCancion";
import { Footer } from "../components/footer/Footer";
import { SectionMain } from "../components/main/SectionMain";
 

 

export const Home = () => {
 

  return (
    <>
      <SectionMain />
      <SectionAgendar />

      <section className="w-full h-screen bg-black flexCenter">Agendar</section>
      <section className="w-full h-screen bg-black flexCenter">
        Souvenir
      </section>
      <CompartirCancion />
      <section className="w-full h-screen bg-black flexCenter">
        Los Clasicos
      </section>
      <section className="w-full h-screen bg-black flexCenter">
        Making of
      </section>
      <Footer />
    </>
  );
};
