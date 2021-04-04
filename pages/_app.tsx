import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <Component {...pageProps}></Component>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
