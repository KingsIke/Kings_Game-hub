import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../../hooks/useGames';
import { GameCardSkeleton } from '../GameCardSkeleton';
import { GameCard } from './GameCard';



export const GameGrid = () => {
    const { games, errors, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {isLoading && skeletons.map(skeleton => < GameCardSkeleton key={skeleton} />)}
            {errors && <Text> {errors}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>

    )
}
