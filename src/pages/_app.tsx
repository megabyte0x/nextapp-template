import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import defaultSEOConfig from "../../next-seo.config";
import customTheme from "../../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <DefaultSeo {...defaultSEOConfig} />
      <ColorModeProvider
        options={{
          initialColorMode: "dark",
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
