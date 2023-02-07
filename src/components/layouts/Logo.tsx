import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return (
    <Link as={NextLink} href="/" mr="auto" fontSize={{ base: "md", lg: "2xl" }} fontWeight={500}>
      <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "0.4rem" }} />
      Hot Beans
    </Link>
  )
}

export default Logo