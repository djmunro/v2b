import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

import queryClient from "lib/react-query";
import { fetchBuilds } from "lib/queries";

const BuildsPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("builds", fetchBuilds);
  const [session] = useSession();

  console.log({ data });

  if (!session) {
    return <div>Not authenticated.</div>;
  }

  return (
    <>
      <Head>All Builds</Head>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} gap={8}>
        {data?.map((build: any) => (
          <Box key={build.id} borderWidth="1px" borderRadius="lg">
            <Box as="a" href={build.link}>
              <Heading m="4" size="md">
                {build.title}
              </Heading>
              <Text m="4">{build.notes}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

const getServerSideProps: GetServerSideProps = async ({ req }) => {
  await queryClient.prefetchQuery("builds", fetchBuilds);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default BuildsPage;
