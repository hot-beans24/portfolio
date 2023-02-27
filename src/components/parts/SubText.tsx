import React from 'react'
import { Text } from '@chakra-ui/react'

const SubText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text marginTop={4} marginBottom={4} fontSize="sm" color="gray.400">
      {children}
    </Text>
  )
}

export default SubText
