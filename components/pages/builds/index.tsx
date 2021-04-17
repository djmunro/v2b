import React from "react";

import { Box, SimpleGrid, Stack } from "@chakra-ui/react";

import Build from "./build";

const BuildsList = ({ builds }) => {
  return (
    <Stack spacing={8}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} gap={8}>
        {builds?.map((build: any) => (
          <Box key={build.id}>
            <Build build={build} />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default BuildsList;
