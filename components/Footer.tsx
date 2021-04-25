import React, { ReactElement } from "react";

import { Box } from "@chakra-ui/react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <Box
      d="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      m={4}
    >
      Made with 🤙 by{" "}
      <a href="https://twitter.com/munrod86" target="_blank">
        @munrod86
      </a>
    </Box>
  );
}
