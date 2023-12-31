import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import { PlatfromIconList } from "./PlatfromIconList";
import { CriticScore } from "./CriticScore";
import getCropedImageUrl from "../services/image-url";
interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
   
  return (
    <Card >
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>    
        <PlatfromIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
};
