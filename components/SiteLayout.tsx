import React from "react";

import Footer from "./Footer";
import Navbar from "./menu/Navbar";

export const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
