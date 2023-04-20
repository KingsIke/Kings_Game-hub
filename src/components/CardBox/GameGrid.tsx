import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../../hooks/useGames';
import { Genre } from '../../hooks/useGenres';
import { GameCardContainer } from '../GameCardContainer';
import { GameCardSkeleton } from '../GameCardSkeleton';
import { GameCard } from './GameCard';


interface Props {
    selectedGenre: Genre | null
}


export const GameGrid = ({ selectedGenre }: Props) => {
    const { data, errors, isLoading } = useGames(selectedGenre)
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
