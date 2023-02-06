import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Link as={NextLink} href="/" mr="auto" fontSize={{ base: "md", lg: "2xl" }} fontWeight={500}>Hot Beans</Link>
  )
}

export default Logo