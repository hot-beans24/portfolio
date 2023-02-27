import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'

import NavigationItem from '@/components/layouts/NavigationItem'
import NavigationItemDivider from '@/components/layouts/NavigationItemDivider'

const Navigation = () => {
  const routerPathname = useRouter().pathname

  return (
    <Flex as="nav" gap={{ base: 2, sm: 4 }} alignItems="center">
      <NavigationItem pageName="Profile" navPathname="/profile"  routerPathname={routerPathname} />
      <NavigationItemDivider />
      <NavigationItem pageName="Skills" navPathname="/skills" routerPathname={routerPathname} />
      <NavigationItemDivider />
      <NavigationItem pageName="Outputs" navPathname="/outputs" routerPathname={routerPathname} />
    </Flex>
  )
}

export default Navigation
