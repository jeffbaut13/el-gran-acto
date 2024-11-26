import { Link, useNavigate } from "react-router-dom";

export const links = [
  "INICIO",
  "DONA-TU-TIEMPO",
  "INVITA-A-DONAR",
  "LA-CANCIÓN",
  "UN-REGALO-INOLVIDABLE",
  "CONOCE-A-LOS-CLÁSICOS",
  "DETRÁS-DE-CÁMARAS",
  "COMPARTE",
  "NUESTRAS-ENTREGAS",
];
export const MenuLink = ({ setActive }) => {
  const navigate = useNavigate();

  const handleClick = (hash) => {
    setActive(false);

    if (window.location.pathname === "/") {
      window.location.hash = hash;

      // Delay para asegurar que el hash esté aplicado antes de hacer el scroll
      setTimeout(() => {
        const section = document.getElementById(hash.replace("#", ""));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // Navega al home y añade el hash
      navigate(`/${hash}`);

      // Delay para asegurar que el DOM del home está cargado antes de intentar hacer scroll
      setTimeout(() => {
        const section = document.getElementById(hash.replace("#", ""));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Ajusta este valor si es necesario para darle más tiempo al DOM para cargar
    }
  };

  return (
    <nav className="menuLink w-full h-full z-[9] bg-black bg-opacity-30 backdrop-blur-sm text-second fixed top-0 left-0 opacity-0 flexCenter">
      <ul className="text-primary w-[56.47rem] min-h-[42.5rem] p-12 bg-black bg-opacity-60 rounded-2xl flex flex-col items-end justify-around">
        {" "}
        {links.map((link, i) => (
          <li className="group flex flex-col w-full items-end justify-between min-h-[4.2rem]" key={i}>
            <span />
            <span className="cursor-pointer" onClick={() => handleClick(link)}>
              <Flecha />
              <span className="font-StageGroteskLigth text-[1.565rem] leading-7">
                {link.replace(/-/g, " ")}
              </span>
            </span>
            <span className="border-b border-[#e9e2b430] inline-block w-full h-0.5 overflow-hidden">
              <span className="translate-x-[101%] group-hover:translate-x-0 bg-primary block w-full h-full ease-out duration-700 transition-all" />
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Flecha = () => {
  return (
    <figure className="origin-bottom-left scale-0 -translate-x-2 group-hover:scale-100  ease-out duration-500 transition-all w-7 h-7 inline-block">
      <svg
        id="uuid-0f3a82ea-aee5-433d-bd50-75cefc91472c"
        data-name="Capa 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 51.53 51.53"
        className="fill-none stroke-primary"
      >
        <g id="uuid-5e5f19c3-e126-4d82-ae5c-3196e4f86f53" data-name="Capa 1">
          <line
            x1="38.99"
            y1="12.05"
            x2="11.05"
            y2="39.99"
            style={{ strokeMmiterlimit: 10 }}
          />
          <path
            d="M11.05,11.28h26.09c1.45,0,2.63,1.18,2.63,2.63v26.64"
            style={{ strokeLinecap: "round", strokeMmiterlimit: 10 }}
          />
        </g>
      </svg>
    </figure>
  );
};
