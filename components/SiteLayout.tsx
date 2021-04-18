import React from "react";

export const SiteLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </nav>
      </header>
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
