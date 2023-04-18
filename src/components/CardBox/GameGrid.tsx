import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../../hooks/useGames';
import { GameCardContainer } from '../GameCardContainer';
import { GameCardSkeleton } from '../GameCardSkeleton';
import { GameCard } from './GameCard';



export const GameGrid = () => {
    const { data, errors, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>

            {errors && <Text> {errors}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={10}>

                {isLoading && skeletons.map((skeleton) => (
                    <GameCardContainer>
                        < GameCardSkeleton key={skeleton} />
                    </GameCardContainer>
                ))}

                {data.map((game) => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>

    )
}
