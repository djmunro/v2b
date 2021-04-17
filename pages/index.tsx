import { signIn, signOut, useSession } from "next-auth/client";

import { Layout } from "components/Layout";

const IndexPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  if (session) {
    return (
      <Layout>
        Hello, {session.user.email ?? session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </Layout>
    );
  } else {
    return (
      <Layout>
        You are not logged in! <br />
        <button onClick={() => signIn()}>Sign in</button>
      </Layout>
    );
  }
};

export default IndexPage;
