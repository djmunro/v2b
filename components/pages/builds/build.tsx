import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import { Build } from "@prisma/client";
import build from "next/dist/build";
import React, { FC } from "react";

type Props = {
  build: any;
};

const BuildFC: FC<Props> = ({ build }) => {
  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {build.notes}
      </Text>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>{bodyNode()}</Stack>
    </Box>
  );
};

export default BuildFC;
