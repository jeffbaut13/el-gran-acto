import useCounterStore from "../../store/store";
import { VideoBackground } from "../VideoBackground";

export const SectionMain = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <main className="w-full h-screen inline-block relative flexCenter flex-col">
      <VideoBackground />
      <div className="w-1/3">

      <figure className="inline-block w-full">
        <img src="/iconos/logo.svg" alt="" />
      </figure>
        <hr className="w-full my-6" />
      </div>

      <h1 className="tracking-widest">
        <strong>EN NAVIDAD,</strong> ENTREGAR ES MEJOR QUE RECIBIR.
      </h1>
    </main>
  );
};
