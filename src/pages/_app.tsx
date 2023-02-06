import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '@/constants/theme'

import Layout from '@/components/layouts/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>Portfolio</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App