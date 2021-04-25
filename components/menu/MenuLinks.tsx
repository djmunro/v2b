import React, { ReactElement } from "react";

import { Button, Box, Stack } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/client";

import MenuItem from "./MenuItem";

interface Props {
  isOpen: boolean;
}

export default function MenuLinks({ isOpen }: Props): ReactElement {
  const [session, loading] = useSession();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="upload-build">Upload Build</MenuItem>
        <MenuItem isLast>
          <Button
            size="sm"
            rounded="md"
            color={["brand.500", "brand.500", "white", "white"]}
            bg={["white", "white", "brand.500", "brand.500"]}
            _hover={{
              bg: ["brand.100", "brand.100", "brand.600", "brand.600"],
            }}
            onClick={() => (session ? signOut() : signIn())}
          >
            {session ? "Sign out" : "Sign in"}
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
}
