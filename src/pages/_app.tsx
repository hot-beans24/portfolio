import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import { theme } from '@/constants/theme'

import Layout from '@/components/layouts/Layout'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>Portfolio</title>
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode="wait">
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}

export default App
