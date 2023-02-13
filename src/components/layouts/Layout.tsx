import { type ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

import Header from '@/components/layouts/Header'
import FirstVisitAnimate from '@/components/animation/FirstVisitAnimate'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <FirstVisitAnimate>
      <Header />
      <Container marginTop={{ base: 4, lg: 6 }} marginBottom={14}>
        {children}
      </Container>
    </FirstVisitAnimate>
  )
}


export default Layout