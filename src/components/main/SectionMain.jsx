import useCounterStore from "../../store/store";
import { VideoBackground } from "../VideoBackground";

export const SectionMain = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <main className="w-full h-screen relative flex justify-between flex-col py-12">
      <VideoBackground />
      <div className="w-full flexCenter flex-col">
        <div className="w-[25.5rem]">
          <figure className="inline-block w-full">
            <img src="/iconos/logo.svg" alt="" />
          </figure>
          <hr className="w-full my-6" />
        </div>

        <h1 className="tracking-[0.15em] text-sm">
          <strong>EN NAVIDAD,</strong> ENTREGAR ES MEJOR QUE RECIBIR.
        </h1>
      </div>
      <div className="w-full flexCenter">
        <figure className="w-10">
          <img src="/iconos/play.svg" alt="" />
        </figure>
      </div>
      <div className="w-full flex justify-around items-center">
        <button>ESCUCHA YO NO ME OLVIDO DE TI</button>
        <button>DONA TU TIEMPO A UN <br />ABUELITO EN NAVIDAD</button>
      </div>
    </main>
  );
};
