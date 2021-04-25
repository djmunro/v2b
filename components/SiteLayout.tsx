import React from "react";

import Navbar from "./menu/Navbar";

export const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        <hr />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </footer>
    </>
  );
};

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
