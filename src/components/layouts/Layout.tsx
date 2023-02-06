import { type ReactNode } from 'react'
import { Container, useColorMode, Button } from '@chakra-ui/react'

import Header from '@/components/layouts/Header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Container border="1px solid red" height="3000px">
        {children}
      </Container>
    </>
  )
}


export default Layout