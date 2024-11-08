import { SectionMain } from "../components/main/SectionMain";
 

 

export const Home = () => {
 

  return (
    <>
      <SectionMain />
      <section className="w-full h-screen bg-black flexCenter">Agendar</section>
      <section className="w-full h-screen bg-black flexCenter">
        Souvenir
      </section>
      <section className="w-full h-screen bg-black flexCenter">
        Los Clasicos
      </section>
      <section className="w-full h-screen bg-black flexCenter">
        Making of
      </section>
      <footer>
        <section className="w-full h-screen bg-black flexCenter">
          Compartir
        </section>
        <section className="w-full h-screen bg-black flexCenter">
          Pie de pagina
        </section>
      </footer>
    </>
  );
};
