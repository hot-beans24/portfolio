import { Flex } from '@chakra-ui/react'

import { type Tech } from '@/types/cardItemType'
import TechnologyCard from '@/components/parts/TechnologyCard'

type TechnologyCardBoxProps = {
  technologies: Tech[]
}

const TechnologyCardBox = ({ technologies }: TechnologyCardBoxProps) => {
  return (
    <Flex flexWrap="wrap" gap={4}>
      {technologies.map((technology) => (
          <TechnologyCard key={technology.id} name={technology.name} title={technology.title} imgSrc={technology.imgSrc} />
        ))}
    </Flex>
  )
}

export default TechnologyCardBox