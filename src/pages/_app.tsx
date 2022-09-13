// pages/_app.js
import { ChakraProvider, } from '@chakra-ui/react'
import {DefaultSeo} from 'next-seo'
import { AppProps } from 'next/app'

import defaultSEOConfig from '../../next-seo.config';
import customTheme from '../../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp