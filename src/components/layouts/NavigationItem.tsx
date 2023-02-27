import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

type NavigationItemProps = {
  pageName: string;
  navPathname: string;
  routerPathname: string;
}

const NavigationItem = ({ pageName, navPathname, routerPathname }: NavigationItemProps) => {
  const isActive = (navPathname === routerPathname)

  return (
    <Link
      as={NextLink} href={navPathname}

      color={isActive ? 'blue.400' : ''}
      fontSize={{ base: 'sm', sm: 'md' }}
      position="relative"
      letterSpacing="0.1em"
      _after={{
        content: `""`,
        display: 'block',
        width: '0',
        height: '2px',
        borderRadius: 'full',
        bgColor: 'blue.400',
        position: 'absolute',
        left: '50%',
        translate: '-50%',
        transition: '0.2s'
      }}
      _hover={{
        color: 'blue.400',
        _after: {
          width: { base: '30px', md: '40px' }
        }
      }}
    >
      {pageName}
    </Link>
  )
}

export default NavigationItem