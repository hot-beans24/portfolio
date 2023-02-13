import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react"

type TechnologyCardProps = {
  name: string;
  title: string;
  isSkillsPage? : boolean;
  level?: string;
  message?: string;
}

const TechnologyCard = ({ name, title, isSkillsPage, level, message }: TechnologyCardProps) => {
  return (
    <Card size="sm" variant="outline" maxWidth={{ base: "100%", sm: "50%" }}>
      <CardHeader fontSize="sm" display="flex" alignItems="center" gap={2}>
        <Image src={`${name}-icon.svg`} alt={`icon_${name}}`} height={5} width={5} />
        <Text as="span">{title}</Text>
      </CardHeader>
      {isSkillsPage && (
        <CardBody paddingTop={0}>
          <Text>{message}</Text>
        </CardBody>
      )}
    </Card>
  )
}

export default TechnologyCard