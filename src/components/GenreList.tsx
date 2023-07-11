import { HStack, Image, Text, List, ListItem, VStack } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

export const GenreList = () => {
  const { isLoading, data, error } = useGenres();
  return (
    // <VStack>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}  paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCropedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    // </VStack>
  );
};
