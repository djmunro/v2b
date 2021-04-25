import React from "react";

import { Container } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./menu/Navbar";

export const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
