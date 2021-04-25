import React, { ReactElement } from "react";

import { Box } from "@chakra-ui/react";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";

interface Props {
  toggle: any;
  isOpen: boolean;
}

export default function MenuIcon({ toggle, isOpen }: Props): ReactElement {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <RiCloseFill size={24} /> : <RiMenuLine size={24} />}
    </Box>
  );
}
