import React from "react";
import Navigation from "./components/NavBar/Navigation";
import Footer from "./components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
