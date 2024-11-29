export const LogoLanding = ({text, customStyle}) => {
  return (
    <figure className="lg:w-[36.58rem] xs:w-5/6 mb-20">
      <img
        src="/iconos/el-gran-acto-logo.svg"
        alt="El gran acto - de los clasicos y palo de agua"
      />
      <h2 className={`uppercase border border-primary w-full text-center rounded-md leading-10 ${customStyle } tracking-[0.132em]`}>
        {text}
      </h2>
    </figure>
  );
};
