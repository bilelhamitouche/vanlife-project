import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="grid h-screen grid-rows-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
