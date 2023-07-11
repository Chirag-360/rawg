import { Badge } from "@chakra-ui/react"


interface CriticScoreProps {
score:number
}
export const CriticScore = ({score}:CriticScoreProps) => {
    const color = score > 90 ? "yellow" : score > 80 ? "green" : score > 60 ? "yellow" : ""
  return (
    <Badge paddingX={2} borderRadius={"5px"} fontSize={"15px"} colorScheme={color}>{score}</Badge>
  )
}
