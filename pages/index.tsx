import { signIn, signOut, useSession } from "next-auth/client";

import { getLayout } from "components/SiteLayout";

const IndexPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{session ? "logged in" : "not logged in"}</div>;
};

IndexPage.getLayout = getLayout;

export default IndexPage;
