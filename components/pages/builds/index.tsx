import React from "react";

import { Box, Grid, Stack } from "@chakra-ui/react";

// import IBuild from "types/build";
import Build from "./build";

const BuildsList = ({ builds }) => {
  return (
    <Stack spacing={8}>
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {builds?.map((build: any) => (
          <Box key={build.id}>
            <Build build={build} />
          </Box>
        ))}
      </Grid>
    </Stack>
  );
};

export default BuildsList;
