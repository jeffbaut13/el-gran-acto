import { Link } from "react-router-dom";

export const HoverCard = ({ abuelitos, setName, setOpen }) => {
  const handleClick = (name) => {
    setName(name);
    setOpen(true);
  };

  return (
    <div className="w-full h-[100%] flex gap-4">
      {abuelitos.map((abuelito, i) => (
        <div
          onClick={() => handleClick(i)}
          key={i}
          className="cursor-pointer w-full h-full py-3 hover:p-0 ease-in-out transition-all duration-300 opacity-60 hover:opacity-100 relative group overflow-hidden"
        >
          <img
            className="object-cover rounded-2xl"
            src={`${abuelito.imagen}`}
            alt=""
          />
          <div className="absolute top-0 left-0 z-[5] w-full h-[105%] bg-gradient-to-t from-[#000000c3] to-40% pointer-events-none" />
          <div className="w-full h-full z-10 absolute top-0 left-0 flex flex-col justify-end items-start p-4">
            <p className="font-Wayland text-[1.7rem] leading-3 uppercase">
              Conoce a
            </p>
            <h2 className="font-Wayland text-[2.82rem] leading-10 my-2">
              {abuelito.nombre}
            </h2>
            {/* <h2 className="font-Wayland text-2xl">{viejito.role}</h2> */}
            <span
               
              className="cursor-pointer font-StageGroteskBold border border-primary rounded-sm px-4 text-xs"
            >
              VER MÁS
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
