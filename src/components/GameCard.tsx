import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import { CriticScore } from './CriticScore'
import { PlatformIconList } from './PlatformIconList'

interface Props {
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name} </Heading>
        {/* {game.parent_platforms.map(platform => (
          <Text key={platform.platform.id}>{platform.platform.name} </Text>
        ))} */}
        <HStack justifyContent='space-between'>
          <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>

  )
}



