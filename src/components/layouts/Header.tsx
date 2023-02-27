import { HStack } from '@chakra-ui/react'

import Logo from '@/components/layouts/Logo'
import Navigation from '@/components/layouts/Navigation'

const Header = () => {
  return (
    <HStack
      as="header"

      width="100%"
      padding={{ base: 4, sm: 6 }}
      bgColor="whiteAlpha.800"
      boxShadow="sm"
      alignItems="center"
      position="sticky"
      top={0}
      zIndex={2000}
    >
      <Logo />
      <Navigation />
    </HStack>
  )
}

export default Header
