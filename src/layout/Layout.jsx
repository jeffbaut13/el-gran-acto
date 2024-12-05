import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import Loader from "../components/Loader/Loader";
import { VideoBackground } from "../components/main/VideoBackground";
import usePlayVideo from "../store/StoreVideo";

const Layout = ({ children }) => {
  const { scrollIcon, LoaderHide, LoaderShow, Loading } = usePlayVideo();
  return (
    <>
    
<<<<<<< HEAD
    {/* {Loading && <Loader LoaderHide={LoaderHide} Loading={Loading}/>}  */}
=======
   {/*  {Loading && <Loader LoaderHide={LoaderHide} Loading={Loading}/>}  */}
>>>>>>> d7bf48d31d8524dc906727a78b3fdf6e25da832c
    
      <Header scrollIcon={scrollIcon} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
