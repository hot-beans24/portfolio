import { Heading } from '@chakra-ui/react'

type HeadingProps = {
  title: string;
  isMainHeading?: boolean
}
const PageHeading = ({ title, isMainHeading }: HeadingProps) => {
  const headingSize = isMainHeading ? "md" : "sd"
  const beforeBgColor = isMainHeading ? "blue.400" : "blue.100"

  return (
    <Heading
      size={headingSize} marginBottom={4} paddingLeft={4} position="relative"
      _before={{
        content: '""',
        display: 'block',
        width: '4px',
        height: '80%',
        borderRadius: 'full',
        bgColor: beforeBgColor,
        position: 'absolute',
        top: '50%',
        left: 0,
        translate: '0 -50%'
      }}
    >
      {title}
    </Heading>
  )
}

export default PageHeading
