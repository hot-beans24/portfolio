import React from 'react'
import { Text } from '@chakra-ui/react'

const MainText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontSize="sm">
      {children}
    </Text>
  )
}

export default MainText
