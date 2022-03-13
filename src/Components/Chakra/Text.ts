import { ComponentStyleConfig } from "@chakra-ui/react"

export const Text: ComponentStyleConfig = {
      // 3. We can add a new visual variant
      variants: {
        'hover': {
          _hover:{
                textDecoration:"underline",
                color: "white"
          }
        },
      },
}

