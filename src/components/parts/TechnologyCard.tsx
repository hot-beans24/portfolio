import { Box, Card, CardHeader, Image } from '@chakra-ui/react'

type TechnologyCardProps = {
  name: string;
  title: string;
  imgSrc: string;
}

const TechnologyCard = ({ name, title, imgSrc }: TechnologyCardProps) => {
  return (
    <Card size="sm" variant="outline" maxWidth={{ base: '100%', sm: '50%' }} >
      <CardHeader fontSize="sm" display="flex" alignItems="center" gap={2}>
        <Image src={imgSrc} alt={`icon_${name}}`} width={5} height={5} />
        <Box as="span" fontWeight={400}>
          {title}
        </Box>
      </CardHeader>
    </Card>
  )
}

export default TechnologyCard
