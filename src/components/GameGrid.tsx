import { SimpleGrid, Text } from '@chakra-ui/react';
import { AxiosError, CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';



export const GameGrid = () => {
    const { games, errors } = useGames()

    return (
        <>
            {errors && <Text> {errors}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>

    )
}
