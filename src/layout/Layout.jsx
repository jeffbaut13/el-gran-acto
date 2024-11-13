import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { VideoBackground } from "../components/main/VideoBackground";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
