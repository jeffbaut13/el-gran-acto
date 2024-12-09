import { useEffect, useState } from "react";
import SectionAgendar from "../components/agendar/SectionAgendar";
import { CompartirCancion } from "../components/compartirCancion/CompartirCancion";
import { CompartirDonar } from "../components/CompartirDonar/CompartirDonar";
import { LosClasicos } from "../components/losClasicos/LosClasicos";
import { Compartir } from "../components/footer/Compartir";
import { SectionMain } from "../components/main/SectionMain";
import { MakingOf } from "../components/MakingOf/MakingOf";
import { Souvenir } from "../components/Souvenir/Souvenir";
import { VideoComercial } from "../components/videoComercial/VideoComercial";
import usePlayVideo from "../store/StoreVideo";
import { useInView } from "react-intersection-observer";
import { ButtonSouvenir } from "../components/helpers/ButtonSouvenir";
import { ButtonDonar } from "../components/helpers/ButtonDonar";
import { LosClasicosCards } from "../components/losClasicos/LosClasicosCards";
import { SouvenirHome } from "../components/Souvenir/SouvenirHome";

export const Home = () => {
  const { playVideo, play, closeVideo, scrollShow, scrollHide } =
    usePlayVideo();
  const [showButton, setShowButton] = useState(false);
  const [showButtonDonar, setShowButtonDonar] = useState(false);

  // Configurar los observadores para las secciones con los IDs deseados
  const { ref: section0Ref, inView: inViewSection } = useInView({
    threshold: 0.5,
  });
  const { ref: section1Ref, inView: inViewSection1 } = useInView({
    threshold: 0.5,
  });
  const { ref: section2Ref, inView: inViewSection2 } = useInView({
    threshold: 0.5,
  });
  const { ref: section3Ref, inView: inViewSection3 } = useInView({
    threshold: 0.5,
  });
  const { ref: section4Ref, inView: inViewSection4 } = useInView({
    threshold: 0.5,
  });
  const { ref: section5Ref, inView: inViewSection5 } = useInView({
    threshold: 0.5,
  });
  const { ref: section6Ref, inView: inViewSection6 } = useInView({
    threshold: 0.5,
  });
  const { ref: section7Ref, inView: inViewSection7 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewSection) {
      scrollShow();
    } else {
      scrollHide();
    }
    if (inViewSection1 || inViewSection2 || inViewSection3) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    if (
      inViewSection3 ||
      inViewSection4 ||
      inViewSection5 ||
      inViewSection6 ||
      inViewSection7
    ) {
      setShowButtonDonar(true);
    } else {
      setShowButtonDonar(false);
    }
  }, [
    inViewSection1,
    inViewSection2,
    inViewSection3,
    inViewSection4,
    inViewSection5,
    inViewSection6,
    inViewSection7,
  ]);

  return (
    <>
      {/* <ButtonSouvenir showButton={showButton} />
      <ButtonDonar showButton={showButtonDonar} />
      <VideoComercial playVideo={playVideo} setPlayVideo={closeVideo} />
      <SectionMain reff={section0Ref}/> */}
      {/* <SectionAgendar reff={section1Ref} /> */}
      {/*
      <CompartirDonar reff={section2Ref} />
      <CompartirCancion reff={section3Ref} />
      <SouvenirHome reff={section4Ref} />
      <LosClasicosCards reff={section5Ref} />*/}
      {/* <MakingOf reff={section6Ref} /> */}

      {/*    <Compartir reff={section7Ref} /> */}

      <ButtonSouvenir showButton={showButton} />
      <ButtonDonar showButton={showButtonDonar} />
      <VideoComercial playVideo={playVideo} setPlayVideo={closeVideo} />
      <SectionMain reff={section0Ref} />
      <SectionAgendar reff={section1Ref} />

      <CompartirDonar reff={section2Ref} />
      {/*  <CompartirCancion reff={section3Ref} /> */}
      <SouvenirHome reff={section4Ref} />
      <LosClasicosCards reff={section5Ref} />
      {/* <MakingOf reff={section6Ref} /> */}

      <Compartir reff={section7Ref} />
    </>
  );
};
