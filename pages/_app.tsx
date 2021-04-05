import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

import queryClient from "lib/react-query";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider session={pageProps.session}>
          <ChakraProvider>
            <Component {...pageProps}></Component>
          </ChakraProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
