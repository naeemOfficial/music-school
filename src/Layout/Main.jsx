// src/Main.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const hideNavbarAndFooterRoutes = ["/dashboard"];

  const shouldRenderNavbarAndFooter = !hideNavbarAndFooterRoutes.includes(
    location.pathname
  );

  return (
    <div>
      {shouldRenderNavbarAndFooter && <Navbar />}
      <Outlet />
      {shouldRenderNavbarAndFooter && <Footer />}
    </div>
  );
};

export default Main;
