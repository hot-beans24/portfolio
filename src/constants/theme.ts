import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    body: "Poppins, Noto Sans JP"
  },
  styles: {
    global: {
      html: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box"
      },
      body: {
        // backgroundColor: "#ffffff"
      }
    },
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none"
        }
      }
    }
  }
})