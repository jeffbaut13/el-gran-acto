import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import Loader from "../components/Loader/Loader";
import { VideoBackground } from "../components/main/VideoBackground";
import usePlayVideo from "../store/StoreVideo";

const Layout = ({ children }) => {
  const { scrollIcon, LoaderHide, LoaderShow, Loading } = usePlayVideo();
  return (
    <>
    
    {/* {Loading && <Loader LoaderHide={LoaderHide} Loading={Loading}/>}  */}
    
      {/* <Header scrollIcon={scrollIcon} /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
