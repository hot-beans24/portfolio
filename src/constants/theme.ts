import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Poppins, Zen Maru Gothic'
  },
  styles: {
    global: {
      body: {
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        lineHeight: 1.7,
        backgroundColor: 'gray.50'
      }
    }
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none'
        }
      }
    },
    Text: {
      baseStyle: {
        letterSpacing: '0.1em'
      }
    }
  }
})
