import { VideoBackground } from "../components/VideoBackground";

const Layout = ({ children }) => {
  return (
    <>
      <header className="block absolute top-0 left-0">Header</header>
      {children}
     
    </>
  );
};
export default Layout;
