import { IconPlay } from "./IconPlay";

export const BotonMusic = ({ url }) => {
  return (
    <button
      onClick={() => window.location.href = "https://www.youtube.com/watch?v=77_C-xjRY8o"}
      className="group text-[1.15rem] leading-3 py-2 HoverButtons"
    >
      <span className="w-10 h-auto pr-3 ml-3.5">
        <IconPlay customStyle={true} />
      </span>
      <span className="flex flex-col mr-3.5 items-start">
        <span className="w-full leading-4">
          ESCUCHA: <span className="">+ de 75</span>
        </span>
        <span className="font-StageGroteskRegular text-[0.47rem] tracking-[0.248em] pl-1">
          EL GRAN EXITO DE “LOS CLÁSICOS”
        </span>
      </span>
    </button>
  );
};

