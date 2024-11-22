import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { VideoBackground } from "../components/main/VideoBackground";
import usePlayVideo from "../store/StoreVideo";

const Layout = ({ children }) => {
  const { scrollIcon } = usePlayVideo();
  return (
    <>
      <Header scrollIcon={scrollIcon} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
