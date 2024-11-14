import { Link } from "react-router-dom";

export const SocialLink = () => {
  const social = ["facebook", "X", "whatsapp"];
  return (
    <>
      {social.map((link, i) => (
        <Link
          key={i}
          to={"/"}
          className="font-Wayland bg-primary text-second flexCenter  rounded-md px-12 py-2 HoverButtons"
        >
          <span className="w-8">
            <img src={`/iconos/${link}.svg`} alt={`${link}`} />
          </span>
        </Link>
      ))}
    </>
  );
};
