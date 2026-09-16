import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import MobileNavbar from "./header/MobileNavbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-[72px] md:pt-20 pb-20 md:pb-0">
        <Outlet />
      </main>

      <MobileNavbar />
      <Footer/>
    </div>
  );
};

export default Layout;