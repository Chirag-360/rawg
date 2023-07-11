import { VStack } from "@chakra-ui/react"
import { useGenres } from "../hooks/useGenres"

export const GenreList = () => {
      const {isLoading , genres , error } = useGenres()
  return (
    <VStack>
        <ul>
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    </VStack>
  )
}
