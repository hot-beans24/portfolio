import { type ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

import FirstVisitAnimate from '@/components/animation/FirstVisitAnimate'
import Header from '@/components/layouts/Header'

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
