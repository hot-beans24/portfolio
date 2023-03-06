import { Box, Tag, HStack, Flex, Card, CardHeader, CardBody, Image, Heading, Link } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'

import githubIcon from '@/assets/images/github-icon.svg'


type OutputCardProps = {
  name: string;
  title: string;
  techs: string[];
  githubLink?: string;
  siteLink?: string;
}

const OutputCard = ({ name, title, techs, githubLink, siteLink }: OutputCardProps) => {
  return (
    <Card variant="outline">
      <CardHeader fontSize="sm" display="flex" flexDirection={{ base: "column", sm: "row" }} flexWrap="wrap" alignItems="center" gap={2}>
        <Image src={`${name}.png`} alt={`${name}_img`} />
      </CardHeader>
      <CardBody paddingTop={0}>
        <Heading size="sm" marginBottom={4}>{title}</Heading>
        {githubLink &&
          <HStack marginBottom={4}>
            <Image src={githubIcon.src} alt="githubIcon" width={4} height={4} />
            <Link fontSize={6} href={githubLink} _hover={{ opacity: 0.6 }}>{githubLink}</Link>
          </HStack>
        }
        {siteLink &&
          <HStack marginBottom={4}>
            <AttachmentIcon />
            <Link fontSize={6} href={siteLink} _hover={{ opacity: 0.6 }}>{siteLink}</Link>
          </HStack>
        }
        <Flex flexWrap="wrap" gap={2}>
          {techs.map((tech, index) => (
            <Tag key={`tech_${index}`} size="sm" fontWeight={400}>{tech}</Tag>
          ))}
        </Flex>
      </CardBody>
    </Card>
  )
}

export default OutputCard