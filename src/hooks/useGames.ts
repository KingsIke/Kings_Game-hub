import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]

}

export const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [errors, setErrors] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErrors(err.message)
            })


        return () => controller.abort();


    }, [])
    return { games, errors };
}
