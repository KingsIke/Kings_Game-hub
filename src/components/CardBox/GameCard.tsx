import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../../hooks/useGames'
import getCroppedImageUrl from '../../services/Image-url'
import { Emoji } from '../Emojis/Emoji'
import { CriticScore } from './CriticScore'
import { PlatformIconList } from './PlatformIconList'

interface Props {
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card color='orange' width='300px' borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        {/* {game.parent_platforms.map(platform => (
          <Text key={platform.platform.id}>{platform.platform.name} </Text>
        ))} */}
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top} /> </Heading>
      </CardBody>
    </Card>

  )
}



