import { Link } from "react-router-dom";


export const SocialLink = ({social}) => {
  return (
    <>
      {social.map((link, i) => (
        <Link
          key={i}
          to={"/"}
          className="font-Wayland bg-primary text-second flexCenter  rounded-md px-[3.2rem] py-3 HoverButtons"
        >
          <span className="w-8">
            <img src={`/iconos/${link}.svg`} alt={`${link}`} />
          </span>
        </Link>
      ))}
    </>
  );
};
