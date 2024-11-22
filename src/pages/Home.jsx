import SectionAgendar from "../components/agendar/SectionAgendar";
import { CompartirCancion } from "../components/compartirCancion/CompartirCancion";
import { CompartirDonar } from "../components/CompartirDonar/CompartirDonar";
import { LosClasicos } from "../components/losClasicos/LosClasicos";

import { SectionMain } from "../components/main/SectionMain";
import { MakingOf } from "../components/MakingOf/MakingOf";
import { VideoComercial } from "../components/videoComercial/VideoComercial";
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
