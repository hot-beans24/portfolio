import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Flex, Link, Divider } from "@chakra-ui/react"

import { nav } from '@/constants/nav'

const Navigation = () => {
  const router = useRouter()
  
  return (
    <Flex as="nav" gap={{ base: 2, sm: 4 }} alignItems="center" >
      {nav.map((navItem, index) => (
        <React.Fragment key={navItem.id}>
          <Link
            as={NextLink}
            href={navItem.pathName}
            color={navItem.pathName === router.pathname ? "blue.400" : ""}
            fontSize={{ base: "sm", sm: "md" }}
            position="relative"
            letterSpacing="0.1em"
            _after={{
              content: '""',
              display: "block",
              width: "0",
              height: "2px",
              borderRadius: "full",
              bgColor: "blue.400",
              position: "absolute",
              left: "50%",
              translate: "-50%",
              transition: "0.2s"
            }}
            _hover={{
              color: "blue.400",
              _after: {
                width: { base: "30px", md: "40px" }
              }
            }}
          >
            {navItem.pageName}
          </Link>
          {index < 2 && (
            <Divider orientation="vertical" h="20px" borderColor="gray.400" />
          )}
        </React.Fragment>
      ))}
    </Flex>
  )
}

export default Navigation