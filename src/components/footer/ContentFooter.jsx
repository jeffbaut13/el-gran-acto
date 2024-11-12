import { Creditos } from "./Creditos";

export const ContentFooter = () => {
  return (
    <section className="w-full h-screen bg-tercero text-second flex flex-col justify-around px-10">
      <Creditos />
      <div className="w-full flex justify-between">
        <div className="w-1/3"></div>
        <div className="w-1/3 text-2xl font-StageGroteskLigth">
          <span className="flex items-center justify-between border-b-2 border-dashed border-second pb-4">
            Subscribete para próximas entregas
            <span className="w-6 h-auto inline-block">
              <img src="/iconos/arrow-link-black.svg" alt="" />
            </span>
          </span>
        </div>
        <div className="w-1/3"></div>
      </div>
    </section>
  );
};
