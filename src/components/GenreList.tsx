import { VStack } from "@chakra-ui/react"
import { useGenres } from "../hooks/useGenres"

export const GenreList = () => {
      const {isLoading , data , error } = useGenres()
  return (
    <VStack>
        <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    </VStack>
  )
}
