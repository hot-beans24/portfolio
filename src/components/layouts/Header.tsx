import NextLink from 'next/link'
import { Link, Flex, HStack } from '@chakra-ui/react'

import Logo from '@/components/layouts/Logo'
import Navigation from '@/components/layouts/Navigation'

const Header = () => {
  return (
    <HStack as="header" w="100%" p={{ base: 4, sm: 8 }} alignItems="center" position="sticky" top={0} zIndex={2000}>
      <Logo />
      <Navigation />
    </HStack>
  )
}

export default Header