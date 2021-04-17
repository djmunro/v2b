import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

import theme from "../theme.js";
import queryClient from "lib/react-query";

const App = ({ Component, pageProps }: AppProps) => {
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
              <Component {...pageProps}></Component>
            </ColorModeProvider>
          </ChakraProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
