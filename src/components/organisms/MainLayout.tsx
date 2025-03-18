import React from "react";
import Navbar from "../atoms/Navbar/Navbar";
import Footer from "../atoms/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
