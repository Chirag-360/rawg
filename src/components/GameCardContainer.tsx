import { Box } from "@chakra-ui/react"

interface GameCardContainerProps {
    children:React.ReactNode
}
export const GameCardContainer = ({children}:GameCardContainerProps) => {
  return (
    <Box width="300px" borderRadius="10px" overflow={"hidden"}>
     {children}
    </Box>
    )
}
