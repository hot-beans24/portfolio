import { Flex } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

const Level = ({ level }: { level: number }) => {
  return (
    <Flex alignItems="center" gap={0.6}>
      {Array(1, 2, 3, 4, 5).map((levelNumber) => (
        <FontAwesomeIcon
          key={levelNumber}
          icon={levelNumber <= level ? faStarSolid : faStarRegular}
          color="#F6E05E"
        />
      ))}
    </Flex>
  )
}

export default Level
