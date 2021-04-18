import { Provider } from "next-auth/client";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

import theme from "../theme.js";
import queryClient from "lib/react-query";
import { SiteLayout } from "components/SiteLayout";
import { NextPageWithLayout } from "types/index";

type Props = {
  Component: NextPageWithLayout;
  //this any type is from the "import { AppProps } from 'next/app'"
  pageProps: any;
};

const App = ({ Component, pageProps }: Props) => {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout children={page} />);

  const component = getLayout(<Component {...pageProps} />);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider session={pageProps.session}>
          <ChakraProvider resetCSS theme={theme}>
            <ColorModeProvider
              options={{
                useSystemColorMode: true,
              }}
            >
              {component}
            </ColorModeProvider>
          </ChakraProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
