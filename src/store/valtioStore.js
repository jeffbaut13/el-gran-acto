import { proxy } from "valtio";

const ImgRender = proxy({
  //Imagen: "/imagenes/file.jpg",
  Imagen: "/imagenes/file.webp",
  ajuste: false,
  imageWidth: 1,
  imageHeight: 1,
  imagePositionX: 0,
  imagePositionY: 0,
  
});

export default ImgRender;
