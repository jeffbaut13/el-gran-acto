import SectionAgendar from "../components/agendar/SectionAgendar";
import { CompartirCancion } from "../components/compartir-cancion/CompartirCancion";
import { CompartirDonar } from "../components/Compartir-Donar/CompartirDonar";
import { LosClasicos } from "../components/los-clasicos/LosClasicos";

import { SectionMain } from "../components/main/SectionMain";
import { MakingOf } from "../components/Making-of/MakingOf";
import { VideoComercial } from "../components/video-comercial/VideoComercial";
import usePlayVideo from "../store/StoreVideo";

export const Home = () => {
  const { playVideo, play, closeVideo } = usePlayVideo();
  return (
    <>
      <VideoComercial playVideo={playVideo} setPlayVideo={closeVideo} />
      <SectionMain />
      <SectionAgendar />

      <CompartirDonar />
      <CompartirCancion />
      <section className="w-full h-screen bg-black flexCenter snap-item">
        Souvenir
      </section>
      <LosClasicos />
      <MakingOf />
    </>
  );
};
