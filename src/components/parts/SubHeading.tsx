import { Heading } from "@chakra-ui/react"

const SubHeading = ({ title }: { title: string }) => {
  return (
    <Heading
      size="sm"

      marginBottom={{ base: 4 }}
      paddingLeft={4}
      position="relative"

      _before={{
        content: "''",
        display: "block",
        width: "4px",
        height: "80%",
        borderRadius: "full",
        bgColor: "blue.100",
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

export default SubHeading