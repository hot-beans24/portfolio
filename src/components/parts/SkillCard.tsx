import { Box, Card, CardHeader, CardBody, Image } from '@chakra-ui/react'

import Level from '@/components/parts/Level'

type SkillCardProps = {
  name: string;
  title: string;
  level: 1|2|3|4|5;
  imgSrc: string;
}

const SkillCard = ({ name, title, level, imgSrc }: SkillCardProps) => {
  return (
    <Card variant="outline">
      <CardHeader fontSize="sm" display="flex" flexDirection={{ base: "column", sm: "row" }} flexWrap="wrap" alignItems="center" gap={2}>
        <Image src={imgSrc} alt={`icon_${name}}`} width={5} height={5} />
        <Box as="span" marginRight={{ sm: "auto" }} fontWeight={400}>
          {title}
        </Box>
        <Level level={level} />
      </CardHeader>
    </Card>
  )
}

export default SkillCard
