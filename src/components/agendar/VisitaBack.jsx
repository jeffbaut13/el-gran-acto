 

export const VisitaBack = () => {
  
  const backgroundImage = "/imagenes/background-visitas.jpg";
  //const videoSrcMobile = "/videos/intro-vertical.mp4";

  return (
    <div className="absolute top-0 left-0 h-full w-full -z-10">
      <div className="h-full w-full relative snap-item">
   
        {/* Fondo de la pantalla principal */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute top-0 left-0 bg-gradient-to-b from-second from-20% w-full h-40" />
        </div>
      </div>
    </div>
  );
}