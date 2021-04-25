import React, { ReactElement } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

interface Props {}

export default function Logo(props: any): ReactElement {
  return (
    <Box {...props} d="flex" alignItems="center">
      <Image w="32px" src="/img/logo.png" alt="Vermintide 2 Builds" />
      <Text fontSize="md" fontWeight="bold" ml={4}>
        Vermintide 2 Builds
      </Text>
    </Box>
  );
}
