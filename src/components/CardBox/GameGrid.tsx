import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../../App';
import { Platform, useGames } from '../../hooks/useGames';
import { Genre } from '../../hooks/useGenres';
import { GameCardContainer } from '../GameCardContainer';
import { GameCardSkeleton } from '../GameCardSkeleton';
import { GameCard } from './GameCard';


interface Props {
    gameQuery: GameQuery

}


export const GameGrid = ({ gameQuery }: Props) => {
    const { data, errors, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>

            {errors && <Text> {errors}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={3}>

                {isLoading && skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        < GameCardSkeleton />
                    </GameCardContainer>
                ))}

                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>

    )
}
