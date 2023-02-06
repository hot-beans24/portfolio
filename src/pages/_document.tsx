import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
