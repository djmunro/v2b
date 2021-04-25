import React, { ReactElement } from "react";

import { Link, Text } from "@chakra-ui/react";

interface Props {}

export default function MenuItem({
  children,
  isLast,
  to = "/",
  ...rest
}: any): ReactElement {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
}
