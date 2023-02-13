import { Heading } from "@chakra-ui/react"

const PageHeading = ({ title }: { title: string }) => {
  return (
    <Heading
      size="md"

      marginBottom={4}
      paddingLeft={4}
      position="relative"

      _before={{
        content: "''",
        display: "block",
        width: "4px",
        height: "80%",
        borderRadius: "full",
        bgColor: "blue.400",
        position: "absolute",
        top: "50%",
        left: 0,
        translate: "0 -50%"
      }}
    >
      {title}
    </Heading>
  )
}

export default PageHeading