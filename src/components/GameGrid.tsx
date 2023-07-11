import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";


export const GameGrid = () => {
   const {games , error , isLoading } = useGames()
   const skeletons = [1,2,3,4,5,6,7]
  return <div>
    { error && <Text>{error}</Text>}
    <SimpleGrid marginX={5} columns={{sm: 1 , md:2 , lg:3, xl:4}} padding={"10px"} spacing={10} >
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>) }
        {games.map(game => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  </div>;
};
