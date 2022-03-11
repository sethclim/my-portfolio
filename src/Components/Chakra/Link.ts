import { ComponentStyleConfig } from "@chakra-ui/react"

export const Link: ComponentStyleConfig = {
  baseStyle: {
    _hover:{
        textDecoration: "none",
        color: "brand.primary"
    }
  },
  defaultProps: {
    colorScheme: "gray",
  },
}