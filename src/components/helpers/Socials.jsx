import { Link } from "react-router-dom";


export const Socials = ({social}) => {
  return (
    <>
      {social.map((link, i) => (
        <Link
          key={i}
          to={"/"}
          className="group font-Wayland border border-primary text-primary hover:bg-primary hover:text-second flexCenter rounded-lg lg:px-[3.3rem] xs:px-[2.8rem] py-1.5 HoverButtons"
        >
          <span className="w-8">
            <img className="group-hover:invert transition-all ease-in-out duration-700" src={`/iconos/${link}.svg`} alt={`${link}`} />
          </span>
        </Link>
      ))}
    </>
  );
};
