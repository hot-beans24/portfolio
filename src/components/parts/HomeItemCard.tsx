import Router from 'next/router'
import { Box, Card, CardHeader, CardBody, Image } from '@chakra-ui/react'

type HomeItemCardProps = {
  name: string;
  title: string;
  pathName: string;
  imgSrc: string;
  isReverseDirection?: boolean
}
const HomeItemCard = ({ name, title, pathName, imgSrc, isReverseDirection }: HomeItemCardProps) => {
  const cardClickHandle = (routerPathName: string) => {
    Router.push(routerPathName)
  }

  return (
    <Card onClick={() => cardClickHandle(pathName)}>
      <CardBody display="flex" flexDirection={isReverseDirection ? "row-reverse" : "row"} justifyContent="space-between" alignItems="center">
        {title}
        <Image src={imgSrc} alt={`img_${name}`} width={200} height={200} />
      </CardBody>
    </Card>
  )
}

export default HomeItemCard