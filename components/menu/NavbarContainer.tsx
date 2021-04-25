import React, { ReactElement } from "react";

import { Flex } from "@chakra-ui/react";

interface Props {}

export default function NavbarContainer({
  children,
  ...props
}: any): ReactElement {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["brand.500", "brand.500", "transparent", "transparent"]}
      color={["white", "white", "brand.700", "brand.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
}
