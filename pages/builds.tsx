import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

import queryClient from "lib/react-query";
import { fetchBuilds } from "lib/queries";

import Page from "components/pages/builds";

const BuildsPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("builds", fetchBuilds);
  const [session] = useSession();

  if (!session) {
    return <div>Not authenticated.</div>;
  }

  return (
    <>
      <Head>All Builds</Head>
      <Page builds={data} />
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
