import useCounterStore from "../../store/store";
import { VideoBackground } from "../VideoBackground";

export const SectionMain = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <main className="w-full h-screen inline-block relative flexCenter flex-col">
      <VideoBackground />
      <figure className="inline-block w-1/3">
        <img src="/iconos/logo.svg" alt="" />
      </figure>
        <hr className="w-full mt-6" />

      <h1 className="tracking-widest">
        <strong>EN NAVIDAD,</strong> ENTREGAR ES MEJOR QUE RECIBIR.
      </h1>
    </main>
  );
};
